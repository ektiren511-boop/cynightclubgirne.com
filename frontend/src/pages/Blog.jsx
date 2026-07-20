import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { posts } from "@/data/blog";
import { SEO } from "@/components/SEO";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function Blog() {
  const { t, lang } = useLang();

  return (
    <div className="pt-32 pb-28 bg-[#0A0A0B] min-h-screen" data-testid="blog-page">
      <SEO customTitle={t.blog.title} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Editorial header */}
        <div className="border-b border-white/[0.06] pb-16 md:pb-24 mb-16 md:mb-24">
          <Reveal>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-8 font-mono">
              <span className="w-10 h-px bg-[#B76E79]" />
              — {lang === "tr" ? "EDİTORYAL" : "EDITORIAL"} · 010
            </div>
          </Reveal>
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] tracking-[-0.02em]">
            <MaskReveal delay={0.15}>
              {lang === "tr" ? "Girne" : "Kyrenia"}{" "}
              <em className="italic text-[#E0BFB8]">
                {lang === "tr" ? "günlüğü" : "journal"}
              </em>
              .
            </MaskReveal>
          </h1>
          <Reveal delay={0.4}>
            <p className="text-white/60 mt-10 max-w-2xl text-base md:text-lg leading-relaxed">
              {t.blog.subtitle}
            </p>
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
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {posts.map((p, i) => {
            const item = p[lang] || p.tr;
            const isHero = i === 0;
            return (
              <motion.div
                key={p.slug}
                variants={{
                  hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
                  },
                }}
                className={isHero ? "md:col-span-2" : ""}
              >
                <Link
                  to={`/blog/${p.slug}`}
                  data-testid={`blog-card-${p.slug}`}
                  className="group block"
                >
                  <div
                    className={`overflow-hidden bg-black relative ${
                      isHero ? "aspect-[21/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={p.cover}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[1600ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.32em] text-white/70 font-mono flex items-center gap-2">
                      <span className="w-4 h-px bg-white/60" />
                      N° {String(i + 1).padStart(2, "0")}
                    </div>
                    {isHero && (
                      <div className="absolute bottom-6 right-6 bg-[#D4AF37] text-black px-3 py-1.5 text-[9px] uppercase tracking-[0.32em] font-mono">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="mt-7">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-[#B76E79] font-mono">
                      {new Date(p.date).toLocaleDateString(
                        lang === "tr" ? "tr-TR" : "en-US",
                        { day: "numeric", month: "long", year: "numeric" },
                      )}
                    </p>
                    <h2
                      className={`font-editorial text-white mt-4 group-hover:text-[#E0BFB8] transition-colors duration-500 leading-[1.05] tracking-tight ${
                        isHero
                          ? "text-4xl md:text-6xl lg:text-7xl"
                          : "text-2xl md:text-3xl lg:text-4xl"
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p className="text-white/55 mt-5 leading-relaxed line-clamp-2 max-w-2xl">
                      {item.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#E0BFB8] group-hover:text-[#D4AF37] transition-colors duration-500">
                      {t.common.readMore}
                      <ArrowUpRight
                        size={14}
                        className="group-hover:rotate-45 transition-transform duration-500"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
