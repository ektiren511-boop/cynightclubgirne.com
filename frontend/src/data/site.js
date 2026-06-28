export const SITE = {
  name: "Kıbrıs Night Club",
  domain: "kibrisnightclub.com",
  phone: "+905488552387",
  phoneDisplay: "+90 548 855 23 87",
  whatsapp: "905488552387",
  email: "info@kibrisnightclub.com",
  location: "Girne, Kuzey Kıbrıs",
  social: {
    instagram: "#",
    telegram: "#",
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
