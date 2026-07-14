import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { SITE } from "@/data/site";

/**
 * SEO component - updates document title, meta tags, canonical URL,
 * hreflang, Open Graph, and injects JSON-LD (LocalBusiness by default).
 * Keeps "Girne Kıbrıs Konsiyerj" / "Kyrenia Cyprus Concierge" keywords prominent.
 */
export const SEO = ({
  titleKey,
  descriptionKey,
  customTitle,
  customDesc,
  jsonLd,
}) => {
  const { lang, t } = useLang();
  const { pathname } = useLocation();

  useEffect(() => {
    const brand = t.brand;
    const seoKeyword =
      lang === "tr" ? "Girne VIP Konsiyerj" : "Kyrenia VIP Concierge";

    const title = customTitle
      ? `${customTitle} | ${brand} - ${seoKeyword}`
      : `${brand} - ${seoKeyword} | ${titleKey || t.tagline}`;

    const description =
      customDesc ||
      descriptionKey ||
      (lang === "tr"
        ? "Kıbrıs Night Club — Girne'nin lider VIP konsiyerj ve turizm servisi. Otel, restoran, casino ve yat rezervasyonu, çok dilli tur rehberliği, havalimanı transferi ve etkinlik organizasyonu."
        : "Kıbrıs Night Club — Kyrenia's leading VIP concierge and tourism service. Hotel, restaurant, casino and yacht bookings, multilingual tour guidance, airport transfer and event organisation.");

    document.title = title;

    const canonicalUrl = `${SITE.url}${pathname === "/" ? "" : pathname}`;

    const setMeta = (name, content, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (isProperty) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta(
      "keywords",
      lang === "tr"
        ? "Girne VIP konsiyerj, Kıbrıs konsiyerj servisi, Girne turizm rehberi, Kıbrıs Night Club, otel rezervasyon Girne, casino rehberi Kıbrıs, yat kiralama Girne, havalimanı transferi Girne, tur rehberliği Kıbrıs, etkinlik organizasyonu Girne, Cratos konsiyerj, Merit konsiyerj, Acapulco konsiyerj"
        : "Kyrenia VIP concierge, Cyprus concierge service, Kyrenia tourism guide, Kıbrıs Night Club, Kyrenia hotel booking, Cyprus casino guide, Kyrenia yacht charter, Kyrenia airport transfer, Cyprus tour guide, Kyrenia event organisation, Cratos concierge, Merit concierge, Acapulco concierge",
    );

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:site_name", brand, true);
    setMeta("og:locale", lang === "tr" ? "tr_TR" : "en_US", true);
    setMeta(
      "og:locale:alternate",
      lang === "tr" ? "en_US" : "tr_TR",
      true,
    );
    setMeta(
      "og:image",
      "https://images.unsplash.com/photo-1646977858731-ec11d66a1aaa?w=1200&q=80",
      true,
    );
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("robots", "index, follow, max-image-preview:large");

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // hreflang (tr / en / x-default)
    const setHreflang = (hreflang, href) => {
      let el = document.querySelector(
        `link[rel="alternate"][hreflang="${hreflang}"]`,
      );
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };
    setHreflang("tr", canonicalUrl);
    setHreflang("en", canonicalUrl);
    setHreflang("x-default", canonicalUrl);

    // JSON-LD injection (page-specific or default LocalBusiness)
    const scriptId = "knc-jsonld-page";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // Update html lang
    document.documentElement.lang = lang;
  }, [lang, t, titleKey, descriptionKey, customTitle, customDesc, pathname, jsonLd]);

  return null;
};
