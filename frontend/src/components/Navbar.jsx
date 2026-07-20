import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { SITE } from "@/data/site";

export const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    if (y > 200 && y > prev) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

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
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-[#0A0A0B]/85 border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            data-testid="brand-link"
            className="flex items-baseline gap-2 group"
          >
            <span className="font-editorial text-2xl md:text-3xl tracking-tight text-white leading-none">
              Kıbrıs
            </span>
            <span className="font-editorial italic text-2xl md:text-3xl tracking-tight leading-none bg-gradient-to-r from-[#E0BFB8] to-[#D4AF37] bg-clip-text text-transparent">
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
                  `relative px-3.5 py-2 text-[11px] uppercase tracking-[0.24em] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#E0BFB8]"
                      : "text-white/65 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              data-testid="header-call-btn"
              aria-label="Call"
              className="hidden md:inline-flex items-center gap-2 border border-[#B76E79]/50 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-[#E0BFB8] hover:bg-[#B76E79]/10 hover:border-[#D4AF37]/60 transition-all duration-500"
            >
              <Phone size={13} />
              <span className="hidden xl:inline">{SITE.phoneDisplay}</span>
            </a>

            <button
              onClick={toggleLang}
              data-testid="lang-switch-btn"
              aria-label="Switch language"
              className="flex items-center gap-1.5 border border-white/15 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-white/85 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all duration-500"
            >
              <Globe size={13} />
              {lang === "tr" ? "EN" : "TR"}
            </button>

            <button
              onClick={() => setOpen(!open)}
              data-testid="mobile-menu-btn"
              aria-label="Menu"
              className="lg:hidden text-white p-1.5"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#B76E79] via-[#D4AF37] to-[#E0BFB8] origin-left"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="lg:hidden bg-[#0A0A0B]/98 backdrop-blur-3xl border-t border-white/[0.05] overflow-hidden"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-link-${l.key}`}
                    className={({ isActive }) =>
                      `block py-3 px-2 text-sm uppercase tracking-[0.28em] border-b border-white/5 ${
                        isActive ? "text-[#E0BFB8]" : "text-white/80"
                      }`
                    }
                  >
                    <span className="font-mono text-[10px] text-[#D4AF37] mr-3">
                      0{i + 1}
                    </span>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href={`tel:${SITE.phone}`}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white py-3 uppercase tracking-[0.28em] text-xs"
                data-testid="mobile-call-btn"
              >
                <Phone size={14} /> {SITE.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
