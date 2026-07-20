import { useLang } from "@/i18n/LanguageContext";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

// Numbered editorial manifesto — four chapters.
// Content is derived from t.home.whyItems to preserve i18n.
export const Manifesto = () => {
  const { t, lang } = useLang();
  const items = t.home.whyItems || [];

  return (
    <section
      className="relative py-28 md:py-40 bg-[#050505] border-y border-white/[0.05] overflow-hidden"
      data-testid="manifesto"
    >
      {/* Editorial header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-16 md:mb-24">
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-[#B76E79] mb-6 font-mono">
                {lang === "tr" ? "MANİFESTO" : "MANIFESTO"} · 004 CHAPTERS
              </p>
              <h2 className="font-editorial text-5xl md:text-7xl lg:text-[7rem] text-white leading-[0.9] tracking-tight max-w-4xl">
                {lang === "tr" ? (
                  <>
                    <em className="italic text-[#E0BFB8]">Diskretlik</em> bir
                    hizmet değil,<br />
                    bir <em className="italic text-[#D4AF37]">disiplindir.</em>
                  </>
                ) : (
                  <>
                    <em className="italic text-[#E0BFB8]">Discretion</em> is
                    not a service —<br />
                    it is a{" "}
                    <em className="italic text-[#D4AF37]">discipline.</em>
                  </>
                )}
              </h2>
            </div>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              {lang === "tr"
                ? "Girne'de VIP misafirlerimize sunduğumuz her deneyimin arkasında dört sabit ilke vardır. Detaya değil, dokuya odaklanırız."
                : "Every experience we deliver to VIP guests in Kyrenia is anchored to four unchanging principles. We do not obsess over detail — we obsess over texture."}
            </p>
          </div>
        </Reveal>

        {/* Chapters */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 md:gap-y-28" stagger={0.12}>
          {items.map((item, i) => (
            <RevealItem key={i}>
              <article
                className="group relative"
                data-testid={`manifesto-chapter-${i}`}
              >
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="chapter-num text-[5rem] md:text-[7rem] lg:text-[9rem] text-[#D4AF37]/25 group-hover:text-[#D4AF37]/70 transition-colors duration-700">
                    0{i + 1}
                  </span>
                  <div className="pt-6 md:pt-10 flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-px bg-[#B76E79]" />
                      <span className="text-[10px] uppercase tracking-[0.32em] text-[#B76E79] font-mono">
                        CH · {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-editorial text-3xl md:text-4xl lg:text-5xl text-white leading-[1.05] mb-5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/55 leading-relaxed max-w-md text-[15px] md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
