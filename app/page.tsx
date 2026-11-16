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
            <span className="btn-side btn-action" />
            <span className="btn-side btn-vol-up" />
            <span className="btn-side btn-vol-down" />
            <span className="btn-side btn-power" />
            <div className="screen">
              <div className="island" />
              <div className="status">
                <span>12:00 PM</span>
                <span className="status-icons">
                  <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="7" width="3" height="4" rx="1" /><rect x="4.5" y="5" width="3" height="6" rx="1" /><rect x="9" y="2.5" width="3" height="8.5" rx="1" /><rect x="13.5" y="0" width="3" height="11" rx="1" /></svg>
                  <svg width="15" height="11" viewBox="0 0 15 11"><path d="M7.5 2.2c2 0 3.9.8 5.3 2.1l1.1-1.1A9 9 0 0 0 7.5.6 9 9 0 0 0 1.1 3.2l1.1 1.1A7.5 7.5 0 0 1 7.5 2.2Zm0 3.1c1.2 0 2.3.5 3.1 1.2l1.1-1.1a6 6 0 0 0-8.4 0l1.1 1.1c.8-.7 1.9-1.2 3.1-1.2Zm0 3.1-1.6 1.6L7.5 11l1.6-1.6-1.6-1Z" /></svg>
                  <span className="battery"><span /></span>
                </span>
              </div>
              <div className="app-head">
                <span>Encaissements du jour</span>
                <strong>Salon Amani</strong>
              </div>
              <div className="card">
                <div style={{ fontSize: 13, opacity: 0.9 }}>Paiement reçu</div>
                <div className="amount">+12,00 $</div>
                <div style={{ fontSize: 13, opacity: 0.9 }}>Salon Amani · via Futa</div>
              </div>
              <div className="row"><span>M-Pesa</span><span className="ok">+8 000 FC</span></div>
              <div className="row"><span>Orange Money</span><span className="ok">+10,00 $</span></div>
              <div className="row"><span>Airtel Money</span><span className="ok">+5,00 $</span></div>
              <div className="total"><span>Paiements reçus aujourd’hui</span><strong>4</strong></div>
              <div className="qr-btn">
                <svg width="16" height="16" viewBox="0 0 16 16"><path d="M1 1h6v6H1V1Zm1.5 1.5v3h3v-3h-3ZM9 1h6v6H9V1Zm1.5 1.5v3h3v-3h-3ZM1 9h6v6H1V9Zm1.5 1.5v3h3v-3h-3ZM9 9h2v2H9V9Zm2 2h2v2h-2v-2Zm2-2h2v2h-2V9Zm0 4h2v2h-2v-2Zm-4 0h2v2H9v-2Z" /></svg>
                Afficher mon code QR
              </div>
              <div className="home-bar" />
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
