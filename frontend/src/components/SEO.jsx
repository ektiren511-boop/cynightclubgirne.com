import { useEffect } from "react";
import { useLang } from "@/i18n/LanguageContext";

/**
 * Lightweight SEO component — updates document title and meta tags
 * without needing react-helmet. Keeps "Girne Kıbrıs Eskort" keywords prominent.
 */
export const SEO = ({ titleKey, descriptionKey, customTitle, customDesc }) => {
  const { lang, t } = useLang();

  useEffect(() => {
    const brand = t.brand;
    const seoKeyword =
      lang === "tr" ? "Girne Kıbrıs Eskort" : "Kyrenia Cyprus Escort";

    const title = customTitle
      ? `${customTitle} | ${brand} - ${seoKeyword}`
      : `${brand} - ${seoKeyword} | ${titleKey || t.tagline}`;

    const description =
      customDesc ||
      descriptionKey ||
      (lang === "tr"
        ? "Kıbrıs Night Club — Girne Kıbrıs eskort dünyasının en seçkin VIP ajansı. 7/24 diskret hizmet, gerçek fotoğraflar, premium modeller."
        : "Kıbrıs Night Club — the most exclusive VIP agency of the Kyrenia Cyprus escort scene. 24/7 discreet service, real photos, premium models.");

    document.title = title;

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
        ? "Girne Kıbrıs Eskort, Girne eskort, Kıbrıs eskort, Girne VIP eskort, Girne otel eskort, Kıbrıs Night Club, KKTC eskort"
        : "Kyrenia Cyprus Escort, Kyrenia escort, Cyprus escort, Kyrenia VIP escort, Kyrenia hotel escort, Kıbrıs Night Club, TRNC escort",
    );
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:locale", lang === "tr" ? "tr_TR" : "en_US", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("robots", "index, follow");
  }, [lang, t, titleKey, descriptionKey, customTitle, customDesc]);

  return null;
};
