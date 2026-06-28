import { useLang } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import {
  Hotel,
  Utensils,
  Music,
  Anchor,
  Plane,
  PartyPopper,
} from "lucide-react";

const ICONS = [Hotel, Utensils, Music, Anchor, Plane, PartyPopper];

export default function Services() {
  const { t } = useLang();

  return (
    <div className="pt-32 pb-24 bg-[#0A0A0B] min-h-screen" data-testid="services-page">
      <SEO customTitle={t.services.title} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
            {t.home.servicesEyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02] tracking-tight">
            {t.services.title}
          </h1>
          <p className="text-white/60 mt-6 max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {t.services.list.map((s, i) => {
            const Icon = ICONS[i] || Hotel;
            return (
              <div
                key={i}
                data-testid={`service-row-${i}`}
                className="group grid md:grid-cols-12 gap-8 items-start py-12 md:py-14 border-t border-white/[0.07] hover:border-[#B76E79]/40 transition-colors"
              >
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                  <Icon
                    className="text-[#D4AF37]"
                    size={36}
                    strokeWidth={1.1}
                  />
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    0{i + 1}
                  </p>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-tight group-hover:text-[#E0BFB8] transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-white/55 mt-5 max-w-3xl leading-relaxed text-base md:text-lg">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
