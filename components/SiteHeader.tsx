import Image from 'next/image';
import Link from 'next/link';

const links = [
  { href: '/comment-ca-marche', label: 'Comment ça marche' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/faq', label: 'FAQ' },
  { href: '/securite', label: 'Sécurité' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container bar">
        <Link href="/" className="logo" aria-label="Futa na Tshombo, accueil">
          <Image src="/logo.png" alt="Futa na Tshombo" width={140} height={50} priority />
        </Link>
        <nav aria-label="Navigation principale">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contact?sujet=liste-attente" className="btn btn-primary">
          Être prévenu du lancement
        </Link>
      </div>
    </header>
  );
}
