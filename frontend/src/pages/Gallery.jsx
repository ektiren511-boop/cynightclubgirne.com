import { useMemo, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { girls } from "@/data/girls";
import { ProfileCard } from "@/components/ProfileCard";
import { SEO } from "@/components/SEO";

export default function Gallery() {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return girls;
    return girls.filter((g) => g.tags.includes(filter));
  }, [filter]);

  const filters = [
    { key: "all", label: t.gallery.filterAll },
    { key: "new", label: t.gallery.filterNew },
    { key: "vip", label: t.gallery.filterVip },
    { key: "featured", label: t.gallery.filterFeatured },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#0A0A0B] min-h-screen" data-testid="gallery-page">
      <SEO customTitle={t.gallery.title} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
            {t.gallery.subtitle}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
            {t.gallery.title}
          </h1>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/5 pb-6">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              data-testid={`gallery-filter-${f.key}`}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] transition-all ${
                filter === f.key
                  ? "bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white"
                  : "border border-white/15 text-white/70 hover:border-[#B76E79]/50 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-white/50 py-20 text-center">{t.gallery.empty}</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
            {filtered.map((g) => (
              <ProfileCard g={g} key={g.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
