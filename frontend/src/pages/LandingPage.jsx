import { Link, useParams } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { landings, landingGirls } from "@/data/landings";
import { ProfileCard } from "@/components/ProfileCard";
import { SEO } from "@/components/SEO";
import { waLink } from "@/data/site";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";

export default function LandingPage() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const landing = landings.find((l) => l.slug === slug);

  if (!landing) {
    return (
      <div
        className="pt-40 pb-24 bg-[#0A0A0B] min-h-screen text-center text-white/70"
        data-testid="landing-not-found"
      >
        <Link to="/galeri" className="text-[#E0BFB8] uppercase text-xs tracking-[0.22em]">
          {t.common.back}
        </Link>
      </div>
    );
  }

  const item = landing[lang] || landing.tr;
  const filtered = landingGirls(landing);

  return (
    <div data-testid={`landing-${landing.slug}`}>
      <SEO customTitle={item.h1} customDesc={item.intro} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={landing.hero}
            alt={item.h1}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/40 via-[#0A0A0B]/70 to-[#0A0A0B]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4">
              <Link to="/" className="hover:text-[#E0BFB8]">
                {t.nav.home}
              </Link>
              <span>/</span>
              <Link to="/galeri" className="hover:text-[#E0BFB8]">
                {t.nav.gallery}
              </Link>
              <span>/</span>
              <span className="text-[#E0BFB8]">{item.breadcrumb}</span>
            </div>
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
              <Sparkles size={12} />
              {landing.type === "hotel" ? (lang === "tr" ? "Otel" : "Hotel") : (lang === "tr" ? "Milliyet" : "Nationality")}
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02] tracking-tight">
              {item.h1}
            </h1>
            <p className="text-[#E0BFB8] text-sm md:text-base uppercase tracking-[0.22em] mt-5">
              {item.subtitle}
            </p>
            <p className="text-white/65 mt-6 max-w-2xl leading-relaxed">
              {item.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Girls */}
      <section className="py-20 md:py-28 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
              {lang === "tr" ? "Bu Kategorideki Modeller" : "Models in This Category"}
            </h2>
            <a
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="landing-wa-btn"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#25D366] hover:brightness-125"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
          {filtered.length === 0 ? (
            <p className="text-white/50 py-10 text-center">
              {t.gallery.empty}
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
              {filtered.map((g) => (
                <ProfileCard g={g} key={g.id} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SEO content */}
      <section className="py-20 md:py-28 bg-[#070708]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
            {lang === "tr" ? "Detaylı Rehber" : "Detailed Guide"}
          </h2>
          {item.seoParagraphs.map((p, i) => (
            <p
              key={i}
              className="text-white/70 text-base md:text-lg leading-[1.85]"
            >
              {p}
            </p>
          ))}

          <div className="mt-10 p-8 border border-[#B76E79]/25 bg-gradient-to-br from-[#141416] to-[#0A0A0B]">
            <h3 className="font-serif text-2xl text-white mb-3">
              {lang === "tr" ? "Hemen rezervasyon" : "Book instantly"}
            </h3>
            <p className="text-white/60 text-sm mb-6">
              {lang === "tr"
                ? "WhatsApp üzerinden 30 saniyede rezervasyon."
                : "Reserve in 30 seconds on WhatsApp."}
            </p>
            <a
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3 uppercase tracking-[0.22em] text-xs font-medium hover:brightness-110"
              data-testid="landing-cta-wa"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>

          <Link
            to="/galeri"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/60 hover:text-white mt-8"
            data-testid="landing-back-gallery"
          >
            <ArrowLeft size={14} /> {t.nav.gallery}
          </Link>
        </div>
      </section>
    </div>
  );
}
