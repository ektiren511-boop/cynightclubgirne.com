import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { ArrowUpRight, Home as HomeIcon } from "lucide-react";

const CONTENT = {
  tr: {
    eyebrow: "SAYFA BULUNAMADI",
    h1a: "Bu",
    h1b: "sahne",
    h1c: "kapalı.",
    body: "Aradığınız sayfa artık yayında değil ya da adres yanlış yazılmış. Ana sayfaya dönüp aramanıza devam edin.",
    home: "Ana sayfa",
    gallery: "Vitrini Gör",
  },
  en: {
    eyebrow: "PAGE NOT FOUND",
    h1a: "This",
    h1b: "stage",
    h1c: "is dark.",
    body: "The page you're looking for isn't live any more or the address is mistyped. Head back to the home page to continue.",
    home: "Home",
    gallery: "See Showcase",
  },
};

export default function NotFound() {
  const { lang } = useLang();
  const c = CONTENT[lang] || CONTENT.tr;

  return (
    <div className="pt-32 pb-28 min-h-[80vh] bg-[#0A0A0B] flex items-center" data-testid="not-found-page">
      <SEO customTitle="404 — Kıbrıs Night Club" customDesc={c.body} />
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-8 font-mono">
            <span className="w-10 h-px bg-[#B76E79]" />
            — {c.eyebrow} · 404
          </div>
        </Reveal>
        <h1 className="font-editorial text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] text-white leading-[0.85] tracking-[-0.02em]">
          <MaskReveal delay={0.15}>
            {c.h1a} <em className="italic text-[#E0BFB8]">{c.h1b}</em>
          </MaskReveal>
          <MaskReveal delay={0.35}>
            <em className="italic text-[#D4AF37]">{c.h1c}</em>
          </MaskReveal>
        </h1>
        <Reveal delay={0.55}>
          <p className="text-white/60 mt-10 max-w-xl text-base md:text-lg leading-relaxed">
            {c.body}
          </p>
        </Reveal>
        <Reveal delay={0.75}>
          <div className="mt-14 flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              data-testid="not-found-home"
              className="group inline-flex items-center justify-between gap-4 bg-white text-black px-8 py-5 uppercase tracking-[0.28em] text-[11px] font-medium hover:bg-[#D4AF37] transition-colors duration-500"
            >
              <span className="flex items-center gap-3">
                <HomeIcon size={14} /> {c.home}
              </span>
              <ArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition-transform duration-500"
              />
            </Link>
            <Link
              to="/galeri"
              data-testid="not-found-gallery"
              className="group inline-flex items-center justify-between gap-4 border border-[#D4AF37]/60 text-[#D4AF37] px-8 py-5 uppercase tracking-[0.28em] text-[11px] font-medium hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
            >
              <span>{c.gallery}</span>
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
