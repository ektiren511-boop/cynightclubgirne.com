import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

// Full-bleed editorial "Stage Highlights" spread — three signature scenes.
// All imagery: distant crowd / silhouette / laser stage — Google Ads safe.
const STAGE_FRAMES = [
  {
    id: "aerial",
    img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=2000&q=85",
    tag_tr: "AERIAL SILK",
    tag_en: "AERIAL SILK",
    title_tr: "Aerial silk sahnesi.",
    title_en: "Aerial silk stage.",
    desc_tr:
      "Cirque du Soleil estetiğinde havai sahne performansları. Kabare gecesi koreografiyle sunuluyor, VIP masa ekleniyor.",
    desc_en:
      "Cirque du Soleil style aerial performances. Presented with cabaret-night choreography, VIP tables layered on top.",
  },
  {
    id: "laser",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=2000&q=85",
    tag_tr: "LAZER SAHNE",
    tag_en: "LASER STAGE",
    title_tr: "Lazer geceleri.",
    title_en: "Laser nights.",
    desc_tr:
      "Duman, lazer ve büyük sahne ışıklarıyla konser hissi veren gösteriler. Genç gruplar için ideal.",
    desc_en:
      "Concert-like shows with smoke, laser and grand stage lighting. Ideal for younger guest groups.",
  },
  {
    id: "cabaret",
    img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=2000&q=85",
    tag_tr: "CABARET",
    tag_en: "CABARET",
    title_tr: "Cabaret & şampanya.",
    title_en: "Cabaret & champagne.",
    desc_tr:
      "Uzun masalar, koreografili sahne şovları, canlı vokal ve şampanya töreni ile klasik cabaret geceleri.",
    desc_en:
      "Long tables, choreographed stage shows, live vocals and champagne rituals — classic cabaret evenings.",
  },
];

export const StageHighlights = () => {
  const { lang } = useLang();
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={secRef}
      className="relative py-24 md:py-36 bg-[#0A0A0B] border-y border-white/[0.05] overflow-hidden"
      data-testid="stage-highlights"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-20 items-end">
          <Reveal className="lg:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-6 font-mono">
              — {lang === "tr" ? "SAHNE ÖNE ÇIKANLAR" : "STAGE HIGHLIGHTS"} · 003
            </p>
            <h2 className="font-editorial text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
              <MaskReveal delay={0.05}>
                {lang === "tr" ? (
                  <>
                    <em className="italic text-[#E0BFB8]">Sahnede</em> ne{" "}
                    yaşanır?
                  </>
                ) : (
                  <>
                    What happens{" "}
                    <em className="italic text-[#E0BFB8]">on stage</em>?
                  </>
                )}
              </MaskReveal>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={0.15}>
            <p className="text-white/55 leading-relaxed">
              {lang === "tr"
                ? "Girne'nin lisanslı sahne kulüplerinde üç imza deneyim — aerial silk, lazer geceleri ve klasik cabaret. Her biri koreografili, VIP masayla."
                : "Three signature experiences at Kyrenia's licensed stage clubs — aerial silk, laser nights and classic cabaret. Each choreographed, each with a VIP table."}
            </p>
          </Reveal>
        </div>

        {/* 3-frame stage stack */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {STAGE_FRAMES.map((frame, i) => (
            <motion.article
              key={frame.id}
              initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1,
                delay: i * 0.12,
                ease: [0.19, 1, 0.22, 1],
              }}
              data-testid={`stage-frame-${frame.id}`}
              className={`group relative overflow-hidden bg-black ${
                i === 1 ? "md:mt-16" : ""
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.img
                  src={frame.img}
                  alt={lang === "tr" ? frame.title_tr : frame.title_en}
                  loading="lazy"
                  style={{ y }}
                  className="w-full h-[115%] object-cover scale-105 group-hover:scale-115 transition-transform duration-[1600ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                {/* Registration marks */}
                {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
                  (pos, j) => (
                    <span
                      key={j}
                      className={`absolute ${pos} w-3.5 h-3.5 border-[#D4AF37]/70 ${
                        j === 0
                          ? "border-l border-t"
                          : j === 1
                            ? "border-r border-t"
                            : j === 2
                              ? "border-l border-b"
                              : "border-r border-b"
                      }`}
                    />
                  ),
                )}

                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="chapter-num text-5xl md:text-6xl text-[#D4AF37]/70">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white/60 font-mono">
                      SCENE / {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37] font-mono mt-1">
                      {lang === "tr" ? frame.tag_tr : frame.tag_en}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="font-editorial italic text-3xl md:text-4xl text-white leading-none tracking-tight">
                    {lang === "tr" ? frame.title_tr : frame.title_en}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mt-4 max-w-sm">
                    {lang === "tr" ? frame.desc_tr : frame.desc_en}
                  </p>
                  <Link
                    to="/sahne-servisi"
                    data-testid={`stage-frame-cta-${frame.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#E0BFB8] group-hover:text-[#D4AF37] transition-colors duration-500"
                  >
                    {lang === "tr" ? "Detayları Gör" : "See Details"}
                    <ArrowUpRight
                      size={14}
                      className="group-hover:rotate-45 transition-transform duration-500"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
