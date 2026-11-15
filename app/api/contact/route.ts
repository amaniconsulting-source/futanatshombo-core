import { NextResponse } from 'next/server';

/**
 * Contact, waiting-list and merchant sign-up form.
 * Sends an email to CONTACT_TO through Resend (https://resend.com).
 * Set RESEND_API_KEY, CONTACT_TO and CONTACT_FROM in Vercel.
 */

const TOPIC_LABELS: Record<string, string> = {
  'liste-attente': 'Liste d’attente',
  marchand: 'Nouveau marchand',
  support: 'Support',
  partenariat: 'Partenariat',
};

// Best-effort limit per IP per instance; Vercel's firewall rules can add a hard limit.
const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60_000;

function clean(v: unknown, max: number): string {
  return typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '';
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const now = Date.now();
  const h = hits.get(ip);
  if (h && h.reset > now && h.count >= LIMIT) {
    return NextResponse.json({ error: 'Trop de messages. Réessayez dans quelques minutes.' }, { status: 429 });
  }
  hits.set(ip, h && h.reset > now ? { count: h.count + 1, reset: h.reset } : { count: 1, reset: now + WINDOW_MS });

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  // Spam trap filled in: pretend it worked.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const topic = clean(body.topic, 40);
  const name = clean(body.name, 120);
  const phone = clean(body.phone, 20);
  const email = clean(body.email, 160);
  const business = clean(body.business, 160);
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 4000) : '';

  if (!TOPIC_LABELS[topic]) return NextResponse.json({ error: 'Sujet invalide.' }, { status: 400 });
  if (name.length < 2) return NextResponse.json({ error: 'Indiquez votre nom.' }, { status: 400 });
  if (!/^\+?[\d\s().-]{8,20}$/.test(phone)) {
    return NextResponse.json({ error: 'Indiquez un numéro de téléphone valide.' }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Adresse e-mail invalide.' }, { status: 400 });
  }
  if ((topic === 'support' || topic === 'partenariat') && message.length < 5) {
    return NextResponse.json({ error: 'Écrivez votre message.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !to || !from) {
    console.error('Contact form is not configured (RESEND_API_KEY, CONTACT_TO, CONTACT_FROM).');
    return NextResponse.json(
      { error: 'Le formulaire est momentanément indisponible. Écrivez-nous à info@amaniconsultinggroup.com.' },
      { status: 503 },
    );
  }

  const lines = [`Sujet : ${TOPIC_LABELS[topic]}`, `Nom : ${name}`];
  if (business) lines.push(`Commerce : ${business}`);
  lines.push(`Téléphone : ${phone}`);
  if (email) lines.push(`E-mail : ${email}`);
  lines.push('', message || '(pas de message)');
  const text = lines.join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `[Futa] ${TOPIC_LABELS[topic]} — ${name}`,
      text,
      ...(email ? { reply_to: email } : {}),
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text().catch(() => ''));
    return NextResponse.json({ error: 'Envoi impossible pour le moment. Réessayez plus tard.' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
