import { useLang } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { waLink } from "@/data/site";
import { Check, Crown, MessageCircle } from "lucide-react";

export default function Pricing() {
  const { t, lang } = useLang();

  return (
    <div className="pt-32 pb-24 bg-[#0A0A0B] min-h-screen" data-testid="pricing-page">
      <SEO customTitle={t.pricing.title} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
            {lang === "tr" ? "Şeffaf Fiyatlandırma" : "Transparent Pricing"}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
            {t.pricing.title}
          </h1>
          <p className="text-white/60 mt-6">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.pricing.plans.map((p, i) => (
            <div
              key={p.name}
              data-testid={`pricing-card-${i}`}
              className={`relative p-8 lg:p-10 border bg-gradient-to-b from-[#121214] to-[#0A0A0B] transition-all duration-500 ${
                p.highlight
                  ? "border-[#D4AF37] shadow-[0_0_40px_-10px_rgba(212,175,55,0.4)] md:-translate-y-3"
                  : "border-white/10 hover:border-[#B76E79]/40"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black px-4 py-1 text-[10px] uppercase tracking-[0.22em] inline-flex items-center gap-1.5">
                  <Crown size={12} /> {t.pricing.mostPopular}
                </div>
              )}
              <h3 className="font-serif text-3xl text-white mb-2">{p.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                {p.duration}
              </p>
              <div className="mt-8 flex items-baseline gap-2">
                <span
                  className={`font-serif text-6xl ${p.highlight ? "text-[#D4AF37]" : "text-white"}`}
                >
                  {p.price}
                </span>
              </div>
              <div className="h-px bg-white/10 my-8" />
              <ul className="space-y-3.5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-white/70 text-sm"
                  >
                    <Check
                      size={16}
                      className={p.highlight ? "text-[#D4AF37]" : "text-[#B76E79]"}
                      strokeWidth={2}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`pricing-cta-${i}`}
                className={`mt-10 block text-center py-4 uppercase tracking-[0.22em] text-xs transition-all ${
                  p.highlight
                    ? "bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white hover:brightness-110"
                    : "border border-[#B76E79]/60 text-[#E0BFB8] hover:bg-[#B76E79]/10"
                }`}
              >
                {t.common.bookNow}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-white/55 text-sm leading-relaxed">{t.pricing.note}</p>
          <a
            href={waLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="pricing-custom-cta"
            className="mt-8 inline-flex items-center gap-3 text-[#E0BFB8] hover:text-[#D4AF37] text-xs uppercase tracking-[0.22em]"
          >
            <MessageCircle size={16} /> {t.pricing.contactForCustom}
          </a>
        </div>
      </div>
    </div>
  );
}
