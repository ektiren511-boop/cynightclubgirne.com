import { Link, useParams } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { girls } from "@/data/girls";
import { SEO } from "@/components/SEO";
import { SITE, waLink } from "@/data/site";
import { ArrowLeft, MessageCircle, Phone, Crown } from "lucide-react";

export default function ProfileDetail() {
  const { id } = useParams();
  const { t, lang } = useLang();
  const g = girls.find((x) => x.id === id);

  if (!g) {
    return (
      <div
        className="pt-40 pb-24 bg-[#0A0A0B] min-h-screen text-center text-white/70"
        data-testid="profile-not-found"
      >
        <p className="mb-6">404</p>
        <Link
          to="/galeri"
          className="text-[#E0BFB8] uppercase text-xs tracking-[0.22em] border-b border-[#E0BFB8] pb-1"
        >
          {t.common.back}
        </Link>
      </div>
    );
  }

  const nationality = lang === "tr" ? g.nationality_tr : g.nationality_en;
  const languages = lang === "tr" ? g.languages_tr : g.languages_en;
  const bio = lang === "tr" ? g.bio_tr : g.bio_en;

  const seoTitle = `${g.name} - ${nationality} ${lang === "tr" ? "Girne Kıbrıs Konsomatris" : "Kyrenia Cyprus Hostess"}`;

  return (
    <div className="pt-32 pb-24 bg-[#0A0A0B] min-h-screen" data-testid="profile-detail-page">
      <SEO customTitle={seoTitle} customDesc={bio} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Link
          to="/galeri"
          data-testid="back-to-gallery"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/60 hover:text-[#E0BFB8] transition-colors mb-10"
        >
          <ArrowLeft size={14} /> {t.common.back}
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery side */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-black">
              <img
                src={g.gallery[0]}
                alt={`${g.name} - ${seoTitle}`}
                className="w-full h-full object-cover"
              />
            </div>
            {g.gallery.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {g.gallery.slice(1).map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden bg-black">
                    <img
                      src={src}
                      alt={`${g.name} ${i + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info side */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            {g.tags.includes("vip") && (
              <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-3 py-1 text-[10px] uppercase tracking-[0.22em] mb-5">
                <Crown size={12} /> {t.common.vip}
              </div>
            )}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
              {g.name}
            </h1>
            <p className="text-[#E0BFB8] mt-3 text-xs uppercase tracking-[0.3em]">
              {nationality} • {lang === "tr" ? "Girne Kıbrıs Konsomatris" : "Kyrenia Cyprus Hostess"}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 py-8 border-y border-white/5">
              <Stat label={t.common.age} value={`${g.age}`} />
              <Stat label={t.common.height} value={g.height} />
              <Stat label={t.common.weight} value={g.weight} />
              <Stat label={t.common.bust} value={g.bust} />
              <Stat
                label={t.common.languages}
                value={languages}
                full
              />
            </div>

            <p className="text-white/65 leading-relaxed mt-8">{bio}</p>

            <div className="mt-10 p-6 border border-[#B76E79]/25 bg-gradient-to-b from-[#121214] to-[#0A0A0B]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#E0BFB8]">
                {lang === "tr" ? "Rezervasyon" : "Reservation"}
              </p>
              <p className="text-white/70 text-sm mt-3 leading-relaxed">
                {lang === "tr"
                  ? "Fiyat ve müsaitlik bilgileri için WhatsApp üzerinden 30 saniyede iletişim kurun. Tüm rezervasyonlar %100 diskretlikle ele alınır."
                  : "For pricing and availability, message us on WhatsApp in 30 seconds. Every reservation is handled with 100% discretion."}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={waLink(lang, g.name)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="profile-wa-btn"
                className="w-full bg-[#25D366] text-white py-4 uppercase tracking-[0.22em] text-xs font-medium hover:brightness-110 inline-flex items-center justify-center gap-3 transition-all"
              >
                <MessageCircle size={16} /> {t.common.bookNow}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                data-testid="profile-call-btn"
                className="w-full border border-[#B76E79]/60 text-[#E0BFB8] py-4 uppercase tracking-[0.22em] text-xs font-medium hover:bg-[#B76E79]/10 inline-flex items-center justify-center gap-3 transition-all"
              >
                <Phone size={14} /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Stat = ({ label, value, full }) => (
  <div className={full ? "col-span-2" : ""}>
    <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
      {label}
    </p>
    <p className="text-white mt-1.5 text-sm">{value}</p>
  </div>
);
