import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { SITE } from "@/data/site";

/**
 * SEO component - updates document title, meta tags, canonical URL,
 * hreflang, Open Graph, and injects JSON-LD (LocalBusiness by default).
 * Keeps "Girne Kıbrıs Konsomatris" / "Kyrenia Cyprus Hostess" keywords prominent.
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
      lang === "tr" ? "Girne Kıbrıs Konsomatris" : "Kyrenia Cyprus Hostess";

    const title = customTitle
      ? `${customTitle} | ${brand} - ${seoKeyword}`
      : `${brand} - ${seoKeyword} | ${titleKey || t.tagline}`;

    const description =
      customDesc ||
      descriptionKey ||
      (lang === "tr"
        ? "Kıbrıs Night Club — Girne Kıbrıs konsomatris dünyasının en seçkin VIP ajansı. 7/24 diskret hizmet, gerçek fotoğraflar, 24 premium model. Otel-çağrı, VIP casino ve yat partileri."
        : "Kıbrıs Night Club — the most exclusive VIP agency of the Kyrenia Cyprus hostess scene. 24/7 discreet service, real photos, 24 premium models. Incall, VIP casino and yacht parties.");

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
        ? "Girne Kıbrıs Konsomatris, Girne konsomatris, Kıbrıs konsomatris, Kıbrıs Night Club, Girne VIP konsomatris, Girne otel konsomatris, KKTC konsomatris, Kıbrıs Rus konsomatris, Kıbrıs Türk konsomatris, Cratos konsomatris, Merit konsomatris, Acapulco konsomatris, Girne casino konsomatris, Girne yat konsomatris"
        : "Kyrenia Cyprus Hostess, Kyrenia hostess, Cyprus hostess, Kıbrıs Night Club, Kyrenia VIP hostess, Kyrenia hotel hostess, TRNC hostess, Russian hostess Cyprus, Turkish hostess Kyrenia, Cratos hostess, Merit hostess, Acapulco hostess, Kyrenia casino hostess, Kyrenia yacht hostess",
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
