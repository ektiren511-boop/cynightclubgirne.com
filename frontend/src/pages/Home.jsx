import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { girls } from "@/data/girls";
import { SEO } from "@/components/SEO";
import { ProfileCard } from "@/components/ProfileCard";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AmbianceGallery } from "@/components/AmbianceGallery";
import { Manifesto } from "@/components/Manifesto";
import { Marquee } from "@/components/Marquee";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { landings } from "@/data/landings";
import { waLink, SITE } from "@/data/site";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";

export default function Home() {
  const { t, lang } = useLang();
  const featured = girls.filter((g) => g.tags.includes("featured")).slice(0, 6);

  const heroRef = useRef(null);
  const { scrollYProgress: heroP } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(heroP, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(heroP, [0, 1], [1.08, 1.22]);
  const overlayOpacity = useTransform(heroP, [0, 1], [0.85, 1]);
  const heroTextY = useTransform(heroP, [0, 1], ["0%", "-10%"]);

  // Marquee content (editorial ticker)
  const marqueeItems =
    lang === "tr"
      ? [
          "KIBRIS NIGHT CLUB",
          "GIRNE · KUZEY KIBRIS",
          "VIP KONSİYERJ",
          "MERCEDES · YAT · CASINO",
          "7/24 · ÇOK DİLLİ",
          "SINCE 2015",
        ]
      : [
          "KIBRIS NIGHT CLUB",
          "KYRENIA · CYPRUS",
          "VIP CONCIERGE",
          "MERCEDES · YACHT · CASINO",
          "24/7 · MULTILINGUAL",
          "SINCE 2015",
        ];

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}#business`,
        name: SITE.name,
        image:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
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

  // Split hero title into two lines with the final word italicised.
  const heroWords = t.home.heroTitle.split(" ");
  const heroTail = heroWords.slice(-1)[0];
  const heroHead = heroWords.slice(0, -1).join(" ");

  return (
    <div data-testid="home-page" className="relative">
      <SEO jsonLd={homeJsonLd} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-end overflow-hidden bg-black"
        data-testid="hero"
      >
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY, scale: bgScale }}
        >
          <img
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=2400&q=85"
            alt="Girne VIP Konsiyerj"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient veils */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-[#0A0A0B]"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_100%,rgba(212,175,55,0.15),transparent_60%)]" />

        {/* Editorial gridlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "12.5% 100%",
          }}
        />

        {/* Top monogram / meta */}
        <div className="absolute top-24 md:top-28 inset-x-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60 font-mono">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            >
              N° 001 — {lang === "tr" ? "GİRNE / KIBRIS" : "KYRENIA / CYPRUS"}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="hidden md:inline"
            >
              {lang === "tr" ? "MMXV — SÜREKLİ" : "MMXV — ONGOING"}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            >
              35.34° N / 33.31° E
            </motion.span>
          </div>
        </div>

        {/* Signature title */}
        <motion.div
          className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28 w-full z-10"
          style={{ y: heroTextY }}
        >
          <div className="max-w-5xl">
            <div
              className="text-[11px] md:text-xs uppercase tracking-[0.5em] text-[#E0BFB8] mb-8 flex items-center gap-4 font-mono"
              data-testid="hero-eyebrow"
            >
              <span
                className="inline-block w-10 h-px bg-[#E0BFB8]"
                style={{
                  animation:
                    "mask-rise 1.1s cubic-bezier(0.16,1,0.3,1) 0.1s both",
                }}
              />
              <MaskReveal delay={0.2}>{t.home.heroEyebrow}</MaskReveal>
            </div>

            <h1
              className="font-editorial text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10.5rem] font-normal leading-[0.88] tracking-[-0.02em] text-white"
              data-testid="hero-title"
            >
              <MaskReveal delay={0.35}>{heroHead}</MaskReveal>
              <MaskReveal delay={0.55}>
                <em className="italic bg-gradient-to-r from-[#E0BFB8] via-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">
                  {heroTail}.
                </em>
              </MaskReveal>
            </h1>

            <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.95,
                  duration: 1,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="md:col-span-6 text-white/65 text-base md:text-lg leading-relaxed"
              >
                {t.home.heroSubtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.05,
                  duration: 1,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="md:col-span-6 md:col-start-8 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  to="/galeri"
                  data-testid="hero-cta-gallery"
                  className="group inline-flex items-center justify-between gap-4 bg-white text-black px-6 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-[#D4AF37] transition-colors duration-500 flex-1"
                >
                  <span>{t.home.ctaPrimary}</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:rotate-45 transition-transform duration-500"
                  />
                </Link>
                <a
                  href={`tel:${SITE.phone}`}
                  data-testid="hero-cta-call"
                  className="group inline-flex items-center justify-between gap-4 border border-white/25 text-white px-6 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-500 flex-1"
                >
                  <span>{SITE.phoneDisplay}</span>
                  <Phone size={14} />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom sig — scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 right-6 lg:right-10 z-10 hidden md:flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/50 font-mono"
        >
          <span>{lang === "tr" ? "Aşağı" : "Scroll"}</span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-14 bg-gradient-to-b from-[#D4AF37] to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════ MARQUEE TICKER ═══════════════ */}
      <section
        className="relative bg-[#050505] border-y border-white/[0.06] py-5 md:py-6"
        data-testid="marquee-ticker"
      >
        <Marquee
          items={marqueeItems}
          className="font-editorial text-2xl md:text-4xl lg:text-5xl text-white/90 italic tracking-tight"
          separator="◆"
        />
      </section>

      {/* ═══════════════ ABOUT / EDITORIAL ═══════════════ */}
      <section className="py-28 md:py-40 bg-[#0A0A0B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — spotlight photo */}
          <Reveal className="lg:col-span-5 relative">
            <div className="relative">
              {/* Frame marker */}
              <div className="absolute -top-6 left-0 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#B76E79] font-mono z-10">
                <span className="w-6 h-px bg-[#B76E79]" />
                {lang === "tr" ? "PLATE 001" : "PLATE 001"}
              </div>
              <div className="relative aspect-[4/5] overflow-hidden bg-black spotlight">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=85"
                  alt={
                    lang === "tr"
                      ? "Girne 5 yıldızlı otel süiti"
                      : "Kyrenia 5-star hotel suite"
                  }
                  className="w-full h-full object-cover clip-frame"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/25 pointer-events-none" />
                {/* Corner marks */}
                {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
                  (pos, i) => (
                    <span
                      key={i}
                      className={`absolute ${pos} w-4 h-4 border-[#D4AF37]/80 ${
                        i === 0
                          ? "border-l border-t"
                          : i === 1
                            ? "border-r border-t"
                            : i === 2
                              ? "border-l border-b"
                              : "border-r border-b"
                      }`}
                    />
                  ),
                )}
              </div>
              {/* Meta caption */}
              <div className="mt-5 flex items-baseline justify-between text-[10px] uppercase tracking-[0.32em] text-white/45 font-mono">
                <span>Kyrenia · Suite N° 07</span>
                <span>f/1.4 · 35mm</span>
              </div>
            </div>
          </Reveal>

          {/* Right — copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-6 font-mono">
                — {t.home.aboutEyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-editorial text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight">
                {lang === "tr" ? (
                  <>
                    Girne&apos;nin{" "}
                    <em className="italic text-[#E0BFB8]">premium</em>{" "}
                    konsiyerj &<br />
                    <em className="italic text-[#D4AF37]">etkinlik</em>{" "}
                    servisi.
                  </>
                ) : (
                  <>
                    Kyrenia&apos;s{" "}
                    <em className="italic text-[#E0BFB8]">premium</em>{" "}
                    concierge &<br />
                    <em className="italic text-[#D4AF37]">event</em> service.
                  </>
                )}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-white/60 mt-10 leading-[1.7] text-base md:text-lg max-w-2xl">
                {t.home.aboutText}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-8">
                {[
                  { n: "24", l: lang === "tr" ? "Hizmet" : "Services" },
                  { n: "7/24", l: lang === "tr" ? "Aktif" : "Active" },
                  { n: "100%", l: lang === "tr" ? "Diskret" : "Discreet" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-editorial text-4xl md:text-5xl text-[#D4AF37] leading-none">
                      {s.n}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.32em] text-white/50 mt-3 font-mono">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ MANIFESTO — NUMBERED CHAPTERS ═══════════════ */}
      <Manifesto />

      {/* ═══════════════ FEATURED SERVICES ═══════════════ */}
      <section
        className="py-28 md:py-40 bg-[#0A0A0B] relative"
        data-testid="featured-section"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16 md:mb-20">
            <Reveal className="max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-6 font-mono">
                — {t.home.featuredEyebrow} · 006
              </p>
              <h2 className="font-editorial text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
                {t.home.featuredTitle}
              </h2>
              <p className="text-white/55 mt-6 max-w-xl leading-relaxed">
                {t.home.featuredSub}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/galeri"
                data-testid="featured-view-all"
                className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[#E0BFB8] border border-[#E0BFB8]/40 px-6 py-4 hover:bg-[#E0BFB8]/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500"
              >
                {t.common.viewAll}
                <ArrowUpRight
                  size={14}
                  className="group-hover:rotate-45 transition-transform duration-500"
                />
              </Link>
            </Reveal>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09 } },
            }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
          >
            {featured.map((g) => (
              <motion.div
                key={g.id}
                variants={{
                  hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
                  },
                }}
              >
                <ProfileCard g={g} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CATEGORIES ═══════════════ */}
      <section className="py-28 md:py-40 bg-[#070708] border-t border-white/[0.05] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-3xl mb-16">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-6 font-mono">
              — {lang === "tr" ? "KATEGORİLER" : "CATEGORIES"} · 005
            </p>
            <h2 className="font-editorial text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
              {lang === "tr" ? (
                <>
                  Milliyet &{" "}
                  <em className="italic text-[#E0BFB8]">otel bazlı</em>{" "}
                  rehberler.
                </>
              ) : (
                <>
                  Nationality &{" "}
                  <em className="italic text-[#E0BFB8]">hotel-based</em>{" "}
                  guides.
                </>
              )}
            </h2>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5"
          >
            {landings.map((l, idx) => {
              const item = l[lang] || l.tr;
              return (
                <motion.div
                  key={l.slug}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.95, ease: [0.19, 1, 0.22, 1] },
                    },
                  }}
                >
                  <Link
                    to={`/${l.slug}`}
                    data-testid={`category-${l.slug}`}
                    className="group relative block aspect-[4/5] overflow-hidden bg-[#0E0E10] border border-white/[0.06] hover:border-[#D4AF37]/50 transition-colors duration-500"
                  >
                    <img
                      src={l.hero}
                      alt={item.h1}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover grayscale-[35%] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 scale-[1.02] transition-all duration-[1500ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.32em] text-white/60 font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37] mb-2 font-mono">
                        {l.type === "hotel"
                          ? lang === "tr"
                            ? "Otel"
                            : "Hotel"
                          : lang === "tr"
                            ? "Milliyet"
                            : "Nationality"}
                      </p>
                      <h3 className="font-editorial text-2xl md:text-3xl text-white leading-[1.05]">
                        {item.breadcrumb}
                      </h3>
                    </div>
                    <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500 text-[#D4AF37]">
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <TestimonialsSection />

      {/* ═══════════════ AMBIANCE GALLERY ═══════════════ */}
      <AmbianceGallery />

      {/* ═══════════════ EDITORIAL MARQUEE ═══════════════ */}
      <section className="bg-[#0A0A0B] py-8 md:py-10 border-y border-white/[0.05] overflow-hidden">
        <Marquee
          items={
            lang === "tr"
              ? [
                  "REZERVASYON",
                  "WHATSAPP · 7/24",
                  "KIBRIS · GIRNE",
                  "OTEL · CASINO · YAT",
                  "DİSKRETLİK GARANTİLİ",
                ]
              : [
                  "RESERVE",
                  "WHATSAPP · 24/7",
                  "CYPRUS · KYRENIA",
                  "HOTEL · CASINO · YACHT",
                  "GUARANTEED DISCRETION",
                ]
          }
          speed="fast"
          separator="/"
          className="font-mono text-xs md:text-sm text-white/50 uppercase tracking-[0.4em]"
          testId="footer-marquee"
        />
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section
        className="py-28 md:py-40 bg-[#050505] relative overflow-hidden"
        data-testid="final-cta"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=2000&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#050505]/70" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] mb-8 font-mono">
              — {lang === "tr" ? "SON BÖLÜM" : "FINAL CHAPTER"}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-editorial text-5xl md:text-7xl lg:text-[7rem] text-white italic tracking-[-0.02em] leading-[0.95]">
              {t.home.ctaBannerTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 mt-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              {t.home.ctaBannerText}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-14 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={waLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-banner-wa"
                className="group inline-flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 uppercase tracking-[0.28em] text-[11px] font-medium hover:brightness-110 transition-all"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:rotate-45 transition-transform duration-500"
                />
              </a>
              <Link
                to="/galeri"
                data-testid="cta-banner-gallery"
                className="group inline-flex items-center justify-center gap-4 border border-[#D4AF37]/70 text-[#D4AF37] px-10 py-5 uppercase tracking-[0.28em] text-[11px] font-medium hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
              >
                <span>{t.home.ctaPrimary}</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:rotate-45 transition-transform duration-500"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
