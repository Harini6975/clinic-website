# Dr. M. Kalaivanan website conversion

This project has been repurposed from the HospitalCare multispecialty demo into a single-doctor orthopaedic website starter.

## Implemented in this pass
- Updated brand, visual style, navigation and page title for Dr. M. Kalaivanan.
- Replaced the hospital Home page with an orthopaedic-focused landing page.
- Reworked About, doctor profile, treatments, patient education and contact pages.
- Added an English/Tamil language toggle with localStorage persistence for the redesigned pages.
- Reworked appointment requests to submit to Supabase REST API using environment variables.
- Added a SQL migration for a dedicated `doctor_appointment_requests` table with RLS and public insert only.
- Removed invented doctor credentials, surgery totals and unverified contact numbers from the new page content.

## Setup
1. Copy `.env.example` to `.env.local`.
2. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from the Supabase project (never use a service-role/secret key in frontend code).
3. In Supabase SQL Editor, run `supabase/migrations/202610220001_doctor_appointment_requests.sql`.
4. Install dependencies with `npm install`, then run `npm run dev`.

## Client details to confirm before going live
- Doctor-approved headshot and exact display name.
- Qualifications, fellowships, experience, hospital/clinic affiliations and services.
- Correct clinic address, map pin, phone number, consultation hours and booking workflow.
- Approved YouTube links, articles, privacy notice and consent process.

## Important remaining work
- The existing admin dashboard is inherited from the hospital demo. It has not yet been converted to an admin-only Supabase appointments/CMS dashboard. The migration intentionally does not grant public read access to patient appointment data.
- Existing Careers, events, legacy backend and other demo files remain in the project for preservation, but should be reviewed/removed or adapted before launch.
- Full Tamil translations were added to the redesigned main pages, but legacy pages and admin screens still need a translation pass.
- SEO metadata currently has a starter description. Add verified clinic details, canonical URL, Open Graph data, sitemap, robots.txt and local structured data after the final domain is confirmed.
- Replace the sample stock doctor image with a client-approved photo. Do not imply the stock image is Dr. Kalaivanan.
