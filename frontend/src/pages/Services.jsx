import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { Reveal, MaskReveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { trackConversion } from "@/lib/ads";
import { waLink } from "@/data/site";
import {
  Hotel,
  Utensils,
  Music,
  Anchor,
  Plane,
  PartyPopper,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const ICONS = [Hotel, Utensils, Music, Anchor, Plane, PartyPopper];

export default function Services() {
  const { t, lang } = useLang();

  return (
    <div className="pt-32 pb-28 bg-[#0A0A0B] min-h-screen" data-testid="services-page">
      <SEO customTitle={t.services.title} />

      {/* Editorial header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border-b border-white/[0.06] pb-16 md:pb-24 mb-16 md:mb-24">
          <Reveal>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-8 font-mono">
              <span className="w-10 h-px bg-[#B76E79]" />
              — {t.home.servicesEyebrow} · 006
            </div>
          </Reveal>
          <h1
            className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] tracking-[-0.02em]"
            data-testid="services-title"
          >
            <MaskReveal delay={0.15}>
              {lang === "tr" ? "VIP" : "The VIP"}{" "}
              <em className="italic text-[#E0BFB8]">
                {lang === "tr" ? "Hizmet" : "Service"}
              </em>
            </MaskReveal>
            <MaskReveal delay={0.35}>
              <em className="italic text-[#D4AF37]">
                {lang === "tr" ? "Paleti." : "Palette."}
              </em>
            </MaskReveal>
          </h1>
          <Reveal delay={0.55}>
            <p className="text-white/60 mt-10 max-w-2xl text-base md:text-lg leading-relaxed">
              {t.services.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Services list */}
        <RevealGroup className="space-y-3" stagger={0.08}>
          {t.services.list.map((s, i) => {
            const Icon = ICONS[i] || Hotel;
            return (
              <RevealItem key={i}>
                <article
                  data-testid={`service-row-${i}`}
                  className="group grid md:grid-cols-12 gap-8 items-start py-14 md:py-16 border-t border-white/[0.07] hover:border-[#B76E79]/40 transition-colors duration-500"
                >
                  <div className="md:col-span-2 flex md:flex-col items-start gap-6">
                    <span className="chapter-num text-6xl md:text-7xl text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors duration-500">
                      0{i + 1}
                    </span>
                    <Icon
                      className="text-white/80"
                      size={30}
                      strokeWidth={1.1}
                    />
                  </div>
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-6 h-px bg-[#B76E79]" />
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#B76E79] font-mono">
                        CH · {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05] group-hover:text-[#E0BFB8] transition-colors duration-500">
                      {s.name}
                    </h3>
                    <p className="text-white/60 mt-6 max-w-2xl leading-[1.7] text-base md:text-lg">
                      {s.desc}
                    </p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <a
                      href={waLink(lang)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackConversion("whatsapp", { source: "services", service: s.name })}
                      className="group/cta inline-flex md:flex-col items-center md:items-end gap-2 text-[10px] uppercase tracking-[0.32em] text-[#E0BFB8] hover:text-[#D4AF37] transition-colors duration-500"
                    >
                      <span>{lang === "tr" ? "Talep Et" : "Request"}</span>
                      <ArrowUpRight
                        size={22}
                        className="group-hover/cta:rotate-45 transition-transform duration-500"
                      />
                    </a>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Bottom CTA rail */}
        <Reveal>
          <div className="mt-24 md:mt-32 grid md:grid-cols-2 gap-4 md:gap-6 border-t border-white/[0.06] pt-16">
            <a
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp", { source: "services_footer" })}
              data-testid="services-cta-wa"
              className="group flex items-center justify-between gap-4 bg-[#25D366] text-white px-8 py-6 uppercase tracking-[0.28em] text-[11px] font-medium hover:brightness-110 transition-all"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={16} /> WhatsApp
              </span>
              <ArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition-transform duration-500"
              />
            </a>
            <Link
              to="/fiyatlar"
              data-testid="services-cta-pricing"
              className="group flex items-center justify-between gap-4 border border-[#D4AF37]/60 text-[#D4AF37] px-8 py-6 uppercase tracking-[0.28em] text-[11px] font-medium hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
            >
              <span>{lang === "tr" ? "Paketleri Gör" : "See Packages"}</span>
              <ArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition-transform duration-500"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
