# Kıbrıs Night Club — PRD

## Original Problem Statement
> İlk hedef: firstladynightclub.com benzeri, SEO uyumlu, TR/EN çift dilli site (cynightclubgirne.com).
>
> **DEV PİVOT (Ocak 2026):** Google Ads politikalarının ihlali nedeniyle proje tamamen yön değiştirdi — **"Kıbrıs Night Club — Girne VIP Concierge & Event Service"** konseptine (lüks konsiyerj, otel, casino, gece kulübü, yat, sahne şovları) dönüştürüldü. Yetişkin/eskort içerikleri, kadın portreleri, yaş/beden istatistikleri ve fiyat listeleri tamamen kaldırıldı.

## User Choices
- Brand: **Kıbrıs Night Club**
- Phone / WhatsApp: **+90 548 855 23 87**
- Domain: **cynightclubgirne.com**
- Languages: **Turkish (default) + English**
- Google Ads Tag: **AW-18318323179** (public/index.html)
- Google Ads Conversion Labels: **placeholder** in `/app/frontend/src/lib/ads.js` — user will fill in from Google Ads panel

## Architecture
- **Frontend**: React 19 + React Router 7 + Tailwind + Shadcn UI
  - `LanguageContext` (localStorage `knc_lang`), `SEO` per-page JSON-LD/OG/canonical
  - **Motion**: framer-motion 11.18 + lenis 1.3.25 momentum scroll
  - **Analytics**: `lib/ads.js` `trackConversion(kind, extra)` helper on all CTAs
- **Backend**: FastAPI + Motor (Mongo)
  - `POST /api/contact` mock success, `GET /api/contact`
- **Data files**: `/data/girls.js` (24 VIP showcase items), `/data/blog.js` (10 posts), `/data/faq.js`, `/data/landings.js` (5 category landings)

### 2026-02-c — More stage-show imagery (Google-Ads-safe)
- **StageHighlights** — yeni Home bölümü: 3 signature scene (aerial silk / laser stage / cabaret champagne) editorial layout, MaskReveal, /sahne-servisi CTA'lar
- **AmbianceGallery** — 8 → **12 tile**, uniform 4-col grid (design bug fixed), all stage/dance/DJ/laser/silhouette imagery, 0 duplicates
- **girls.js sahne servisleri**: 6 kaydın galerisi 2 → 4-5 image'a genişletildi (Cabaret, Aerial, DJ, Bottle, Laser, Vocals)
- **Broken/wrong Unsplash IDs purged (tümü test edildi ve doğrulandı):**
  - `1601370552761` (baccarat 404) → `1541278107931` (poker chips ✓)
  - `1596738081493` (slots 404) → `1596838132731` (slot machines ✓)
  - `1560472354` (analytics dashboard!) → `1518895312237` (roulette ✓)
  - `1544551763` (scuba diver!) → `1567899378494` (yacht sunset ✓)
  - `1502672260266` (orange sofa!) → `1540946485063` (sailboat ✓ for beach-club-day)
  - `1615671524827` (seedling), `1519708227418` (food), `1504609773096` (compass), `1571266028243` (dead), `1533174072545` (dead), `1511671782779` (dead) — hepsi kaldırıldı
- **live-vocals-night** gallery duplicate fixed
- **404 catch-all route** eklendi: `<Route path="*" element={<NotFound />}>` — editorial "Bu sahne kapalı." sayfası, /vitrin/... gibi geçersiz URL'lerde artık boş sayfa yerine 404 render ediliyor (Google Ads landing-page kalitesi için önemli)
- **Testing**: iteration_13 → 90% (image bug'ları), iteration follow-up → **0 broken images across all 24 gallery cards + all landing pages**

## What's Been Implemented

### 2025-12 — Initial build
- Bilingual TR/EN, Home/Gallery/Services/Pricing/FAQ/Blog/Contact, testimonials, 5 SEO landings, sitemap.xml, robots.txt

### 2026-01 — Google Ads compliance pivot
- Removed all escort / adult / age-height-weight content
- Renamed profiles → VIP services, swapped covers to venue photography
- Trust Strip, AmbianceGallery, Google Ads global tag (AW-18318323179)
- AgeVerificationModal removed

### 2026-02-a — Awwwards editorial redesign
- Added **lenis 1.3.25** smooth scroll (`SmoothScroll.jsx`)
- **Kinetic hero**: parallax bg + line-by-line masked title reveal + editorial N°001 top meta
- **Marquee ticker** below hero + **Numbered manifesto** (4 chapters)
- Signature typography: Instrument Serif + JetBrains Mono + Outfit
- AmbianceGallery motion reveals + spotlight hover
- Navbar scroll-hide + gradient scroll-progress bar + layoutId active-dot
- Film grain SVG overlay + gold selection color

### 2026-02-b — Editorial redesign extended + Google Ads Conversion Tracking + vehicle purge
- **`/app/frontend/src/lib/ads.js`** — `trackConversion(kind)` helper with placeholder labels (whatsapp / contact / call) firing `window.gtag('event','conversion',{send_to})`. User will replace `PLACEHOLDER_*_LABEL` with values from Google Ads → Tools → Conversions once available.
- **Services / Pricing / BookingGuide / Contact / Blog** all rewritten with the same editorial language: MaskReveal titles, `— SECTION · 00X` mono eyebrow strip, numbered chapters, `ArrowUpRight` CTAs with `hover:rotate-45`
- **trackConversion wired** on hero-cta-call, cta-banner-wa, floating-whatsapp-btn, pricing-cta-0..2, pricing-custom-cta, services-cta-wa, booking-cta-wa, booking-cta-call, contact-wa-card, contact-call-card, contact-submit
- **Vehicle purge (Google Ads compliance)**:
  - First 6 items in `girls.js` replaced (Mercedes/BMW/Maybach/Range Rover → Cabaret Show / Aerial Silk / Live DJ Night / VIP Bottle / Laser Stage / Live Vocals)
  - Marquee "MERCEDES · YAT · CASINO" → "SAHNE · OTEL · CASINO"
  - `/transfer-servisi` landing rewritten as `/sahne-servisi` ("Girne Sahne, Kabare ve Gece Kulübü Show Servisi")
  - Blog hero image swapped (was Mercedes S-Class)
  - Home hero image swapped to nightclub crowd + laser (photo-1516450360452)
  - Gallery translation subtitle: "Mercedes Transfer" → "Sahne, Kulüp, Otel, Casino ve Yat"
- **Verified**: `grep -irln 'mercedes|maybach|BMW|Range Rover|1618843479313' /app/frontend/src/` → **0 matches**
- **Testing**: testing_agent_v3_fork iteration_11 → 85% (2 HIGH bugs found), iteration_12 → **100%** all regressions passed

## Backlog / P1
- Fill in real Google Ads Conversion labels in `/app/frontend/src/lib/ads.js` when the user creates them in Google Ads panel
- (Optional) Add 301 redirect from `/transfer-servisi` → `/sahne-servisi` if the old URL is/was indexed
- Extend editorial motion to LandingPage catch-all (`/:slug`)
- Real commissioned photography (currently on-brand Unsplash placeholders)

## Backlog / P2
- Custom cursor / magnetic hover on CTAs
- Horizontal-scroll AmbianceGallery variant
- 3D WebGL hero moment (three.js drei ScrollControls)
- SSR / pre-render for stronger SEO
- Admin dashboard for `/api/contact` messages

## Known Infra Issue (NOT code-related)
- Emergent K8s deployment timeout — user should contact `support@emergent.sh`.

## Key Files
- Motion primitives: `/app/frontend/src/components/{Reveal.jsx, SmoothScroll.jsx, Marquee.jsx, Manifesto.jsx, AmbianceGallery.jsx, Navbar.jsx}`
- Ads: `/app/frontend/src/lib/ads.js` (single source for conversion labels)
- Editorial pages: `/app/frontend/src/pages/{Home,Services,Pricing,BookingGuide,Contact,Blog}.jsx`
- Data: `/app/frontend/src/data/{girls,blog,landings}.js`
- Styles: `/app/frontend/src/index.css` (grain, mask-rise, marquee-x, spotlight, clip-frame)
- Fonts: `/app/frontend/public/index.html` (Instrument Serif + JetBrains Mono + Cormorant + Outfit)
- Tests: `/app/test_reports/iteration_{10,11,12}.json`
