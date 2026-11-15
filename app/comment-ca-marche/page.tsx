import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comment ça marche',
  description: 'Payer un commerçant, une facture ou des frais scolaires avec Futa na Tshombo, étape par étape.',
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Comment ça marche</span>
          <h1>Nous sommes là pour vous aider à chaque étape.</h1>
          <p className="lead">Trois façons de payer avec Futa na Tshombo, selon ce que vous réglez.</p>
        </div>
      </section>

      <section className="section">
        <div className="container cards three" style={{ marginTop: 0 }}>
          <div className="card-box">
            <h2 style={{ fontSize: '1.3rem' }}>Chez un commerçant</h2>
            <p>
              Scannez le code Futa affiché par le commerçant avec l’appareil photo de votre téléphone, ou composez
              son code à 5 chiffres. Entrez le montant, choisissez votre portefeuille (M-Pesa, Orange Money, Airtel
              Money ou Futa) et confirmez avec votre PIN. Le commerçant reçoit une alerte immédiatement.
            </p>
          </div>
          <div className="card-box">
            <h2 style={{ fontSize: '1.3rem' }}>Pour une facture ou une taxe</h2>
            <p>
              Dans la rubrique « Payer », choisissez votre facturier, entrez le numéro de votre compte chez lui et le
              montant. Vérifiez le récapitulatif, puis confirmez. Votre reçu vous est envoyé par SMS avec une
              référence unique.
            </p>
          </div>
          <div className="card-box">
            <h2 style={{ fontSize: '1.3rem' }}>Pour les frais scolaires</h2>
            <p>
              Choisissez l’école ou l’université, puis le nom de l’élève ou de l’étudiant. Entrez le montant du
              minerval ou des frais et confirmez. L’établissement voit le paiement dès qu’il est confirmé.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container prose">
          <h2>Sans smartphone ?</h2>
          <p>
            Le commerçant peut saisir la vente et votre numéro sur son téléphone : vous recevez alors une demande de
            confirmation de votre réseau mobile et vous validez avec votre PIN habituel. Un menu USSD Futa est
            également prévu.
          </p>
          <p>
            <Link href="/contact?sujet=liste-attente" className="btn btn-primary">Être prévenu du lancement</Link>
          </p>
        </div>
      </section>
    </>
  );
}
