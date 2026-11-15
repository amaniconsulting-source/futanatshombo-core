import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Questions fréquentes',
  description: 'Réponses aux questions fréquentes sur Futa na Tshombo.',
};

const faqs: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: 'Quand Futa na Tshombo sera-t-il disponible ?',
    a: (
      <>
        Nous préparons le lancement, en commençant par Kinshasa.{' '}
        <Link href="/contact?sujet=liste-attente">Inscrivez-vous</Link> pour être prévenu dès l’ouverture.
      </>
    ),
  },
  {
    q: 'Faut-il payer pour s’inscrire ?',
    a: 'Non. L’inscription sur le site et sur l’application est gratuite.',
  },
  {
    q: 'Avec quels portefeuilles pourrai-je payer ?',
    a: 'M-Pesa, Orange Money, Airtel Money et le portefeuille Futa, en francs congolais (CDF) ou en dollars (USD).',
  },
  {
    q: 'Ai-je besoin d’un smartphone ?',
    a: 'Non. Le commerçant peut saisir la vente avec votre numéro : vous confirmez ensuite sur votre téléphone avec le PIN de votre portefeuille mobile.',
  },
  {
    q: 'Comment savoir si mon paiement a bien été effectué ?',
    a: 'Un paiement n’est affiché comme réussi qu’après confirmation par le réseau. Vous recevez alors un reçu par SMS avec une référence unique, et le commerçant ou le facturier est prévenu.',
  },
  {
    q: 'Je suis commerçant. Comment accepter Futa ?',
    a: (
      <>
        <Link href="/contact?sujet=marchand">Laissez-nous vos coordonnées</Link> : nous vous contacterons pour
        vous remettre votre code Futa et activer vos alertes de paiement.
      </>
    ),
  },
  {
    q: 'J’avais un compte sur l’ancien site. Que se passe-t-il ?',
    a: 'L’ancien site a été fermé pendant la construction de la nouvelle plateforme. À l’ouverture, vous vérifierez à nouveau votre numéro de téléphone pour activer votre compte.',
  },
  {
    q: 'Où télécharger l’application ?',
    a: 'Les applications Android et iOS seront disponibles sur Google Play et l’App Store au lancement. Les liens seront publiés ici.',
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h1>Questions fréquentes</h1>
        </div>
      </section>
      <section className="section">
        <div className="container prose faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
