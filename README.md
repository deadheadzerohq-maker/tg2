# TenderGuard

Minimal v1 for TenderGuard — unlimited carrier vetting SaaS.

## Quick start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add env vars (Vercel or `.env.local`):

   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
   - STRIPE_SECRET_KEY
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   - NEXT_PUBLIC_STRIPE_PRICE_ID
   - STRIPE_WEBHOOK_SECRET
   - NEXT_PUBLIC_SITE_URL

3. Run dev server:

   ```bash
   npm run dev
   ```

4. Visit:

   - `/` – landing page
   - `/app` – simple dashboard
