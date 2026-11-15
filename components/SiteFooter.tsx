import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div>
            <h2>Futa na Tshombo</h2>
            <p>
              Un produit d’Amani Consulting &amp; Investment.
              <br />
              215 Avenue Kabalo (croisement des avenues Kabalo et Mushie), Commune de Lingwala, Kinshasa
            </p>
            <p>
              <a href="tel:+243972027796">(+243) 972 027 796</a>
              <br />
              <a href="mailto:info@amaniconsultinggroup.com">info@amaniconsultinggroup.com</a>
            </p>
          </div>
          <div>
            <h2>Découvrir</h2>
            <ul>
              <li><Link href="/comment-ca-marche">Comment ça marche</Link></li>
              <li><Link href="/a-propos">À propos</Link></li>
              <li><Link href="/faq">Questions fréquentes</Link></li>
            </ul>
          </div>
          <div>
            <h2>Aide</h2>
            <ul>
              <li><Link href="/securite">Sécurité</Link></li>
              <li><Link href="/contact">Nous contacter</Link></li>
              <li><Link href="/contact?sujet=marchand">Devenir marchand</Link></li>
            </ul>
          </div>
        </div>
        <p className="legal">© {new Date().getFullYear()} Futa na Tshombo. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
