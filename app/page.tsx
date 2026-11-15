import Link from 'next/link';

const benefits = [
  {
    title: 'Facile à utiliser',
    text: 'Scannez le code du commerçant ou choisissez votre facturier, entrez le montant, confirmez avec votre code PIN. C’est tout.',
    icon: (
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10" />
    ),
  },
  {
    title: 'Tous les portefeuilles',
    text: 'M-Pesa, Orange Money, Airtel Money ou votre solde Futa : vous payez avec celui que vous avez, en francs congolais ou en dollars.',
    icon: <path d="M3 7h18v12H3zM3 7l2-4h14l2 4M16 13h2" />,
  },
  {
    title: 'Paiements plus rapides',
    text: 'Plus besoin d’aller à la banque, de chercher la monnaie ou de passer des heures dans les embouteillages pour payer une facture.',
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  },
  {
    title: 'Confirmation immédiate',
    text: 'Vous recevez votre reçu par SMS dès que le paiement est confirmé par le réseau. Le commerçant est prévenu au même moment.',
    icon: <path d="M20 6 9 17l-5-5" />,
  },
];

const audiences = ['Particuliers', 'Commerçants', 'Entreprises', 'Parents', 'Étudiants', 'Écoles et universités'];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container grid">
          <div>
            <span className="badge">Lancement prochain à Kinshasa</span>
            <h1>Payez vos factures, taxes, frais scolaires et vos achats, sans effort et en toute sécurité.</h1>
            <p className="lead">
              Futa na Tshombo, c’est un seul code chez chaque commerçant et chaque facturier, accepté depuis
              n’importe quel portefeuille mobile. Même chez le coiffeur du quartier.
            </p>
            <div className="btn-row">
              <Link href="/contact?sujet=liste-attente" className="btn btn-primary">Être prévenu du lancement</Link>
              <Link href="/comment-ca-marche" className="btn btn-ghost">Voir comment ça marche</Link>
            </div>
          </div>
          <div className="phone" aria-hidden="true">
            <div className="screen">
              <div className="card">
                <div style={{ fontSize: 13, opacity: 0.9 }}>Paiement reçu</div>
                <div className="amount">+12,00 $</div>
                <div style={{ fontSize: 13, opacity: 0.9 }}>Salon Mama Jeanne · via Futa</div>
              </div>
              <div className="row"><span>M-Pesa</span><span className="ok">+8 000 FC</span></div>
              <div className="row"><span>Orange Money</span><span className="ok">+10,00 $</span></div>
              <div className="row"><span>Airtel Money</span><span className="ok">+5,00 $</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Pourquoi Futa na Tshombo</span>
          <h2>Un moyen fiable, sûr et rapide de payer.</h2>
          <div className="cards">
            {benefits.map((b) => (
              <div key={b.title} className="card-box">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {b.icon}
                  </svg>
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <span className="eyebrow">Comment ça marche</span>
          <h2>Trois étapes, quelques secondes.</h2>
          <ol className="steps">
            <li>
              <h3>Scannez ou choisissez</h3>
              <p>Scannez le code Futa du commerçant, ou choisissez votre facturier : SNEL, école, université, taxe.</p>
            </li>
            <li>
              <h3>Confirmez avec votre PIN</h3>
              <p>Sur votre propre téléphone, avec le PIN de votre portefeuille. Personne d’autre ne le voit.</p>
            </li>
            <li>
              <h3>Recevez votre reçu</h3>
              <p>Le paiement est confirmé, vous recevez votre reçu et le commerçant est prévenu immédiatement.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Pour tout le monde</span>
          <h2>Une solution de paiement pour chacun.</h2>
          <p className="lead">
            Factures d’eau et d’électricité, impôts et taxes, loyers, frais scolaires et minerval, achats chez les
            commerçants.
          </p>
          <div className="chips">
            {audiences.map((a) => (
              <span key={a} className="chip">{a}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta">
            <div>
              <h2 style={{ color: '#fff' }}>Vous êtes commerçant ?</h2>
              <p>Un autocollant, un téléphone, et vous acceptez tous les portefeuilles mobiles. Inscrivez-vous pour le lancement.</p>
            </div>
            <Link href="/contact?sujet=marchand" className="btn btn-primary">Devenir marchand Futa</Link>
          </div>
        </div>
      </section>
    </>
  );
}
