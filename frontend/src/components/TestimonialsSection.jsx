import { useLang } from "@/i18n/LanguageContext";
import { testimonials } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";

export const TestimonialsSection = () => {
  const { t, lang } = useLang();
  return (
    <section
      className="py-24 md:py-32 bg-[#050505] relative"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
            {lang === "tr" ? "Referanslar" : "Testimonials"}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
            {lang === "tr"
              ? "Misafirlerimizden Notlar"
              : "Notes from our guests"}
          </h2>
          <p className="text-white/55 mt-4">
            {lang === "tr"
              ? "İsim gizliliği için baş harflerle paylaşılan gerçek misafir geri bildirimleri."
              : "Genuine guest feedback shared with initials for privacy."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {testimonials.map((r, i) => {
            const text = lang === "tr" ? r.tr : r.en;
            const loc = lang === "tr" ? r.location_tr : r.location_en;
            return (
              <div
                key={r.id}
                data-testid={`testimonial-${i}`}
                className="relative p-8 border border-white/[0.06] bg-gradient-to-b from-[#121214] to-[#0A0A0B] hover:border-[#B76E79]/30 transition-colors duration-500"
              >
                <Quote
                  className="text-[#B76E79] mb-5 opacity-70"
                  size={24}
                />
                <p className="text-white/75 leading-relaxed text-sm md:text-base italic mb-6">
                  “{text}”
                </p>
                <div className="flex items-center gap-2.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star
                      key={k}
                      size={12}
                      className="text-[#D4AF37]"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#E0BFB8] font-serif">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm">{r.initials}</p>
                    <p className="text-white/45 text-[11px] uppercase tracking-[0.22em]">
                      {loc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
