import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Futa na Tshombo, le système de paiement en ligne d’Amani Consulting & Investment en République démocratique du Congo.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">À propos</span>
          <h1>Payer simplement, partout en RDC.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          <p>
            Futa na Tshombo est un système innovant de paiement en ligne via un téléphone mobile ou un ordinateur. Il
            permet aux institutions et aux entreprises, grandes et petites, de proposer facilement le paiement en
            ligne à leurs clients, et aux commerçants d’accepter les paiements de tous les portefeuilles mobiles.
          </p>
          <p>
            Futa na Tshombo est un produit de la société Amani Consulting &amp; Investment, cabinet de conseil en
            technologie de l’information et en affaires basé en République démocratique du Congo.
          </p>
          <h2>Futa na Tshombo peut être utilisé pour :</h2>
          <ul>
            <li>le paiement des factures (eau, électricité, assurance, etc.) ;</li>
            <li>le paiement des impôts et taxes ;</li>
            <li>le paiement des loyers ;</li>
            <li>le paiement des frais scolaires et du minerval ;</li>
            <li>les achats chez les commerçants.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
