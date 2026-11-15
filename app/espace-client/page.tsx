import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Espace client',
  robots: { index: false },
};

export default function ClientAreaPage() {
  return (
    <section className="section">
      <div className="container prose">
        <span className="eyebrow">Espace client</span>
        <h1>Nous construisons la nouvelle plateforme Futa.</h1>
        <p className="lead">
          L’ancien espace client est fermé. La nouvelle version, avec l’application Android et iOS, ouvrira bientôt.
          Vous vérifierez alors à nouveau votre numéro de téléphone pour activer votre compte.
        </p>
        <div className="btn-row">
          <Link href="/contact?sujet=liste-attente" className="btn btn-primary">Être prévenu de l’ouverture</Link>
          <Link href="/contact" className="btn btn-ghost">Contacter le support</Link>
        </div>
      </div>
    </section>
  );
}
