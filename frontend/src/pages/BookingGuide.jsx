import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { Reveal, MaskReveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { waLink, SITE } from "@/data/site";
import { trackConversion } from "@/lib/ads";
import {
  MessageCircle,
  Phone,
  Clock,
  Hotel,
  ShieldCheck,
  Check,
  ArrowUpRight,
} from "lucide-react";

const CONTENT = {
  tr: {
    eyebrow: "REZERVASYON REHBERİ",
    h1a: "Nasıl",
    h1b: "rezervasyon",
    h1c: "yapılır.",
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
    whatTitle: "Ne beklemelisiniz",
    whatItems: [
      "Çok dilli konsiyerj ekibi (TR, EN, RU, DE, FR, IT, AR)",
      "5 yıldızlı otellerde rezervasyon önceliği",
      "Restoran ve casino VIP masa koordinasyonu",
      "Havalimanı-otel arasında lüks araç transferi",
      "Karpaz turu ve yat kiralama seçenekleri",
      "24 saat önceden yapılan taleplerde esnek iptal",
    ],
    doNotTitle: "Kapsam dışı",
    doNotItems: [
      "Sabit saatlik ücretlendirme (her paket özel teklif)",
      "Yasa dışı hiçbir talep",
      "Onaylanmamış üçüncü taraf hizmetleri",
      "Rezervasyon dışı kişisel talepler",
    ],
    paymentTitle: "Ödeme",
    paymentBody:
      "Ödemeler paketin niteliğine göre nakit veya banka havalesi ile yapılır. Euro (€) tercih edilir; USD, GBP ve TL de kabul edilir. Ödeme sistemi WhatsApp konuşması sırasında paylaşılır ve fatura düzenlenir. Detaylar için WhatsApp'tan bize ulaşabilirsiniz.",
    hotelsTitle: "İşbirliği yaptığımız oteller",
    hotelsBody: "Girne bölgesindeki tüm 5 yıldızlı otellerde rezervasyon koordinasyonu:",
    hotelsList: [
      "Cratos Premium Hotel & Casino",
      "Merit Crystal Cove Hotel & Casino",
      "Acapulco Resort & Casino",
      "Concorde Luxury Resort",
      "Lord's Palace Hotel",
      "Kaya Artemis Resort",
      "Grand Pasha Hotel & Casino",
      "Elexus Hotel",
    ],
    faqTitle: "Kısa sorular",
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
    seeTeam: "Vitrini Gör",
  },
  en: {
    eyebrow: "BOOKING GUIDE",
    h1a: "How",
    h1b: "to",
    h1c: "book.",
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
    whatTitle: "What to expect",
    whatItems: [
      "Multilingual concierge team (TR, EN, RU, DE, FR, IT, AR)",
      "Reservation priority at 5-star hotels",
      "Restaurant and casino VIP table coordination",
      "Luxury airport-hotel transfer",
      "Karpaz tours and yacht charter options",
      "Flexible cancellation on 24-hour advance requests",
    ],
    doNotTitle: "Out of scope",
    doNotItems: [
      "Fixed hourly pricing (every package is a bespoke quote)",
      "Any unlawful requests",
      "Unverified third-party services",
      "Personal requests outside of reservation scope",
    ],
    paymentTitle: "Payment",
    paymentBody:
      "Payments are made in cash or by bank transfer depending on package type. Euro (€) is preferred; USD, GBP and TRY are also accepted. The payment procedure is shared during the WhatsApp conversation and an invoice is issued. Contact us on WhatsApp for details.",
    hotelsTitle: "Hotels we partner with",
    hotelsBody: "Reservation coordination at every 5-star hotel in Kyrenia area:",
    hotelsList: [
      "Cratos Premium Hotel & Casino",
      "Merit Crystal Cove Hotel & Casino",
      "Acapulco Resort & Casino",
      "Concorde Luxury Resort",
      "Lord's Palace Hotel",
      "Kaya Artemis Resort",
      "Grand Pasha Hotel & Casino",
      "Elexus Hotel",
    ],
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
    ctaText: "Receive a personalised concierge proposal within minutes on WhatsApp.",
    seeTeam: "See Showcase",
  },
};

export default function BookingGuide() {
  const { lang } = useLang();
  const c = CONTENT[lang] || CONTENT.tr;

  return (
    <div
      className="pt-32 pb-28 bg-[#0A0A0B] min-h-screen"
      data-testid="booking-guide-page"
    >
      <SEO customTitle={c.h1a + " " + c.h1b + " " + c.h1c} customDesc={c.intro} />

      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Editorial header */}
        <div className="border-b border-white/[0.06] pb-16 md:pb-24 mb-20">
          <Reveal>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-8 font-mono">
              <span className="w-10 h-px bg-[#B76E79]" />
              — {c.eyebrow} · 005
            </div>
          </Reveal>
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] text-white leading-[0.9] tracking-[-0.02em]">
            <MaskReveal delay={0.15}>
              {c.h1a} <em className="italic text-[#E0BFB8]">{c.h1b}</em>
            </MaskReveal>
            <MaskReveal delay={0.35}>
              <em className="italic text-[#D4AF37]">{c.h1c}</em>
            </MaskReveal>
          </h1>
          <Reveal delay={0.55}>
            <p className="text-[#E0BFB8] text-[10px] md:text-xs uppercase tracking-[0.4em] mt-10 font-mono">
              {c.subtitle}
            </p>
            <p className="text-white/60 mt-6 text-base md:text-lg leading-[1.7] max-w-2xl">
              {c.intro}
            </p>
          </Reveal>
        </div>

        {/* Steps — numbered editorial chapters */}
        <RevealGroup className="space-y-2" stagger={0.09}>
          {c.steps.map((s, i) => (
            <RevealItem key={s.n}>
              <article
                data-testid={`booking-step-${i}`}
                className="group grid md:grid-cols-12 gap-6 md:gap-10 items-start py-12 md:py-14 border-t border-white/[0.07] hover:border-[#B76E79]/40 transition-colors duration-500"
              >
                <div className="md:col-span-3">
                  <span className="chapter-num text-6xl md:text-8xl text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors duration-500">
                    {s.n}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-px bg-[#B76E79]" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#B76E79] font-mono">
                      STEP {s.n}
                    </span>
                  </div>
                  <h3 className="font-editorial text-3xl md:text-4xl lg:text-5xl text-white leading-[1.05] group-hover:text-[#E0BFB8] transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-white/60 mt-6 leading-[1.7] max-w-2xl text-base md:text-lg">
                    {s.desc}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Expect / Out of scope */}
        <Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-28">
            <div className="p-10 border border-[#D4AF37]/25 bg-[#0C0C0E] relative">
              <span className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.32em] text-white/40 font-mono">
                YES
              </span>
              <ShieldCheck className="text-[#D4AF37] mb-6" size={26} strokeWidth={1.2} />
              <h3 className="font-editorial text-3xl text-white mb-6">{c.whatTitle}</h3>
              <ul className="space-y-3.5">
                {c.whatItems.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                    <Check size={16} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 border border-white/10 bg-[#0C0C0E] relative">
              <span className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.32em] text-white/40 font-mono">
                NO
              </span>
              <div className="w-7 h-7 rounded-full border border-[#B76E79] mb-6 flex items-center justify-center text-[#B76E79] text-sm">
                ✕
              </div>
              <h3 className="font-editorial text-3xl text-white mb-6">{c.doNotTitle}</h3>
              <ul className="space-y-3.5">
                {c.doNotItems.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                    <span className="text-[#B76E79] flex-shrink-0 mt-0.5">✕</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Payment */}
        <Reveal>
          <div className="mt-16 p-10 md:p-12 border border-[#D4AF37]/25 bg-gradient-to-br from-[#141210] to-[#0A0A0B]">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-[#D4AF37]" size={24} strokeWidth={1.3} />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-mono">
                CH · 06
              </span>
            </div>
            <h3 className="font-editorial text-3xl md:text-4xl text-white mb-5">
              {c.paymentTitle}
            </h3>
            <p className="text-white/70 leading-[1.7] text-base md:text-lg max-w-3xl">
              {c.paymentBody}
            </p>
          </div>
        </Reveal>

        {/* Hotels */}
        <Reveal>
          <div className="mt-24">
            <div className="flex items-center gap-3 mb-6">
              <Hotel className="text-[#B76E79]" size={22} strokeWidth={1.3} />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#B76E79] font-mono">
                CH · 07
              </span>
            </div>
            <h3 className="font-editorial text-4xl md:text-5xl text-white mb-6 leading-[1.05]">
              {c.hotelsTitle}
            </h3>
            <p className="text-white/60 leading-relaxed mb-10 max-w-2xl">{c.hotelsBody}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {c.hotelsList.map((h, i) => (
                <div
                  key={h}
                  className="border border-white/10 bg-[#0C0C0E] px-6 py-5 text-white/80 text-sm flex items-center justify-between hover:border-[#D4AF37]/40 transition-colors duration-500"
                >
                  <span>{h}</span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-mono">
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <div className="mt-24">
            <h3 className="font-editorial text-4xl md:text-5xl text-white mb-10 leading-[1.05]">
              {c.faqTitle}
            </h3>
            <div className="space-y-2">
              {c.faqs.map((f, i) => (
                <div
                  key={i}
                  data-testid={`booking-faq-${i}`}
                  className="p-7 border border-white/[0.08] bg-[#0C0C0E] hover:border-[#B76E79]/30 transition-colors duration-500"
                >
                  <p className="text-[#E0BFB8] font-editorial text-xl md:text-2xl leading-tight mb-3">
                    {f.q}
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Final CTA */}
        <Reveal>
          <div className="mt-28 p-10 md:p-16 text-center border border-[#D4AF37]/25 bg-gradient-to-b from-[#141210] to-[#0A0A0B] relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <h3 className="font-editorial italic text-4xl md:text-6xl text-white mb-5 leading-[1]">
              {c.ctaTitle}
            </h3>
            <p className="text-white/60 mb-10 max-w-xl mx-auto text-base md:text-lg">
              {c.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={waLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("whatsapp", { source: "booking_cta" })}
                data-testid="booking-cta-wa"
                className="group bg-[#25D366] text-white px-10 py-5 uppercase tracking-[0.28em] text-[11px] font-medium hover:brightness-110 inline-flex items-center justify-center gap-3"
              >
                <MessageCircle size={16} /> WhatsApp
                <ArrowUpRight
                  size={14}
                  className="group-hover:rotate-45 transition-transform duration-500"
                />
              </a>
              <a
                href={`tel:${SITE.phone}`}
                onClick={() => trackConversion("call", { source: "booking_cta" })}
                data-testid="booking-cta-call"
                className="group border border-[#B76E79]/60 text-[#E0BFB8] px-10 py-5 uppercase tracking-[0.28em] text-[11px] font-medium hover:bg-[#B76E79]/10 hover:border-[#D4AF37] hover:text-[#D4AF37] inline-flex items-center justify-center gap-3 transition-all duration-500"
              >
                <Phone size={14} /> {SITE.phoneDisplay}
              </a>
            </div>
            <Link
              to="/galeri"
              className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-white/60 hover:text-white transition-colors duration-500 group"
            >
              {c.seeTeam}{" "}
              <ArrowUpRight
                size={14}
                className="group-hover:rotate-45 transition-transform duration-500"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
