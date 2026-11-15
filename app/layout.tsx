import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://futanatshombo.com'),
  title: {
    default: 'Futa na Tshombo — Payez partout, depuis n’importe quel portefeuille',
    template: '%s · Futa na Tshombo',
  },
  description:
    'Payez vos factures, taxes, frais scolaires et vos achats chez les commerçants depuis M-Pesa, Orange Money, Airtel Money ou votre portefeuille Futa. Lancement prochain à Kinshasa.',
  icons: { icon: '/icon.png' },
  openGraph: {
    type: 'website',
    locale: 'fr_CD',
    siteName: 'Futa na Tshombo',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${display.variable}`}>
      <body>
        <a className="skip" href="#contenu">Aller au contenu</a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
