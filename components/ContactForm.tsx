'use client';

import { useState } from 'react';
import { Topic, TOPICS } from '@/lib/topics';

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'ok' } | { kind: 'error'; message: string };

export function ContactForm({ initialTopic }: { initialTopic: Topic }) {
  const [topic, setTopic] = useState<Topic>(initialTopic);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    setStatus({ kind: 'sending' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error ?? 'Envoi impossible pour le moment.');
      setStatus({ kind: 'ok' });
      formEl.reset();
    } catch (err) {
      setStatus({ kind: 'error', message: (err as Error).message });
    }
  }

  const needsMessage = topic === 'support' || topic === 'partenariat';

  if (status.kind === 'ok') {
    return (
      <p className="notice ok" role="status">
        Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <label>
        Sujet
        <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value as Topic)}>
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </label>
      <label>
        Nom complet
        <input name="name" required maxLength={120} autoComplete="name" />
      </label>
      {topic === 'marchand' && (
        <label>
          Nom du commerce et quartier
          <input name="business" required maxLength={160} placeholder="Ex. Salon de coiffure, Gombe" />
        </label>
      )}
      <label>
        Téléphone
        <input name="phone" type="tel" required maxLength={20} autoComplete="tel" placeholder="+243 …" />
      </label>
      <label>
        E-mail (facultatif)
        <input name="email" type="email" maxLength={160} autoComplete="email" />
      </label>
      <label>
        Message{needsMessage ? '' : ' (facultatif)'}
        <textarea name="message" required={needsMessage} maxLength={4000} />
      </label>
      {/* Spam trap: humans never see or fill this field. */}
      <div className="hp" aria-hidden="true">
        <label>
          Site web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status.kind === 'error' && (
        <p className="notice err" role="alert">{status.message}</p>
      )}
      <div>
        <button className="btn btn-primary" type="submit" disabled={status.kind === 'sending'}>
          {status.kind === 'sending' ? 'Envoi…' : 'Envoyer'}
        </button>
      </div>
    </form>
  );
}
