import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { waLink, SITE } from "@/data/site";
import {
  MessageCircle,
  Phone,
  Clock,
  Hotel,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";

const CONTENT = {
  tr: {
    eyebrow: "Rehber",
    h1: "Nasıl Rezervasyon Yapılır?",
    subtitle:
      "Girne Kıbrıs Konsiyerj hizmetimiz için adım adım rezervasyon süreci",
    intro:
      "Kıbrıs Night Club rezervasyon süreci son derece basit ve tamamen diskret olacak şekilde tasarlanmıştır. Aşağıdaki adımları takip ederek, 30 saniye içinde konsiyerj ev & otel servisi rezervasyonunuzu tamamlayabilirsiniz.",
    steps: [
      {
        n: "01",
        title: "Galeriden model seçin",
        desc: "Galeri sayfasından 24 modelimiz arasından size uygun olanı seçin. Filtreler (VIP, Yeni, Öne Çıkanlar) ve milliyet bazlı landing sayfaları (Rus, Türk, Ukraynalı) tercih yapmanızı kolaylaştırır.",
      },
      {
        n: "02",
        title: "WhatsApp'tan yazın",
        desc: "Sayfanın sağ alt köşesindeki yeşil WhatsApp butonuna tıklayın veya doğrudan +90 548 855 23 87 numarasını arayın. Kısaca hangi modeli seçtiğinizi, otel/lokasyonunuzu ve saatinizi bildirin.",
      },
      {
        n: "03",
        title: "Paketinizi belirleyin",
        desc: "Standart (1 saat), VIP (3 saat) veya Tüm Gece paketlerinden birini tercih edin. Özel paketler (yat, seyahat, birden fazla model) için WhatsApp'ta konuşuyoruz. Fiyat bilgileri özel görüşülür.",
      },
      {
        n: "04",
        title: "Diskret buluşma",
        desc: "Onayınızın ardından modelimiz 20–40 dakika içinde kapınızda olur. Otel resepsiyonundan geçilmez, doğrudan oda numaranıza gelinir. Kimlik veya isim sorulmaz.",
      },
      {
        n: "05",
        title: "Zamanınızın tadını çıkarın",
        desc: "Kararlaştırılan sürede, seçtiğiniz lokasyonda (otel odası, villa, yat) tam diskret ve profesyonel bir konsiyerj deneyimi yaşayın. Görüşme sonrası ödeme nakit olarak yapılır.",
      },
    ],
    what: {
      title: "Ne beklemelisiniz",
      items: [
        "Modelimiz galerideki fotoğrafla %100 aynıdır",
        "Görüşme öncesi tam gizlilik anlaşması",
        "Otel personeline hiçbir açıklama yapılmaz",
        "Modelin görgüsü ve etiketi kültürel koda uygundur",
        "Şampanya, çiçek gibi ekstra ikramlar organize edilebilir",
        "Kısa sürede iptal / erteleme mümkün (kapasite uygunsa)",
      ],
    },
    doNot: {
      title: "Nelerden kaçınmalısınız",
      items: [
        "Kartla / havale ile ödeme talebi (yalnızca nakit)",
        "Modelin fotoğrafını çekmek veya kaydetmek",
        "Otel personelinin önünde iletişim kurmaya çalışmak",
        "Model üzerinde alkol veya madde tüketimi baskısı",
      ],
    },
    payment: {
      title: "Ödeme",
      body: "Ödemeler tamamen nakit yapılır. Euro (€) tercih edilir, USD ($), GBP (£) ve TL de kabul edilir. Ödeme, modelimiz odanıza vardıktan sonra görüşme başlamadan önce yapılır. Bazı VIP paketlerde kripto (BTC, USDT) ile ödeme kabul edilir; detaylar için WhatsApp'tan sorabilirsiniz.",
    },
    hotels: {
      title: "Hizmet verdiğimiz oteller",
      body: "Girne bölgesindeki tüm 5 yıldızlı otellerde otel-çağrı (incall) hizmeti sağlıyoruz:",
      list: [
        "Cratos Premium Hotel & Casino",
        "Merit Crystal Cove Hotel & Casino",
        "Acapulco Resort & Casino",
        "Concorde Luxury Resort",
        "Lord's Palace Hotel",
        "Kaya Artemis Resort",
        "Grand Pasha Hotel & Casino",
        "Elexus Hotel",
      ],
    },
    faqTitle: "Kısa Sorular",
    faqs: [
      {
        q: "Ne kadar önce rezervasyon yapmalıyım?",
        a: "Genellikle 30 dakika ile 1 saat yeterlidir. Popüler modeller için 2-3 saat önceden yazmanız tavsiye edilir.",
      },
      {
        q: "Kimlik istiyor musunuz?",
        a: "Hayır. Hiçbir zaman kimlik veya kişisel bilgi talep etmiyoruz. Sadece otelinizin adı ve oda numaranız yeterli.",
      },
      {
        q: "Girne dışında hizmet var mı?",
        a: "Evet. Lefkoşa, Gazimağusa ve Karpaz bölgesine de hizmet veriyoruz. Ek transfer ücreti uygulanır.",
      },
    ],
    ctaTitle: "Hemen rezervasyon yap",
    ctaText:
      "WhatsApp üzerinden 30 saniyede model seç, buluşma zamanını belirle.",
  },
  en: {
    eyebrow: "Guide",
    h1: "How to Book",
    subtitle:
      "A step-by-step booking flow for our Kyrenia Cyprus Concierge Service",
    intro:
      "The Kıbrıs Night Club booking process is designed to be extremely simple and fully discreet. Follow the steps below and complete your concierge service reservation in 30 seconds.",
    steps: [
      {
        n: "01",
        title: "Pick a model from the gallery",
        desc: "Browse our 24 models on the Gallery page. Filters (VIP, New, Featured) and nationality landings (Russian, Turkish, Ukrainian) make it easy to choose.",
      },
      {
        n: "02",
        title: "Message on WhatsApp",
        desc: "Tap the green WhatsApp button at the bottom-right of any page, or call +90 548 855 23 87 directly. Briefly tell us which model you picked, your hotel/location and time.",
      },
      {
        n: "03",
        title: "Choose your package",
        desc: "Pick Standard (1 hour), VIP (3 hours) or All Night. Custom packages (yacht, travel, multiple companions) are discussed on WhatsApp. Pricing is confirmed privately.",
      },
      {
        n: "04",
        title: "Discreet arrival",
        desc: "After confirmation, our model arrives at your door within 20–40 minutes. She never crosses hotel reception — she goes straight to your room. No ID or name asked.",
      },
      {
        n: "05",
        title: "Enjoy your time",
        desc: "Enjoy a fully discreet, professional concierge experience at your chosen location (hotel room, villa, yacht) for the agreed duration. Payment is made in cash after the session begins.",
      },
    ],
    what: {
      title: "What to expect",
      items: [
        "The model is 100% identical to her gallery photo",
        "Full confidentiality before, during and after the session",
        "No explanation given to hotel staff",
        "Etiquette and manners aligned with cultural code",
        "Extras like champagne and flowers can be arranged",
        "Short-notice cancel/reschedule possible (if capacity allows)",
      ],
    },
    doNot: {
      title: "What to avoid",
      items: [
        "Requesting card / bank transfer (cash only)",
        "Photographing or recording the model",
        "Trying to communicate in front of hotel staff",
        "Pressuring the model to consume alcohol or substances",
      ],
    },
    payment: {
      title: "Payment",
      body: "Payment is fully in cash. Euro (€) is preferred; USD ($), GBP (£) and TRY also accepted. Payment is made once the model arrives in your room, before the session starts. Some VIP packages accept crypto (BTC, USDT); ask on WhatsApp for details.",
    },
    hotels: {
      title: "Hotels we serve",
      body: "We provide incall service at every 5-star hotel in Kyrenia area:",
      list: [
        "Cratos Premium Hotel & Casino",
        "Merit Crystal Cove Hotel & Casino",
        "Acapulco Resort & Casino",
        "Concorde Luxury Resort",
        "Lord's Palace Hotel",
        "Kaya Artemis Resort",
        "Grand Pasha Hotel & Casino",
        "Elexus Hotel",
      ],
    },
    faqTitle: "Quick questions",
    faqs: [
      {
        q: "How far in advance should I book?",
        a: "Usually 30 minutes to 1 hour is enough. For popular models, 2–3 hours in advance is advised.",
      },
      {
        q: "Do you ask for ID?",
        a: "No. We never ask for identification or personal information. Only your hotel and room number are needed.",
      },
      {
        q: "Do you serve outside Kyrenia?",
        a: "Yes. We serve Nicosia, Famagusta and the Karpaz region. An extra transfer fee applies.",
      },
    ],
    ctaTitle: "Book instantly",
    ctaText:
      "Pick a model on WhatsApp in 30 seconds and set your meeting time.",
  },
};

export default function BookingGuide() {
  const { lang } = useLang();
  const c = CONTENT[lang] || CONTENT.tr;

  return (
    <div
      className="pt-32 pb-24 bg-[#0A0A0B] min-h-screen"
      data-testid="booking-guide-page"
    >
      <SEO customTitle={c.h1} customDesc={c.intro} />
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
            {c.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02] tracking-tight">
            {c.h1}
          </h1>
          <p className="text-[#E0BFB8] text-sm md:text-base uppercase tracking-[0.22em] mt-5">
            {c.subtitle}
          </p>
          <p className="text-white/65 mt-8 text-base md:text-lg leading-relaxed">
            {c.intro}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {c.steps.map((s, i) => (
            <div
              key={s.n}
              data-testid={`booking-step-${i}`}
              className="group grid md:grid-cols-12 gap-6 md:gap-10 items-start py-10 md:py-12 border-t border-white/[0.07] hover:border-[#B76E79]/40 transition-colors"
            >
              <div className="md:col-span-2">
                <p className="font-serif text-5xl md:text-6xl text-[#D4AF37]">
                  {s.n}
                </p>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:text-[#E0BFB8] transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/60 mt-3 leading-relaxed max-w-3xl">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What to expect / What to avoid */}
        <div className="grid md:grid-cols-2 gap-6 mt-24">
          <div className="p-8 border border-white/10 bg-[#0E0E10]">
            <ShieldCheck className="text-[#D4AF37] mb-5" size={26} strokeWidth={1.2} />
            <h3 className="font-serif text-2xl text-white mb-5">{c.what.title}</h3>
            <ul className="space-y-3">
              {c.what.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-white/75 text-sm"
                >
                  <Check size={16} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 border border-white/10 bg-[#0E0E10]">
            <div className="w-6 h-6 rounded-full border border-[#B76E79] mb-5 flex items-center justify-center text-[#B76E79]">
              ✕
            </div>
            <h3 className="font-serif text-2xl text-white mb-5">{c.doNot.title}</h3>
            <ul className="space-y-3">
              {c.doNot.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-white/75 text-sm"
                >
                  <span className="text-[#B76E79] flex-shrink-0 mt-0.5">✕</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment */}
        <div className="mt-16 p-10 border border-[#D4AF37]/25 bg-gradient-to-br from-[#121214] to-[#0A0A0B]">
          <div className="flex items-center gap-3 mb-5">
            <Clock className="text-[#D4AF37]" size={24} strokeWidth={1.3} />
            <h3 className="font-serif text-2xl md:text-3xl text-white">
              {c.payment.title}
            </h3>
          </div>
          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            {c.payment.body}
          </p>
        </div>

        {/* Hotels */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-5">
            <Hotel className="text-[#B76E79]" size={26} strokeWidth={1.3} />
            <h3 className="font-serif text-3xl md:text-4xl text-white">
              {c.hotels.title}
            </h3>
          </div>
          <p className="text-white/60 leading-relaxed mb-8">{c.hotels.body}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {c.hotels.list.map((h) => (
              <div
                key={h}
                className="border border-white/10 bg-[#0E0E10] px-5 py-4 text-white/80 text-sm"
              >
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Mini FAQ */}
        <div className="mt-20">
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-8">
            {c.faqTitle}
          </h3>
          <div className="space-y-2">
            {c.faqs.map((f, i) => (
              <div
                key={i}
                data-testid={`booking-faq-${i}`}
                className="p-6 border border-white/[0.08] bg-[#0E0E10]"
              >
                <p className="text-[#E0BFB8] font-medium mb-2">{f.q}</p>
                <p className="text-white/65 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 p-10 md:p-14 text-center border border-white/[0.06] bg-gradient-to-b from-[#141416] to-[#0A0A0B]">
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-5">
            {c.ctaTitle}
          </h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">{c.ctaText}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="booking-cta-wa"
              className="bg-[#25D366] text-white px-10 py-4 uppercase tracking-[0.22em] text-xs font-medium hover:brightness-110 inline-flex items-center justify-center gap-3"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={`tel:${SITE.phone}`}
              data-testid="booking-cta-call"
              className="border border-[#B76E79]/60 text-[#E0BFB8] px-10 py-4 uppercase tracking-[0.22em] text-xs font-medium hover:bg-[#B76E79]/10 inline-flex items-center justify-center gap-3"
            >
              <Phone size={14} /> {SITE.phoneDisplay}
            </a>
          </div>
          <Link
            to="/galeri"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/60 hover:text-white"
          >
            {lang === "tr" ? "Galeriye Git" : "Go to Gallery"} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
