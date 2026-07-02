// SEO landing pages: hotel-based + nationality-based
// Each landing filters gallery via nationality or hotel keyword
import { girls } from "./girls";

export const landings = [
  // NATIONALITY LANDINGS
  {
    slug: "rus-eskort",
    type: "nationality",
    matchTags: ["Rus", "Russian"],
    hero: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=1920&q=80",
    tr: {
      breadcrumb: "Rus Eskort",
      h1: "Girne Rus Eskort",
      subtitle: "Moskova, St. Petersburg ve Soçi'den seçilmiş VIP modeller",
      intro:
        "Girne'de Rus eskort tercih edenler için özel portföyümüz. Uzun boylu, sofistike ve genellikle çok dilli Rus modellerimiz Cratos ve Merit gibi lüks casino ortamlarında en çok tercih edilenlerdir.",
      seoParagraphs: [
        "Girne Kıbrıs eskort dünyasında Rus modellerin özel bir yeri vardır. Klasik Slav güzelliği, zarif duruş ve iş dünyasına aşinalık bu tercihi belirleyen ana faktörlerdir. Portföyümüzde Moskova, St. Petersburg, Soçi, Kazan ve Yekaterinburg'dan gelen modeller yer alıyor.",
        "Rus modellerimiz genellikle 25-29 yaş aralığında, 172-178 cm boyunda ve profesyonel model geçmişine sahiptir. Rusça, İngilizce ve çoğunlukla ikinci bir Avrupa dili konuşurlar. VIP kazino gecelerinde, iş yemeklerinde ve yat partilerinde en çok talep edilen segmenttir.",
        "Elena, Natasha, Valeria, Irina, Olga ve Nika — her biri kendi hikayesi ve stiliyle. WhatsApp üzerinden rezervasyon yapabilir, tercih ettiğiniz modeli önceden seçebilirsiniz. Girne Kıbrıs Rus eskort deneyimi, Cratos Casino ve Merit Crystal Cove gibi lüks lokasyonlarda üst düzey bir tercihtir.",
      ],
    },
    en: {
      breadcrumb: "Russian Escort",
      h1: "Russian Escort Kyrenia Cyprus",
      subtitle: "Hand-picked VIP models from Moscow, St. Petersburg and Sochi",
      intro:
        "Our dedicated portfolio for those preferring a Russian escort in Kyrenia. Tall, sophisticated and often multilingual, our Russian models are the top choice at luxury casinos like Cratos and Merit.",
      seoParagraphs: [
        "Russian models hold a special place in the Kyrenia Cyprus escort scene. Classic Slavic beauty, elegant posture and familiarity with the business world drive this preference. Our roster includes models from Moscow, St. Petersburg, Sochi, Kazan and Yekaterinburg.",
        "Our Russian models are typically aged 25–29, stand 172–178 cm tall and have a professional modelling background. They speak Russian, English and often a second European language. The most requested segment for VIP casino nights, business dinners and yacht parties.",
        "Elena, Natasha, Valeria, Irina, Olga and Nika — each with her own story and style. Reserve on WhatsApp and pick your preferred companion in advance. A Russian escort experience in Kyrenia Cyprus is the elite pick at luxury venues like Cratos Casino and Merit Crystal Cove.",
      ],
    },
  },
  {
    slug: "turk-eskort",
    type: "nationality",
    matchTags: ["Türk", "Turkish", "Türk-Arap", "Turkish-Arab"],
    hero: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1920&q=80",
    tr: {
      breadcrumb: "Türk Eskort",
      h1: "Girne Türk Eskort",
      subtitle: "İstanbul, İzmir, Ankara ve Antalya'dan yerel güzellikler",
      intro:
        "Türkçe konuşan bir partner tercih edenler için özenle seçilmiş Türk eskort portföyümüz. Kültürel yakınlık, dil rahatlığı ve yerel zerafet.",
      seoParagraphs: [
        "Girne'ye gelen Türk misafirlerimiz için Türk eskort seçeneği en çok tercih edilen segmenttir. Ana dilde iletişim, kültürel kod uyumu ve klasik Türk zerafeti bu tercihin arkasındaki temel faktörlerdir.",
        "Portföyümüzde İstanbul'un moda çevresinden, İzmir'in güneşinden, Ankara'nın klasik zerafetinden ve Antalya'nın turizm dünyasından gelen modeller var. Ayla, Lara, Defne, Yasmin, Selin, Melis, Zeynep ve Elif — her biri kendi hikayesiyle.",
        "Türk modellerimiz özellikle iş yemekleri, gece kulübü partnerliği ve otel eskort taleplerinde ön plana çıkar. Girne Kıbrıs eskort dünyasında %30-40 gibi büyük bir talebi bu segment karşılıyor. Rezervasyon için WhatsApp üzerinden bize ulaşın.",
      ],
    },
    en: {
      breadcrumb: "Turkish Escort",
      h1: "Turkish Escort Kyrenia Cyprus",
      subtitle: "Local beauties from Istanbul, Izmir, Ankara and Antalya",
      intro:
        "A curated Turkish escort portfolio for those preferring a Turkish-speaking partner. Cultural closeness, language ease and local elegance.",
      seoParagraphs: [
        "For Turkish guests visiting Kyrenia, the Turkish escort option is the most requested segment. Native-language communication, cultural-code compatibility and classic Turkish elegance drive this preference.",
        "Our roster spans Istanbul's fashion circles, Izmir's sunshine, Ankara's classic grace and Antalya's tourism world. Ayla, Lara, Defne, Yasmin, Selin, Melis, Zeynep and Elif — each with her own story.",
        "Our Turkish models are especially popular for business dinners, nightclub companionship and hotel escort requests. In the Kyrenia Cyprus escort scene, this segment represents 30–40% of overall demand. Reserve via WhatsApp.",
      ],
    },
  },
  {
    slug: "ukraynali-eskort",
    type: "nationality",
    matchTags: ["Ukraynalı", "Ukrainian"],
    hero: "https://images.unsplash.com/photo-1509305717900-84f40e786d82?w=1920&q=80",
    tr: {
      breadcrumb: "Ukraynalı Eskort",
      h1: "Girne Ukraynalı Eskort",
      subtitle: "Kiev, Odessa ve Lviv'den zarif Slav modelleri",
      intro:
        "Ukraynalı eskort deneyimi arayanlar için özel portföy. Genç, taze ve enerjik Slav güzellikleri Girne'nin favorileri arasında.",
      seoParagraphs: [
        "Ukraynalı modeller Girne Kıbrıs eskort sahnesinde son yılların yükselen segmenti. Doğal güzelliği, doğal enerjisi ve genç yaş ortalamasıyla özellikle beach club ve gece kulübü misafirlerinin favorisi.",
        "Portföyümüzde Kiev, Odessa, Lviv ve Kharkiv'den gelen modeller bulunur. Ukraynaca, Rusça, İngilizce ve genellikle bir Avrupa dili daha bilirler. Kateryna ve Natasha en talep edilenler arasında.",
        "Ukraynalı eskort paketimiz için ortalama fiyatlandırma €250-€300 arasındadır. VIP ve tüm gece paketleri de mevcuttur. WhatsApp üzerinden hemen rezervasyon yapabilirsiniz.",
      ],
    },
    en: {
      breadcrumb: "Ukrainian Escort",
      h1: "Ukrainian Escort Kyrenia Cyprus",
      subtitle: "Elegant Slavic models from Kyiv, Odessa and Lviv",
      intro:
        "A dedicated portfolio for the Ukrainian escort experience. Young, fresh and energetic Slavic beauties among Kyrenia's favourites.",
      seoParagraphs: [
        "Ukrainian models are a rising segment in the Kyrenia Cyprus escort scene. Natural beauty, natural energy and a younger average age make them favourites among beach-club and nightclub guests in particular.",
        "Our roster includes models from Kyiv, Odessa, Lviv and Kharkiv. They speak Ukrainian, Russian, English and often another European language. Kateryna and Natasha are among the most requested.",
        "Average pricing for our Ukrainian escort package is €250–€300. VIP and all-night packages are also available. Reserve immediately on WhatsApp.",
      ],
    },
  },
  // HOTEL LANDINGS
  {
    slug: "cratos-eskort",
    type: "hotel",
    hero: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=1920&q=80",
    tr: {
      breadcrumb: "Cratos Eskort",
      h1: "Cratos Casino Girne Eskort",
      subtitle: "Kuzey Kıbrıs'ın en görkemli casinosunda VIP partnerlik",
      intro:
        "Cratos Premium Hotel & Casino'da otel-çağrı hizmeti. Blackjack ve rulet masalarında yanınızda zarafetle duran, gecenizi taçlandıran partner.",
      seoParagraphs: [
        "Cratos Premium, Girne'nin en yüksek tavanlı casinosu — dünya çapında poker turnuvalarına ev sahipliği yapıyor. Bu ortamda tek başına oynamak yerine, yanınızda bir Girne Kıbrıs eskort partneri bulundurmak hem sosyal hem stratejik bir tercih.",
        "Cratos'ta otel-çağrı süreci son derece basit: WhatsApp üzerinden oda numaranızı paylaşırsınız, modelimiz doğrudan asansöre yönelir. Otel personeline hiçbir soru sorulmaz, hiçbir kayıt yapılmaz.",
        "Cratos eskort paketimiz genellikle 3 saatlik VIP paketimiz veya tüm gece paketimizle sunulur. Şampanya servisi, akşam yemeği koordinasyonu ve casino masalarında modelin uygun eşliği dahildir.",
        "Sıklıkla tercih edilen modeller: Elena, Valeria, Isabella, Diana, Victoria. Rezervasyon için WhatsApp üzerinden ulaşın; genellikle 30 dakikada modeliniz kapınızda olur.",
      ],
    },
    en: {
      breadcrumb: "Cratos Escort",
      h1: "Cratos Casino Kyrenia Escort",
      subtitle:
        "VIP companionship at Northern Cyprus's most magnificent casino",
      intro:
        "Incall service at Cratos Premium Hotel & Casino. A partner who stands with grace beside you at the blackjack and roulette tables — crowning your night.",
      seoParagraphs: [
        "Cratos Premium is Kyrenia's highest-ceiling casino — hosting world-class poker tournaments. Rather than playing alone, having a Kyrenia Cyprus escort partner beside you here is both a social and a strategic choice.",
        "The incall process at Cratos is straightforward: share your room number on WhatsApp, our model heads straight to the elevator. No question asked at the front desk, no registration made.",
        "Our Cratos escort package is typically offered with the 3-hour VIP or all-night option. Champagne service, dinner coordination and the model's appropriate companionship at the casino tables are included.",
        "Frequently requested models: Elena, Valeria, Isabella, Diana, Victoria. Reserve on WhatsApp — your companion is usually at your door within 30 minutes.",
      ],
    },
  },
  {
    slug: "merit-eskort",
    type: "hotel",
    hero: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
    tr: {
      breadcrumb: "Merit Eskort",
      h1: "Merit Crystal Cove Girne Eskort",
      subtitle: "Sahil kenarında lüks otel deneyimi ve elit partnerlik",
      intro:
        "Merit Crystal Cove Hotel & Casino'da premium otel-çağrı. Casino, spa ve deniz manzaralı odalarda diskret servis.",
      seoParagraphs: [
        "Merit Crystal Cove, Girne'nin en romantik konumdaki lüks otellerinden biri. Deniz manzaralı süitleri, spa merkezi ve casinosuyla klas bir konaklama deneyimi sunar.",
        "Merit'te eskort hizmetimiz özellikle çift kişilik lüks süitlerdeki misafirlerimiz için ideal. Modelimiz otel resepsiyonundan geçmez, direkt oda numaranıza ulaşır. Merit'in geniş odaları, uzun süreli görüşmeler için de mükemmel bir ortam yaratır.",
        "Merit eskort paketimizi 3 saatlik VIP paket veya tüm gece paketi olarak seçebilirsiniz. Tüm gece paketinde şampanya, akşam yemeği ve isteğe bağlı casino gecesi dahildir.",
        "Girne Kıbrıs eskort dünyasında Merit, en romantik lokasyon olarak öne çıkar. Bal ayı ve özel kutlama misafirleri için özel ikramlar sunuyoruz.",
      ],
    },
    en: {
      breadcrumb: "Merit Escort",
      h1: "Merit Crystal Cove Kyrenia Escort",
      subtitle:
        "Seafront luxury hotel experience with elite companionship",
      intro:
        "Premium incall at Merit Crystal Cove Hotel & Casino. Discreet service across the casino, spa and sea-view suites.",
      seoParagraphs: [
        "Merit Crystal Cove is one of Kyrenia's most romantically located luxury hotels. Sea-view suites, a spa centre and its own casino make for a truly upscale stay.",
        "Our Merit escort service is especially suited for guests in the deluxe double suites. Our model never crosses reception — she goes directly to your room number. Merit's spacious rooms also make a perfect setting for extended bookings.",
        "Choose our Merit escort package as the 3-hour VIP or all-night option. The all-night package includes champagne, dinner and an optional casino night.",
        "Merit stands out as the most romantic location in the Kyrenia Cyprus escort scene. We offer special touches for honeymoon and celebration guests.",
      ],
    },
  },
];

// Helper — filter girls for a landing
export const landingGirls = (landing) => {
  if (landing.type === "nationality") {
    return girls.filter(
      (g) =>
        landing.matchTags.includes(g.nationality_tr) ||
        landing.matchTags.includes(g.nationality_en),
    );
  }
  // hotel landings show all girls (all can go to any hotel)
  return girls.slice(0, 8);
};
