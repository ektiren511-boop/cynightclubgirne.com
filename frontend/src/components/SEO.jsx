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
        ? "Kıbrıs Night Club — Girne'nin lider VIP konsiyerj, gece hayatı ve eğlence rehberi. Night club rezervasyonu, cabaret & sahne şovu, rezidans & konsept ev, 5 yıldızlı otel, casino, yat kiralama ve havalimanı transferi. 7/24 çok dilli hizmet."
        : "Kıbrıs Night Club — Kyrenia's leading VIP concierge, nightlife and entertainment guide. Night club bookings, cabaret & stage shows, residence rentals, 5-star hotels, casino, yacht charter and airport transfer. 24/7 multilingual service.");

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
        ? "Kıbrıs Night Club, Girne night club, Girne gece hayatı, Kıbrıs gece hayatı, kıbrıs eğlence rehberi, girne eğlence, night club rezervasyon Kıbrıs, direk dansı Kıbrıs, cabaret Kıbrıs, sahne şovu Girne, aerial silk gösterisi, VIP masa Girne, Girne rezidans, Girne konsept ev, Kıbrıs kiralık rezidans, Girne otel rezervasyon, Kıbrıs 5 yıldızlı otel, casino rehberi Kıbrıs, Cratos casino, Merit casino, Acapulco resort, yat kiralama Girne, Karpaz turu, havalimanı transferi Ercan Larnaka, çok dilli tur rehberi Kıbrıs, VIP konsiyerj Girne"
        : "Kıbrıs Night Club, Kyrenia night club, Kyrenia nightlife, Cyprus nightlife, Cyprus entertainment guide, Kyrenia entertainment, nightclub booking Cyprus, pole dance show Kyrenia, cabaret Cyprus, stage show Kyrenia, aerial silk performance, VIP table Kyrenia, Kyrenia residence, Kyrenia concept house, Cyprus short-term rental, Kyrenia hotel booking, Cyprus 5-star hotel, casino guide Cyprus, Cratos casino, Merit casino, Acapulco resort, yacht charter Kyrenia, Karpaz tour, Ercan Larnaca airport transfer, multilingual tour guide Cyprus, VIP concierge Kyrenia",
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

    // BreadcrumbList JSON-LD — auto-generated from pathname
    const breadcrumbScriptId = "knc-jsonld-breadcrumb";
    const existingBc = document.getElementById(breadcrumbScriptId);
    if (existingBc) existingBc.remove();
    if (pathname !== "/") {
      const segments = pathname.split("/").filter(Boolean);
      const homeName = lang === "tr" ? "Anasayfa" : "Home";
      const items = [
        {
          "@type": "ListItem",
          position: 1,
          name: homeName,
          item: SITE.url,
        },
      ];
      segments.forEach((seg, idx) => {
        items.push({
          "@type": "ListItem",
          position: idx + 2,
          name: decodeURIComponent(seg)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()),
          item: `${SITE.url}/${segments.slice(0, idx + 1).join("/")}`,
        });
      });
      const bcScript = document.createElement("script");
      bcScript.type = "application/ld+json";
      bcScript.id = breadcrumbScriptId;
      bcScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items,
      });
      document.head.appendChild(bcScript);
    }

    // Update html lang
    document.documentElement.lang = lang;
  }, [lang, t, titleKey, descriptionKey, customTitle, customDesc, pathname, jsonLd]);

  return null;
};
