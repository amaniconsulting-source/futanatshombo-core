import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  // Old PHP-site addresses keep working: links people saved or shared land on the new pages.
  async redirects() {
    return [
      { source: '/how-it-works', destination: '/comment-ca-marche', permanent: true },
      { source: '/aboutus', destination: '/a-propos', permanent: true },
      { source: '/security', destination: '/securite', permanent: true },
      { source: '/privacy', destination: '/securite', permanent: true },
      { source: '/customer-support', destination: '/contact', permanent: true },
      // Account areas of the old app: closed until the new platform launches.
      { source: '/login', destination: '/espace-client', permanent: false },
      { source: '/register', destination: '/espace-client', permanent: false },
      { source: '/forgot-password', destination: '/espace-client', permanent: false },
      { source: '/reset-password', destination: '/espace-client', permanent: false },
      { source: '/home', destination: '/espace-client', permanent: false },
      { source: '/customer/:path*', destination: '/espace-client', permanent: false },
      { source: '/biller/:path*', destination: '/espace-client', permanent: false },
      { source: '/admin/:path*', destination: '/espace-client', permanent: false },
    ];
  },
};

export default nextConfig;
