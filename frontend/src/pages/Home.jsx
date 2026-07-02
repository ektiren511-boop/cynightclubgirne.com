import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { girls } from "@/data/girls";
import { SEO } from "@/components/SEO";
import { ProfileCard } from "@/components/ProfileCard";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { landings } from "@/data/landings";
import { waLink, SITE } from "@/data/site";
import {
  ShieldCheck,
  Crown,
  Clock,
  Hotel,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const { t, lang } = useLang();
  const featured = girls.filter((g) => g.tags.includes("featured")).slice(0, 6);

  const whyIcons = [ShieldCheck, Crown, Clock, Hotel];

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}#business`,
        name: SITE.name,
        image: "https://images.unsplash.com/photo-1646977858731-ec11d66a1aaa?w=1200&q=80",
        url: SITE.url,
        telephone: SITE.phone,
        priceRange: "€€€",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Girne",
          addressRegion: "Kuzey Kıbrıs",
          addressCountry: "CY",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.latitude,
          longitude: SITE.longitude,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        sameAs: [SITE.url],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: [lang === "tr" ? "tr-TR" : "en-US"],
      },
    ],
  };

  return (
    <div data-testid="home-page">
      <SEO jsonLd={homeJsonLd} />

      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1646977858731-ec11d66a1aaa?w=1920&q=80"
            alt="Kıbrıs Night Club"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/40 via-[#0A0A0B]/65 to-[#0A0A0B]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-24 md:pb-32 w-full">
          <div className="max-w-3xl">
            <p
              className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-[#E0BFB8] mb-7"
              data-testid="hero-eyebrow"
            >
              {t.home.heroEyebrow}
            </p>
            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.95] tracking-tight text-white"
              data-testid="hero-title"
            >
              {t.home.heroTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic bg-gradient-to-r from-[#E0BFB8] to-[#D4AF37] bg-clip-text text-transparent">
                {t.home.heroTitle.split(" ").slice(-1)}
              </span>
            </h1>
            <p className="text-white/65 text-base md:text-lg mt-7 max-w-xl leading-relaxed">
              {t.home.heroSubtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/galeri"
                data-testid="hero-cta-gallery"
                className="bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white px-8 py-4 uppercase tracking-[0.22em] text-xs font-medium hover:brightness-110 transition-all inline-flex items-center justify-center gap-3"
              >
                {t.home.ctaPrimary} <ArrowRight size={14} />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                data-testid="hero-cta-call"
                className="border border-[#B76E79]/60 text-[#E0BFB8] px-8 py-4 uppercase tracking-[0.22em] text-xs font-medium hover:bg-[#B76E79]/10 transition-all inline-flex items-center justify-center gap-3"
              >
                <Phone size={14} /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[#0A0A0B]" />
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1671031990999-77f3bd7e9731?w=1200&q=80"
                alt={lang === "tr" ? "Girne Kıbrıs Eskort" : "Kyrenia Cyprus Escort"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/20" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
              {t.home.aboutEyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
              {t.home.aboutTitle}
            </h2>
            <p className="text-white/65 mt-8 leading-relaxed text-base md:text-lg max-w-xl">
              {t.home.aboutText}
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "12+", l: lang === "tr" ? "Model" : "Models" },
                { n: "7/24", l: lang === "tr" ? "Hizmet" : "Service" },
                { n: "100%", l: lang === "tr" ? "Diskret" : "Discreet" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-3xl md:text-4xl text-[#D4AF37]">
                    {s.n}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/55 mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROFILES */}
      <section className="py-24 md:py-32 bg-[#0A0A0B] relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B76E79]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
                {t.home.featuredEyebrow}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
                {t.home.featuredTitle}
              </h2>
              <p className="text-white/55 mt-4 max-w-xl">
                {t.home.featuredSub}
              </p>
            </div>
            <Link
              to="/galeri"
              className="text-xs uppercase tracking-[0.25em] text-[#E0BFB8] border-b border-[#E0BFB8] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
              data-testid="featured-view-all"
            >
              {t.common.viewAll} →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {featured.map((g) => (
              <ProfileCard g={g} key={g.id} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 md:py-32 bg-[#070708]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
              {t.home.whyEyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
              {t.home.whyTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-16 bg-white/[0.05]">
            {t.home.whyItems.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div
                  key={i}
                  className="bg-[#070708] p-10 md:p-12 group hover:bg-[#0E0E10] transition-colors"
                  data-testid={`why-item-${i}`}
                >
                  <Icon
                    className="text-[#D4AF37] mb-7 group-hover:scale-110 transition-transform duration-500"
                    size={32}
                    strokeWidth={1.2}
                  />
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES (SEO LANDING LINKS) */}
      <section className="py-24 md:py-32 bg-[#0A0A0B] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
                {lang === "tr" ? "Kategoriler" : "Categories"}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                {lang === "tr"
                  ? "Milliyet ve Otel Bazlı Rehberler"
                  : "Nationality & Hotel Guides"}
              </h2>
              <p className="text-white/55 mt-4 max-w-xl">
                {lang === "tr"
                  ? "Tercih ettiğiniz milliyet veya otele göre model seçin — Girne Kıbrıs eskort dünyasında en detaylı rehberler."
                  : "Choose by preferred nationality or hotel — the most detailed guides in the Kyrenia Cyprus escort scene."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {landings.map((l) => {
              const item = l[lang] || l.tr;
              return (
                <Link
                  key={l.slug}
                  to={`/${l.slug}`}
                  data-testid={`category-${l.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden bg-[#0E0E10] border border-white/[0.06] hover:border-[#D4AF37]/40 transition-colors duration-500"
                >
                  <img
                    src={l.hero}
                    alt={item.h1}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 scale-105 group-hover:scale-110 transition-all duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
                      {l.type === "hotel"
                        ? lang === "tr"
                          ? "Otel"
                          : "Hotel"
                        : lang === "tr"
                          ? "Milliyet"
                          : "Nationality"}
                    </p>
                    <h3 className="font-serif text-2xl text-white leading-tight">
                      {item.breadcrumb}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CTA BANNER */}
      <section className="py-24 md:py-32 bg-[#0A0A0B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A0B]/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white italic tracking-tight">
            {t.home.ctaBannerTitle}
          </h2>
          <p className="text-white/65 mt-6 max-w-2xl mx-auto text-base md:text-lg">
            {t.home.ctaBannerText}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-banner-wa"
              className="bg-[#25D366] text-white px-10 py-4 uppercase tracking-[0.22em] text-xs font-medium hover:brightness-110 inline-flex items-center justify-center gap-3"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Link
              to="/galeri"
              data-testid="cta-banner-gallery"
              className="border border-[#D4AF37]/70 text-[#D4AF37] px-10 py-4 uppercase tracking-[0.22em] text-xs font-medium hover:bg-[#D4AF37]/10 inline-flex items-center justify-center gap-3"
            >
              {t.home.ctaPrimary} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
