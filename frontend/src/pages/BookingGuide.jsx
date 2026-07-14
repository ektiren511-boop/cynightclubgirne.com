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
      "Girne VIP konsiyerj ve etkinlik servisimiz için adım adım rezervasyon süreci",
    intro:
      "Kıbrıs Night Club rezervasyon süreci hem hızlı hem tamamen profesyonel olacak şekilde tasarlanmıştır. Aşağıdaki adımları takip ederek dakikalar içinde konsiyerj, tur veya etkinlik rezervasyonunuzu tamamlayabilirsiniz.",
    steps: [
      {
        n: "01",
        title: "İhtiyacınızı belirleyin",
        desc: "Hangi hizmetleri istediğinize karar verin: havalimanı transferi, otel rezervasyonu, restoran veya casino koordinasyonu, yat kiralama, tur rehberliği, kurumsal etkinlik. Birden fazla hizmet tek pakette birleştirilebilir.",
      },
      {
        n: "02",
        title: "WhatsApp'tan bize yazın",
        desc: "Sayfanın sağ alt köşesindeki yeşil WhatsApp butonuna tıklayın veya doğrudan +90 548 855 23 87 numarasını arayın. Tarihinizi, misafir sayınızı ve tercih ettiğiniz otel/lokasyonu bildirin.",
      },
      {
        n: "03",
        title: "Özel teklifinizi alın",
        desc: "Ekibimiz ihtiyacınıza göre Basic (yarım gün), Premium (tam gün) veya Signature (çoklu gün) paketlerinden hangisinin uygun olduğunu değerlendirir; dakikalar içinde kişiye özel bir teklif ile döner.",
      },
      {
        n: "04",
        title: "Rezervasyonu onaylayın",
        desc: "Teklif detaylarını kontrol edip onayladıktan sonra, rezervasyonlarınız (otel, restoran, casino, yat) ekibimiz tarafından koordine edilir. Havalimanı transferi ihtiyacınız varsa şoför bilgisi paylaşılır.",
      },
      {
        n: "05",
        title: "Deneyimin tadını çıkarın",
        desc: "Belirlenen tarihte çok dilli konsiyerj ekibimiz Girne'de sizi karşılar. Otel karşılaması, restoran & casino koordinasyonu ve tur rehberliği ile ziyaretiniz sorunsuz akar.",
      },
    ],
    what: {
      title: "Ne beklemelisiniz",
      items: [
        "Çok dilli konsiyerj ekibi (TR, EN, RU, DE, FR, IT, AR)",
        "5 yıldızlı otellerde rezervasyon önceliği",
        "Restoran ve casino VIP masa koordinasyonu",
        "Havalimanı-otel arasında lüks araç transferi",
        "Karpaz turu ve yat kiralama seçenekleri",
        "24 saat önceden yapılan taleplerde esnek iptal",
      ],
    },
    doNot: {
      title: "Kapsam dışı",
      items: [
        "Sabit saatlik ücretlendirme (her paket özel teklif)",
        "Yasa dışı hiçbir talep",
        "Onaylanmamış üçüncü taraf hizmetleri",
        "Rezervasyon dışı kişisel talepler",
      ],
    },
    payment: {
      title: "Ödeme",
      body: "Ödemeler paketin niteliğine göre nakit veya banka havalesi ile yapılır. Euro (€) tercih edilir; USD, GBP ve TL de kabul edilir. Ödeme sistemi WhatsApp konuşması sırasında paylaşılır ve fatura düzenlenir. Detaylar için WhatsApp'tan bize ulaşabilirsiniz.",
    },
    hotels: {
      title: "İşbirliği yaptığımız oteller",
      body: "Girne bölgesindeki tüm 5 yıldızlı otellerde rezervasyon koordinasyonu:",
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
        a: "Kısa süreli koordinasyon 2-3 saat öncesinden mümkündür. Yat ve çoklu gün paketleri için 24-48 saat önceden öneririz.",
      },
      {
        q: "Kimlik istiyor musunuz?",
        a: "Hayır. Sadece iletişim kurabilmek için ad-soyad ve telefon yeterli. Kişisel veri asla üçüncü tarafla paylaşılmaz.",
      },
      {
        q: "Girne dışında hizmet var mı?",
        a: "Evet. Lefkoşa, Gazimağusa ve Karpaz bölgesine de konsiyerj hizmet veriyoruz. Ek transfer ücreti uygulanır.",
      },
    ],
    ctaTitle: "Hemen özel teklif al",
    ctaText:
      "WhatsApp üzerinden dakikalar içinde kişiye özel konsiyerj teklifi.",
  },
  en: {
    eyebrow: "Guide",
    h1: "How to Book",
    subtitle:
      "A step-by-step booking flow for our Kyrenia VIP concierge and event service",
    intro:
      "The Kıbrıs Night Club booking process is designed to be both fast and fully professional. Follow the steps below and complete your concierge, tour or event reservation in minutes.",
    steps: [
      {
        n: "01",
        title: "Define your needs",
        desc: "Decide which services you want: airport transfer, hotel booking, restaurant or casino coordination, yacht charter, tour guiding, corporate event. Multiple services can be combined in a single package.",
      },
      {
        n: "02",
        title: "Message us on WhatsApp",
        desc: "Tap the green WhatsApp button at the bottom-right of any page, or call +90 548 855 23 87 directly. Share your dates, guest count and preferred hotel/location.",
      },
      {
        n: "03",
        title: "Receive a bespoke quote",
        desc: "Our team evaluates whether Basic (half day), Premium (full day) or Signature (multi-day) suits your needs and returns a bespoke quote within minutes.",
      },
      {
        n: "04",
        title: "Confirm your booking",
        desc: "Once you review and confirm the quote, our team coordinates all your reservations (hotel, restaurant, casino, yacht). Driver details are shared if airport transfer is included.",
      },
      {
        n: "05",
        title: "Enjoy the experience",
        desc: "On the agreed date, our multilingual concierge team welcomes you in Kyrenia. Hotel welcome, restaurant & casino coordination and tour guiding keep your visit seamless.",
      },
    ],
    what: {
      title: "What to expect",
      items: [
        "Multilingual concierge team (TR, EN, RU, DE, FR, IT, AR)",
        "Reservation priority at 5-star hotels",
        "Restaurant and casino VIP table coordination",
        "Luxury airport-hotel transfer",
        "Karpaz tours and yacht charter options",
        "Flexible cancellation on 24-hour advance requests",
      ],
    },
    doNot: {
      title: "Out of scope",
      items: [
        "Fixed hourly pricing (every package is a bespoke quote)",
        "Any unlawful requests",
        "Unverified third-party services",
        "Personal requests outside of reservation scope",
      ],
    },
    payment: {
      title: "Payment",
      body: "Payments are made in cash or by bank transfer depending on package type. Euro (€) is preferred; USD, GBP and TRY are also accepted. The payment procedure is shared during the WhatsApp conversation and an invoice is issued. Contact us on WhatsApp for details.",
    },
    hotels: {
      title: "Hotels we partner with",
      body: "Reservation coordination at every 5-star hotel in Kyrenia area:",
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
        a: "Short-notice coordination is possible 2–3 hours in advance. For yacht and multi-day packages, 24–48 hours ahead is recommended.",
      },
      {
        q: "Do you ask for ID?",
        a: "No. Only your name and phone number are needed to communicate. Personal data is never shared with third parties.",
      },
      {
        q: "Do you serve outside Kyrenia?",
        a: "Yes. We provide concierge services in Nicosia, Famagusta and the Karpaz region. An extra transfer fee applies.",
      },
    ],
    ctaTitle: "Get a bespoke quote now",
    ctaText:
      "Receive a personalised concierge proposal within minutes on WhatsApp.",
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

        <div className="grid md:grid-cols-2 gap-6 mt-24">
          <div className="p-8 border border-white/10 bg-[#0E0E10]">
            <ShieldCheck className="text-[#D4AF37] mb-5" size={26} strokeWidth={1.2} />
            <h3 className="font-serif text-2xl text-white mb-5">{c.what.title}</h3>
            <ul className="space-y-3">
              {c.what.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-white/75 text-sm">
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
                <li key={it} className="flex items-start gap-3 text-white/75 text-sm">
                  <span className="text-[#B76E79] flex-shrink-0 mt-0.5">✕</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>

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
              <div key={h} className="border border-white/10 bg-[#0E0E10] px-5 py-4 text-white/80 text-sm">
                {h}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-8">
            {c.faqTitle}
          </h3>
          <div className="space-y-2">
            {c.faqs.map((f, i) => (
              <div key={i} data-testid={`booking-faq-${i}`} className="p-6 border border-white/[0.08] bg-[#0E0E10]">
                <p className="text-[#E0BFB8] font-medium mb-2">{f.q}</p>
                <p className="text-white/65 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

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
            {lang === "tr" ? "Ekibimizi Gör" : "See Our Team"} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
