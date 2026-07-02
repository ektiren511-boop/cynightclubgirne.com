import { useLang } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { faqs } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const { t, lang } = useLang();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => {
      const q = lang === "tr" ? f.tr.q : f.en.q;
      const a = lang === "tr" ? f.tr.a : f.en.a;
      return {
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text: a,
        },
      };
    }),
  };

  return (
    <div className="pt-32 pb-24 bg-[#0A0A0B] min-h-screen" data-testid="faq-page">
      <SEO customTitle={t.faq.title} jsonLd={jsonLd} />
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
            {lang === "tr" ? "Bilgi" : "Knowledge"}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02] tracking-tight">
            {t.faq.title}
          </h1>
          <p className="text-white/60 mt-6 max-w-2xl">{t.faq.subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((item) => {
            const q = lang === "tr" ? item.tr.q : item.en.q;
            const a = lang === "tr" ? item.tr.a : item.en.a;
            return (
              <AccordionItem
                key={item.id}
                value={`item-${item.id}`}
                data-testid={`faq-item-${item.id}`}
                className="border-b border-white/[0.08] data-[state=open]:border-[#B76E79]/40 px-1"
              >
                <AccordionTrigger className="text-left text-white hover:text-[#E0BFB8] hover:no-underline text-base md:text-lg py-6 font-normal data-[state=open]:text-[#E0BFB8]">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-white/65 text-sm md:text-base leading-relaxed pb-6 pr-6">
                  {a}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
