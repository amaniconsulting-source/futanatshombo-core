# Futa na Tshombo — public website

Next.js (App Router, TypeScript) site that replaces the old PHP site on futanatshombo.com. French, no accounts or payments yet: home, how it works, about, FAQ, security, contact, and a waiting-list / merchant sign-up form. Old PHP addresses (`/aboutus`, `/how-it-works`, `/login`, `/customer/...`) redirect to the new pages.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # what Vercel runs
```

## Deploy on Vercel

1. Push this folder to a private GitHub repository.
2. Vercel → Add New → Project → import it. Framework: Next.js (detected).
3. Settings → Environment Variables (Production and Preview), see `.env.example`:
   - `RESEND_API_KEY` — from resend.com; verify the `futanatshombo.com` domain there so emails are delivered.
   - `CONTACT_TO` — where form messages go (e.g. info@amaniconsultinggroup.com).
   - `CONTACT_FROM` — e.g. `Futa na Tshombo <noreply@futanatshombo.com>`.
   Without them the site works, and the form tells visitors to email you instead.
4. Deploy, check the preview URL, then Settings → Domains → add `futanatshombo.com` and `www.futanatshombo.com`.

## Switching the domain safely

- In cPanel → Zone Editor, write down every DNS record first.
- Change only the website records (`@` A record and `www` CNAME) to the values Vercel shows.
- Do **not** change MX, SPF, DKIM or DMARC records if email is hosted on cPanel.
- Once the new site is live: delete the old app files and backup zips from cPanel, and rotate the credentials that were in the old `.env`.

## Structure

```
app/                 pages (one folder per URL) and the contact API route
components/          header, footer, contact form
lib/topics.ts        contact form subjects (shared by server and client)
public/              logo and icon
next.config.ts       security headers, redirects from the old PHP URLs
```

Fonts: Inter and Space Grotesk via `next/font` (self-hosted at build, no request to Google from visitors).
