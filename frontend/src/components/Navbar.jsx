import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Globe, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { SITE } from "@/data/site";

export const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home, key: "home" },
    { to: "/galeri", label: t.nav.gallery, key: "gallery" },
    { to: "/hizmetler", label: t.nav.services, key: "services" },
    { to: "/fiyatlar", label: t.nav.pricing, key: "pricing" },
    { to: "/nasil-rezervasyon", label: t.nav.booking, key: "booking" },
    { to: "/blog", label: t.nav.blog, key: "blog" },
    { to: "/sss", label: t.nav.faq, key: "faq" },
    { to: "/iletisim", label: t.nav.contact, key: "contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-2xl bg-[#0A0A0B]/75 border-b border-white/[0.06]"
      data-testid="site-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            data-testid="brand-link"
            className="flex items-center gap-2 group"
          >
            <span className="font-serif text-xl md:text-2xl tracking-tight text-white">
              Kıbrıs
            </span>
            <span className="font-serif text-xl md:text-2xl tracking-tight bg-gradient-to-r from-[#E0BFB8] to-[#D4AF37] bg-clip-text text-transparent">
              Night Club
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.key}
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-link-${l.key}`}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-[13px] uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#E0BFB8]"
                      : "text-white/70 hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              data-testid="header-call-btn"
              aria-label="Call"
              className="hidden md:inline-flex items-center gap-2 border border-[#B76E79]/50 px-3 py-2 text-[12px] uppercase tracking-[0.2em] text-[#E0BFB8] hover:bg-[#B76E79]/10 transition-all"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">{SITE.phoneDisplay}</span>
            </a>

            <button
              onClick={toggleLang}
              data-testid="lang-switch-btn"
              aria-label="Switch language"
              className="flex items-center gap-1.5 border border-white/15 px-3 py-2 text-[12px] uppercase tracking-[0.2em] text-white/85 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all"
            >
              <Globe size={14} />
              {lang === "tr" ? "EN" : "TR"}
            </button>

            <button
              onClick={() => setOpen(!open)}
              data-testid="mobile-menu-btn"
              aria-label="Menu"
              className="lg:hidden text-white p-1.5"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden bg-[#0A0A0B]/98 backdrop-blur-3xl border-t border-white/[0.05]"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col px-6 py-6 gap-1">
            {links.map((l) => (
              <NavLink
                key={l.key}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-link-${l.key}`}
                className={({ isActive }) =>
                  `py-3 px-2 text-sm uppercase tracking-[0.22em] border-b border-white/5 ${
                    isActive ? "text-[#E0BFB8]" : "text-white/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white py-3 uppercase tracking-[0.22em] text-xs"
              data-testid="mobile-call-btn"
            >
              <Phone size={14} /> {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
