import { useLang } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { Reveal, MaskReveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { waLink } from "@/data/site";
import { trackConversion } from "@/lib/ads";
import { Check, Crown, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Pricing() {
  const { t, lang } = useLang();

  return (
    <div className="pt-32 pb-28 bg-[#0A0A0B] min-h-screen" data-testid="pricing-page">
      <SEO customTitle={t.pricing.title} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Editorial header */}
        <div className="border-b border-white/[0.06] pb-16 md:pb-24 mb-16 md:mb-24">
          <Reveal>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-8 font-mono">
              <span className="w-10 h-px bg-[#B76E79]" />
              — {lang === "tr" ? "PAKETLER" : "PACKAGES"} · 003
            </div>
          </Reveal>
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] tracking-[-0.02em]">
            <MaskReveal delay={0.15}>
              {lang === "tr" ? "Şeffaf" : "Transparent"}{" "}
              <em className="italic text-[#E0BFB8]">
                {lang === "tr" ? "fiyat" : "pricing"}
              </em>
              ,
            </MaskReveal>
            <MaskReveal delay={0.35}>
              <em className="italic text-[#D4AF37]">
                {lang === "tr" ? "kişiye özel" : "bespoke fit"}
              </em>
              .
            </MaskReveal>
          </h1>
          <Reveal delay={0.55}>
            <p className="text-white/60 mt-10 max-w-2xl text-base md:text-lg leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Plan cards */}
        <RevealGroup className="grid md:grid-cols-3 gap-6 lg:gap-7" stagger={0.1}>
          {t.pricing.plans.map((p, i) => (
            <RevealItem key={p.name}>
              <div
                data-testid={`pricing-card-${i}`}
                className={`relative h-full flex flex-col p-8 lg:p-10 border transition-all duration-500 ${
                  p.highlight
                    ? "border-[#D4AF37] bg-gradient-to-b from-[#141210] to-[#0A0A0B] shadow-[0_0_60px_-12px_rgba(212,175,55,0.35)] md:-translate-y-3"
                    : "border-white/10 bg-[#0C0C0E] hover:border-[#B76E79]/40"
                }`}
              >
                {/* Plate number top-left */}
                <div className="flex items-center justify-between mb-8">
                  <span className="chapter-num text-6xl md:text-7xl text-[#D4AF37]/25">
                    0{i + 1}
                  </span>
                  {p.highlight && (
                    <span className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-black px-3 py-1 text-[9px] uppercase tracking-[0.28em] font-mono">
                      <Crown size={11} /> {t.pricing.mostPopular}
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-4xl md:text-5xl text-white leading-none tracking-tight">
                  {p.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/50 mt-4 font-mono">
                  {p.duration}
                </p>

                <div className="mt-10 flex items-baseline gap-2">
                  <span
                    className={`font-editorial italic text-4xl md:text-5xl ${
                      p.highlight ? "text-[#D4AF37]" : "text-white"
                    }`}
                  >
                    {p.price}
                  </span>
                </div>

                <div className="h-px bg-gradient-to-r from-white/20 to-transparent my-8" />

                <ul className="space-y-4 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-white/75 text-[15px] leading-relaxed"
                    >
                      <Check
                        size={16}
                        className={
                          p.highlight ? "text-[#D4AF37] mt-1 shrink-0" : "text-[#B76E79] mt-1 shrink-0"
                        }
                        strokeWidth={2}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackConversion("whatsapp", { source: "pricing", plan: p.name })
                  }
                  data-testid={`pricing-cta-${i}`}
                  className={`group mt-10 flex items-center justify-between gap-3 px-6 py-4 uppercase tracking-[0.28em] text-[11px] transition-all duration-500 ${
                    p.highlight
                      ? "bg-white text-black hover:bg-[#D4AF37]"
                      : "border border-[#B76E79]/60 text-[#E0BFB8] hover:bg-[#B76E79]/10 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  }`}
                >
                  <span>{t.common.bookNow}</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:rotate-45 transition-transform duration-500"
                  />
                </a>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Note */}
        <Reveal>
          <div className="mt-24 md:mt-32 border-t border-white/[0.06] pt-14 max-w-3xl">
            <p className="font-editorial italic text-2xl md:text-3xl text-white/80 leading-[1.35]">
              &ldquo;{t.pricing.note}&rdquo;
            </p>
            <a
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp", { source: "pricing_custom" })}
              data-testid="pricing-custom-cta"
              className="group mt-8 inline-flex items-center gap-3 text-[#E0BFB8] hover:text-[#D4AF37] text-[11px] uppercase tracking-[0.32em] transition-colors duration-500"
            >
              <MessageCircle size={14} />
              <span>{t.pricing.contactForCustom}</span>
              <ArrowUpRight
                size={14}
                className="group-hover:rotate-45 transition-transform duration-500"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
