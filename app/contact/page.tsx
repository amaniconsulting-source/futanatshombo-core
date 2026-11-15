import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Topic, TOPICS } from '@/lib/topics';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez l’équipe Futa na Tshombo, inscrivez-vous au lancement ou devenez marchand.',
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sujet?: string }>;
}) {
  const { sujet } = await searchParams;
  const initial: Topic = TOPICS.some((t) => t.value === sujet) ? (sujet as Topic) : 'support';

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Une question ? Nous sommes là.</h1>
          <p className="lead">
            Écrivez-nous, inscrivez-vous pour être prévenu du lancement, ou demandez à devenir marchand Futa.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '999 1 420px', minWidth: 0 }}>
            <ContactForm initialTopic={initial} />
          </div>
          <aside style={{ flex: '1 1 260px' }} className="card-box">
            <h2 style={{ fontSize: '1.2rem' }}>Nos coordonnées</h2>
            <p>
              215 Avenue Kabalo (croisement des avenues Kabalo et Mushie)
              <br />
              Commune de Lingwala, Kinshasa
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="tel:+243972027796">(+243) 972 027 796</a>
              <br />
              <a href="mailto:info@amaniconsultinggroup.com">info@amaniconsultinggroup.com</a>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
