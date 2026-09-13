export const SITE = {
  name: "Kıbrıs Night Club",
  domain: "cynightclubgirne.com",
  url: "https://cynightclubgirne.com",
  phone: "+905338494898",
  phoneDisplay: "+90 533 849 48 98",
  whatsapp: "905338494898",
  email: "info@cynightclubgirne.com",
  location: "Girne, Kuzey Kıbrıs",
  latitude: 35.3417,
  longitude: 33.3197,
  social: {
    instagram: "#",
    telegram: "#",
    twitter: "#",
  },
};

export const waLink = (lang = "tr", model = "") => {
  const base = `https://wa.me/${SITE.whatsapp}`;
  const text =
    lang === "tr"
      ? model
        ? `Merhaba, ${model} ile rezervasyon yapmak istiyorum.`
        : "Merhaba, rezervasyon hakkında bilgi almak istiyorum."
      : model
        ? `Hello, I'd like to book ${model}.`
        : "Hello, I'd like to know more about reservations.";
  return `${base}?text=${encodeURIComponent(text)}`;
};
