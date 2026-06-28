# Kıbrıs Night Club — PRD

## Original Problem Statement
> Selam bana daha önce firstladynightclub.com diye bir web sitesi açmıştın şimdi ikinci bir site istiyorum aynı mantıkta olucak yeterince Seo kaydı görsel içermeli Seo kayıtlarında yine Girne Kıbrıs Eskort içersin Türkçe ve ingilizce dil seçenekleri olsun

## User Choices (Dec 2025)
- Brand: **Kıbrıs Night Club**
- Phone / WhatsApp: **+90 548 855 23 87**
- Gallery profiles: **12**
- Theme: same as firstladynightclub.com (black + rose gold + gold)
- Languages: **Turkish (default) + English**
- Sections: Home, Gallery, Services, Pricing, FAQ, Blog, Contact

## Architecture
- **Frontend**: React 19 + React Router 7 + Tailwind + Shadcn UI
  - `LanguageContext` (localStorage `knc_lang`)
  - `SEO` component injects `<title>` / `meta description` / `keywords` with "Girne Kıbrıs Eskort" or "Kyrenia Cyprus Escort"
  - Age verification modal stored in `localStorage.knc_age_ok`
  - Floating WhatsApp button + sonner toasts
- **Backend**: FastAPI + Motor (Mongo)
  - `POST /api/contact`, `GET /api/contact`
  - existing `/api/status` endpoints retained
- **Data files**: 12 profiles, 4 blog posts (TR+EN), 8 FAQs (TR+EN), pricing & services in translations

## What's Been Implemented (2025-12)
- [x] Bilingual TR/EN with header language switch
- [x] Age verification 18+ modal
- [x] Home page (hero, about, featured 6, why-us, CTA banner)
- [x] Gallery /galeri with 12 profiles + 4 filters (all / new / vip / featured)
- [x] Profile detail /galeri/:id (gallery, stats, bio, WA + call CTA)
- [x] Services /hizmetler (6 services, alternating editorial layout)
- [x] Pricing /fiyatlar (3 plans, VIP highlighted)
- [x] FAQ /sss (8 accordions)
- [x] Blog /blog + /blog/:slug (4 SEO posts in TR+EN)
- [x] Contact /iletisim (info cards + working form → POST /api/contact)
- [x] Footer with quick links, contact, disclaimer
- [x] SEO meta tags with "Girne Kıbrıs Eskort" / "Kyrenia Cyprus Escort"
- [x] Backend tested 7/7, frontend tested 35/35 (Playwright)

## P0 — Done
All requested sections + i18n + SEO live.

## P1 — Backlog (Suggested Next)
- Real model photo uploads (admin panel) with image storage (S3)
- Multi-image gallery slider on profile detail (lightbox)
- Sitemap.xml + robots.txt + hreflang tags for TR/EN
- Server-side rendering / pre-render for stronger SEO indexing
- Schema.org LocalBusiness JSON-LD for Girne location
- Admin dashboard to review contact messages (currently `/api/contact` GET is open)
- Lock down `GET /api/contact` behind admin auth (security todo from testing report)
- Add CAPTCHA / rate limit to contact form

## P2 — Optional
- Additional blog posts (target keywords: "girne otel eskort", "kıbrıs vip eskort", etc.)
- Reviews / testimonials section
- Currency switcher (€ / $ / £ / ₺)
- Booking calendar with time slots
- PWA / installable mobile shortcut

## Key Files
- Frontend: `/app/frontend/src/{App.js, i18n/, components/, pages/, data/}`
- Backend: `/app/backend/server.py`
- Design guide: `/app/design_guidelines.json`
- Tests: `/app/backend/tests/test_api.py`
