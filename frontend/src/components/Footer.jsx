import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { SITE } from "@/data/site";
import { Phone, MessageCircle, MapPin, Instagram, Send } from "lucide-react";

export const Footer = () => {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#050505] border-t border-white/5 pt-20 pb-10"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl tracking-tight text-white">
                Kıbrıs
              </span>
              <span className="font-serif text-2xl tracking-tight bg-gradient-to-r from-[#E0BFB8] to-[#D4AF37] bg-clip-text text-transparent">
                Night Club
              </span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-md">
              {t.footer.tagline}{" "}
              {lang === "tr"
                ? "Girne Kıbrıs konsomatris hizmetinde diskretliğin, zarafetin ve kalitenin adresi."
                : "The address of discretion, elegance and quality in the Kyrenia Cyprus hostess scene."}
            </p>
            <div className="flex items-center gap-3 pt-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
                data-testid="footer-social-instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
                data-testid="footer-social-telegram"
              >
                <Send size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E0BFB8] mb-5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: t.nav.home },
                { to: "/galeri", label: t.nav.gallery },
                { to: "/hizmetler", label: t.nav.services },
                { to: "/fiyatlar", label: t.nav.pricing },
                { to: "/nasil-rezervasyon", label: t.nav.booking },
                { to: "/blog", label: t.nav.blog },
                { to: "/sss", label: t.nav.faq },
                { to: "/iletisim", label: t.nav.contact },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E0BFB8] mb-5">
              {t.footer.contact}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-[#D4AF37] mt-0.5 flex-shrink-0"
                />
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-white/75 hover:text-white"
                  data-testid="footer-phone"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  size={16}
                  className="text-[#25D366] mt-0.5 flex-shrink-0"
                />
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white"
                  data-testid="footer-whatsapp"
                >
                  WhatsApp 7/24
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[#B76E79] mt-0.5 flex-shrink-0"
                />
                <span className="text-white/75">{t.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 space-y-4">
          <p className="text-xs text-white/40 leading-relaxed max-w-3xl">
            {t.footer.disclaimer}
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/40">
            <p>
              © {year} {SITE.name}. {t.footer.rights}
            </p>
            <p className="uppercase tracking-[0.25em]">
              {lang === "tr"
                ? "Girne • Kıbrıs • Konsomatris"
                : "Kyrenia • Cyprus • Hostess"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
