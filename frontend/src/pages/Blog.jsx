import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { posts } from "@/data/blog";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const { t, lang } = useLang();

  return (
    <div className="pt-32 pb-24 bg-[#0A0A0B] min-h-screen" data-testid="blog-page">
      <SEO customTitle={t.blog.title} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
            {lang === "tr" ? "Editorial" : "Editorial"}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
            {t.blog.title}
          </h1>
          <p className="text-white/60 mt-6">{t.blog.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((p, i) => {
            const item = p[lang] || p.tr;
            return (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                data-testid={`blog-card-${p.slug}`}
                className={`group block ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`overflow-hidden bg-black ${
                    i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={p.cover}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#B76E79]">
                    {new Date(p.date).toLocaleDateString(
                      lang === "tr" ? "tr-TR" : "en-US",
                      { day: "numeric", month: "long", year: "numeric" },
                    )}
                  </p>
                  <h2
                    className={`font-serif text-white mt-3 group-hover:text-[#E0BFB8] transition-colors leading-tight ${
                      i === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p className="text-white/55 mt-4 leading-relaxed line-clamp-2 max-w-2xl">
                    {item.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#E0BFB8]">
                    {t.common.readMore} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
