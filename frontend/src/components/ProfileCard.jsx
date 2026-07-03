import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Crown, Sparkle, Star } from "lucide-react";

export const ProfileCard = ({ g }) => {
  const { lang, t } = useLang();
  const nationality = lang === "tr" ? g.nationality_tr : g.nationality_en;

  const badge = () => {
    if (g.tags.includes("vip"))
      return {
        label: t.common.vip,
        icon: Crown,
        cls: "bg-[#D4AF37] text-black",
      };
    if (g.tags.includes("new"))
      return {
        label: t.common.new,
        icon: Sparkle,
        cls: "bg-[#B76E79] text-white",
      };
    if (g.tags.includes("featured"))
      return {
        label: t.common.featured,
        icon: Star,
        cls: "bg-white/10 text-white",
      };
    return null;
  };
  const b = badge();

  return (
    <Link
      to={`/galeri/${g.id}`}
      data-testid={`profile-card-${g.id}`}
      className="group relative block overflow-hidden bg-[#0E0E10] border border-white/[0.05] hover:border-[#B76E79]/40 transition-colors duration-500"
    >
      <div className="aspect-[3/4] overflow-hidden bg-black">
        <img
          src={g.cover}
          alt={`${g.name} - ${nationality} ${lang === "tr" ? "Girne Kıbrıs Konsomatris" : "Kyrenia Cyprus Hostess"}`}
          loading="lazy"
          className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/30 to-transparent opacity-90" />
      </div>

      {b && (
        <div
          className={`absolute top-4 left-4 ${b.cls} px-3 py-1 text-[10px] uppercase tracking-[0.2em] flex items-center gap-1.5`}
        >
          <b.icon size={11} />
          {b.label}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight">
          {g.name}
        </h3>
        <div className="flex items-center gap-3 mt-2 text-[11px] text-white/65 uppercase tracking-[0.18em]">
          <span>{g.age}y</span>
          <span className="w-1 h-1 bg-white/30" />
          <span>{g.height}</span>
          <span className="w-1 h-1 bg-white/30" />
          <span>{nationality}</span>
        </div>
        <div className="mt-4 inline-flex items-center text-[11px] uppercase tracking-[0.22em] text-[#E0BFB8] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {t.common.viewProfile}
          <span className="ml-2 inline-block w-6 h-px bg-[#E0BFB8]" />
        </div>
      </div>
    </Link>
  );
};
