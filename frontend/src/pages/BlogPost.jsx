import { Link, useParams } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { posts } from "@/data/blog";
import { SEO } from "@/components/SEO";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-24 bg-[#0A0A0B] min-h-screen text-center text-white/70" data-testid="blog-post-404">
        <Link to="/blog" className="text-[#E0BFB8] uppercase text-xs tracking-[0.22em]">
          {t.blog.back}
        </Link>
      </div>
    );
  }

  const item = post[lang] || post.tr;
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="pt-32 pb-24 bg-[#0A0A0B] min-h-screen" data-testid="blog-post-page">
      <SEO customTitle={item.title} customDesc={item.excerpt} />
      <div className="max-w-3xl mx-auto px-6 lg:px-0">
        <Link
          to="/blog"
          data-testid="blog-back-link"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/60 hover:text-[#E0BFB8] transition-colors mb-10"
        >
          <ArrowLeft size={14} /> {t.blog.back}
        </Link>

        <p className="text-xs uppercase tracking-[0.3em] text-[#B76E79] mb-6">
          {new Date(post.date).toLocaleDateString(
            lang === "tr" ? "tr-TR" : "en-US",
            { day: "numeric", month: "long", year: "numeric" },
          )}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
          {item.title}
        </h1>

        <div className="my-12 aspect-[16/9] overflow-hidden bg-black">
          <img
            src={post.cover}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose-content space-y-6 text-white/75 text-base md:text-lg leading-[1.85]">
          {item.content.map((para, i) => (
            <p
              key={i}
              className={`${i === 0 ? "first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:text-[#D4AF37]" : ""}`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Related */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24 pt-16 border-t border-white/[0.07]">
        <h3 className="font-serif text-3xl text-white mb-8">
          {t.blog.relatedTitle}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {related.map((p) => {
            const r = p[lang] || p.tr;
            return (
              <Link
                to={`/blog/${p.slug}`}
                key={p.slug}
                data-testid={`related-${p.slug}`}
                className="group flex gap-5 items-center"
              >
                <div className="w-32 h-24 flex-shrink-0 overflow-hidden bg-black">
                  <img
                    src={p.cover}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                  />
                </div>
                <h4 className="font-serif text-lg md:text-xl text-white group-hover:text-[#E0BFB8] transition-colors">
                  {r.title}
                </h4>
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
}
