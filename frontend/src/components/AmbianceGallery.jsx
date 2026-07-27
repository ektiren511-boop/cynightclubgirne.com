import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

// Ambiance gallery — Kyrenia night-life stage & club scene.
// All imagery: distant crowd, aerial silk, stage laser, silhouettes — Google Ads safe.
const AMBIANCE = [
  {
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1600&q=85",
    alt_tr: "Sahne şovu — lazer & duman",
    alt_en: "Stage show — laser & smoke",
    tag_tr: "Sahne",
    tag_en: "Stage",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=85",
    alt_tr: "Gece kulübü dans pisti",
    alt_en: "Nightclub dance floor",
    tag_tr: "Dans",
    tag_en: "Dance",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&q=85",
    alt_tr: "Aerial silk performansı",
    alt_en: "Aerial silk performance",
    tag_tr: "Aerial",
    tag_en: "Aerial",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1400&q=85",
    alt_tr: "Konser geçesi kalabalık",
    alt_en: "Concert night crowd",
    tag_tr: "Gece",
    tag_en: "Night",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=85",
    alt_tr: "VIP masa & şampanya",
    alt_en: "VIP table & champagne",
    tag_tr: "VIP",
    tag_en: "VIP",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=85",
    alt_tr: "Lazer sahne ışıkları",
    alt_en: "Laser stage lights",
    tag_tr: "Lazer",
    tag_en: "Laser",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=85",
    alt_tr: "Kalabalık dans pisti",
    alt_en: "Crowded dance floor",
    tag_tr: "Dans",
    tag_en: "Dance",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=85",
    alt_tr: "Sahne silüetleri",
    alt_en: "Stage silhouettes",
    tag_tr: "Silüet",
    tag_en: "Silhouette",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&q=85",
    alt_tr: "Neon & müzik",
    alt_en: "Neon & music",
    tag_tr: "Neon",
    tag_en: "Neon",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1400&q=85",
    alt_tr: "Sahne ışıkları & duman",
    alt_en: "Stage lights & smoke",
    tag_tr: "Show",
    tag_en: "Show",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=1200&q=85",
    alt_tr: "Cabaret gecesi",
    alt_en: "Cabaret night",
    tag_tr: "Cabaret",
    tag_en: "Cabaret",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=1200&q=85",
    alt_tr: "Gece atmosferi",
    alt_en: "Night atmosphere",
    tag_tr: "Gece",
    tag_en: "Night",
    span: "",
  },
];

export const AmbianceGallery = () => {
  const { lang } = useLang();
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="py-28 md:py-40 bg-[#050505] border-t border-white/[0.05] relative overflow-hidden"
      data-testid="ambiance-gallery"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20 items-end">
          <Reveal className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-6 font-mono">
              — {lang === "tr" ? "SAHNE & AMBİYANS" : "STAGE & AMBIANCE"} · 012 PLATES
            </p>
            <h2 className="font-editorial text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
              {lang === "tr" ? (
                <>
                  Girne&apos;nin{" "}
                  <em className="italic text-[#E0BFB8]">sahne</em>{" "}
                  &{" "}
                  <em className="italic text-[#D4AF37]">gece</em>{" "}
                  ambiyansı.
                </>
              ) : (
                <>
                  The Kyrenia{" "}
                  <em className="italic text-[#E0BFB8]">stage</em>{" "}
                  &{" "}
                  <em className="italic text-[#D4AF37]">night</em>{" "}
                  ambiance.
                </>
              )}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-white/55 leading-[1.7] text-base md:text-lg">
              {lang === "tr"
                ? "Sahne şovları, aerial silk performansları, lazer geceleri ve VIP masa hizmeti — bir gecede yaşayacaklarınızın önizlemesi. 12 kadraj, tek bir Girne gecesi."
                : "Stage shows, aerial silk performances, laser nights and VIP bottle service — a preview of what your night holds. 12 frames, one Kyrenia evening."}
            </p>
            <div className="flex items-center gap-4 mt-6 text-[10px] uppercase tracking-[0.32em] text-white/40 font-mono">
              <span className="w-8 h-px bg-white/30" />
              <span>N° 012 / XII</span>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]"
          onMouseLeave={() => setHovered(null)}
        >
          {AMBIANCE.map((img, i) => {
            const isActive = hovered === null || hovered === i;
            return (
              <motion.figure
                key={i}
                data-testid={`ambiance-tile-${i}`}
                onMouseEnter={() => setHovered(i)}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                    clipPath: "inset(20% 20% 20% 20%)",
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0% 0% 0% 0%)",
                    transition: {
                      duration: 1.1,
                      ease: [0.19, 1, 0.22, 1],
                    },
                  },
                }}
                animate={{
                  filter: isActive
                    ? "grayscale(0%) brightness(1)"
                    : "grayscale(60%) brightness(0.55)",
                }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className={`group relative overflow-hidden bg-black border border-white/[0.05] ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={lang === "tr" ? img.alt_tr : img.alt_en}
                  loading="lazy"
                  className="w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[1600ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.32em] text-white/70 font-mono flex items-center gap-2">
                  <span className="w-4 h-px bg-white/60" />
                  PL / {String(i + 1).padStart(2, "0")}
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between gap-3">
                  <p className="text-white text-xs md:text-sm font-medium tracking-wide leading-tight">
                    {lang === "tr" ? img.alt_tr : img.alt_en}
                  </p>
                  <span className="inline-block bg-[#D4AF37] text-black px-2 py-0.5 text-[9px] uppercase tracking-[0.28em] font-mono shrink-0">
                    {lang === "tr" ? img.tag_tr : img.tag_en}
                  </span>
                </figcaption>

                <div className="absolute inset-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
                    (pos, j) => (
                      <span
                        key={j}
                        className={`absolute ${pos} w-3 h-3 border-[#D4AF37] ${
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
                </div>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
