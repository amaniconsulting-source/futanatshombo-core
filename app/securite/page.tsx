import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sécurité',
  description: 'Comment Futa na Tshombo protège vos informations, et nos conseils pour rester en sécurité.',
};

export default function SecurityPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Sécurité</span>
          <h1>La sécurité de vos données est notre priorité.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          <h2>Chiffrement TLS</h2>
          <p>
            Toutes les pages de Futa na Tshombo sont servies en HTTPS avec le protocole TLS : vos identifiants, mots
            de passe et informations de compte sont chiffrés pendant leur transmission. Le cadenas affiché dans la
            barre d’adresse de votre navigateur le confirme.
          </p>
          <h2>Confidentialité</h2>
          <p>
            L’accès à votre compte est protégé par un identifiant et un code connus de vous seul. Nos équipes n’ont
            pas accès à vos données sans votre autorisation, et vos données ne sont jamais vendues à des tiers.
          </p>
          <h2>Votre PIN reste sur votre téléphone</h2>
          <p>
            Vous confirmez chaque paiement sur votre propre téléphone, avec le PIN de votre portefeuille. Le
            commerçant ne voit ni ne saisit jamais votre PIN.
          </p>

          <h2>Nos conseils de sécurité</h2>
          <ul>
            <li>Ne communiquez jamais votre PIN ni votre mot de passe, même à quelqu’un qui dit travailler pour Futa.</li>
            <li>Choisissez un mot de passe avec des chiffres et des lettres minuscules et majuscules, et changez-le régulièrement.</li>
            <li>Vérifiez le nom du commerçant et le montant avant de confirmer un paiement.</li>
            <li>Déconnectez-vous de votre compte avant de quitter l’application sur un appareil partagé.</li>
            <li>En cas de doute sur un message ou un appel, contactez-nous directement via la page Contact.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
