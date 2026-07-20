# Kıbrıs Night Club — PRD

## Original Problem Statement
> İlk hedef: firstladynightclub.com benzeri, SEO uyumlu, TR/EN çift dilli eskort sitesi (cynightclubgirne.com).
>
> **DEV PİVOT (Ocak 2026):** Google Ads politikalarının ihlali nedeniyle proje tamamen yön değiştirdi ve **"Kıbrıs Night Club — Girne VIP Concierge & Event Service"** konseptine (lüks transfer, otel, casino, gece kulübü, yat) dönüştürüldü. Yetişkin/eskort içerikleri, kadın portreleri, yaş/beden istatistikleri ve fiyat listeleri tamamen kaldırıldı.

## User Choices
- Brand: **Kıbrıs Night Club**
- Phone / WhatsApp: **+90 548 855 23 87**
- Domain: **cynightclubgirne.com**
- Languages: **Turkish (default) + English**
- Google Ads Tag: **AW-18318323179** (hardcoded in `public/index.html`)
- Sections: Home, Gallery/Vitrin, Services, Pricing, Booking Guide, Blog, FAQ, Contact

## Architecture
- **Frontend**: React 19 + React Router 7 + Tailwind + Shadcn UI
  - `LanguageContext` (localStorage `knc_lang`)
  - `SEO` component (per-page title/meta/JSON-LD)
  - Floating WhatsApp button + sonner toasts
  - **Motion**: framer-motion 11.18 + lenis 1.3.25 smooth scroll
- **Backend**: FastAPI + Motor (Mongo)
  - `POST /api/contact` (mock success), `GET /api/contact`
- **Data files**: 24 VIP services (Mercedes/Hotel/Casino/Yacht/Nightlife) in `/data/girls.js`, 10 blog posts, 8 FAQs, pricing & services in `translations.js`

## What's Been Implemented

### 2025-12 (initial build)
- [x] Bilingual TR/EN with header language switch
- [x] Home, Gallery, Services, Pricing, FAQ, Blog (10 posts), Contact
- [x] 5 SEO landing pages (/cratos-eskort, /merit-eskort, /rus-eskort, /turk-eskort, /ukraynali-eskort)
- [x] Testimonials section
- [x] Enhanced SEO: canonical, hreflang, JSON-LD, OG, sitemap.xml, robots.txt

### 2026-01 — Google Ads pivot
- [x] Removed all escort / adult / age-height-weight content
- [x] Renamed profiles → VIP services (Mercedes S-Class, E-Class, Cratos VIP, Merit VIP, yacht, casino etc.)
- [x] Swapped 24 portrait covers → luxury vehicle / hotel / casino / yacht imagery
- [x] Rewrote translations.js for VIP Concierge tone
- [x] Google Ads global tag (AW-18318323179) embedded
- [x] Trust Strip on Home
- [x] Removed AgeVerificationModal
- [x] Added AmbianceGallery component (nightclub/casino/hotel venue photography, no portraits)

### 2026-02 — Awwwards editorial redesign (this iteration)
- [x] Added **lenis 1.3.25** momentum smooth scroll (`SmoothScroll.jsx`)
- [x] **Kinetic hero**: parallax bg (framer-motion useScroll/useTransform), line-by-line masked title reveal, editorial N°001 top meta row, scroll cue.
- [x] **Editorial marquee ticker** below hero (`Marquee.jsx`, endless-loop CSS animation, pausable on hover)
- [x] **Numbered manifesto** section (`Manifesto.jsx`) — 4 chapters with giant italic serif numerals (0.85 line-height)
- [x] Signature typography: **Instrument Serif** (editorial display) + **JetBrains Mono** (meta/uppercase) + **Outfit** (body)
- [x] **AmbianceGallery** rewritten with `motion.figure` clip-path reveals + spotlight hover (non-hovered tiles desaturate to 60% greyscale)
- [x] **ProfileCards** stagger reveal with blur→sharp on scroll
- [x] **Navbar** scroll-hide on downward scroll, gradient scroll-progress bar under, layoutId animated active-dot indicator
- [x] Global **film grain** SVG overlay + gold selection color + custom keyframes (mask-rise, marquee-x)
- [x] Corner registration marks + editorial gridlines on hero
- [x] Editorial "chapter numbering" throughout (N° 001 – 008, PL/01 plate marks on gallery)
- [x] Final CTA reworked as "Final Chapter" with revealing background image
- [x] Verified 100% by testing_agent_v3_fork (iteration_10.json) — all data-testids present, Google Ads compliance clean across all 8 pages.

## P0 — Done
Everything requested is live: award-worthy editorial redesign with motion polish, TR/EN, Google Ads compliant, all pages functional.

## P1 — Backlog
- Extend the editorial motion language to secondary pages (`Services`, `Pricing`, `BookingGuide`, `FAQ`, `Contact`, `Blog`) with matching MaskReveal + numbered chapter headers
- Blog hero cover swap to on-brand Kyrenia/lounge visual (minor)
- Silence framer-motion `position:static` warning by wrapping SmoothScroll target with `position:relative`
- Real photography (commission or license) to replace Unsplash placeholders
- Sitemap regen with new URL structure
- Google Ads **Conversion Tracking** labels for WhatsApp / Contact buttons

## P2 — Optional
- Custom cursor / magnetic hover on CTAs
- Horizontal-scroll AmbianceGallery variant
- 3D WebGL hero moment (three.js drei ScrollControls) for signature route
- Server-side rendering for stronger SEO
- Admin dashboard for `/api/contact` messages

## Known Infra Issue (NOT code-related)
- Emergent K8s deployment timeout — user should contact `support@emergent.sh`.

## Key Files
- Motion primitives: `/app/frontend/src/components/{Reveal.jsx, SmoothScroll.jsx, Marquee.jsx, Manifesto.jsx, AmbianceGallery.jsx, Navbar.jsx}`
- Page: `/app/frontend/src/pages/Home.jsx`
- Styles: `/app/frontend/src/index.css` (grain, mask-rise, marquee-x, spotlight, clip-frame)
- Fonts: `/app/frontend/public/index.html` (Instrument Serif + JetBrains Mono added)
- Data: `/app/frontend/src/data/girls.js` (24 VIP services — Google-Ads-safe)
- Tests: `/app/test_reports/iteration_10.json`
