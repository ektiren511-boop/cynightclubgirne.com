import { useState } from "react";
import axios from "axios";
import { useLang } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { Reveal, MaskReveal } from "@/components/Reveal";
import { SITE, waLink } from "@/data/site";
import { trackConversion } from "@/lib/ads";
import { toast } from "sonner";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Send,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      trackConversion("contact", { source: "contact_form" });
      toast.success(t.common.success);
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      toast.error(t.common.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-32 pb-28 bg-[#0A0A0B] min-h-screen" data-testid="contact-page">
      <SEO customTitle={t.contact.title} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Editorial header */}
        <div className="border-b border-white/[0.06] pb-16 md:pb-24 mb-16 md:mb-20">
          <Reveal>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#B76E79] mb-8 font-mono">
              <span className="w-10 h-px bg-[#B76E79]" />
              — {lang === "tr" ? "İLETİŞİM" : "REACH OUT"} · 007
            </div>
          </Reveal>
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] tracking-[-0.02em]">
            <MaskReveal delay={0.15}>
              {lang === "tr" ? "Bize" : "Talk"}{" "}
              <em className="italic text-[#E0BFB8]">
                {lang === "tr" ? "yaz." : "to us."}
              </em>
            </MaskReveal>
            <MaskReveal delay={0.35}>
              <em className="italic text-[#D4AF37]">
                {lang === "tr" ? "Anında." : "Instantly."}
              </em>
            </MaskReveal>
          </h1>
          <Reveal delay={0.55}>
            <p className="text-white/60 mt-10 max-w-2xl text-base md:text-lg leading-relaxed">
              {t.contact.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left — contact cards */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal>
              <a
                href={waLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("whatsapp", { source: "contact" })}
                data-testid="contact-wa-card"
                className="group block p-8 border border-[#25D366]/30 bg-gradient-to-br from-[#0E1F12] to-[#0A0A0B] hover:border-[#25D366] transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-6">
                  <MessageCircle
                    className="text-[#25D366]"
                    size={30}
                    strokeWidth={1.3}
                  />
                  <span className="text-[9px] uppercase tracking-[0.32em] text-white/40 font-mono">
                    CH · 01
                  </span>
                </div>
                <h3 className="font-editorial text-3xl md:text-4xl text-white leading-none mb-4">
                  {t.contact.whatsappTitle}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-md">
                  {t.contact.whatsappText}
                </p>
                <span className="text-[#25D366] text-[11px] uppercase tracking-[0.32em] inline-flex items-center gap-3">
                  {SITE.phoneDisplay}
                  <ArrowUpRight
                    size={14}
                    className="group-hover:rotate-45 transition-transform duration-500"
                  />
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.05}>
              <a
                href={`tel:${SITE.phone}`}
                onClick={() => trackConversion("call", { source: "contact" })}
                data-testid="contact-call-card"
                className="group block p-7 border border-white/10 bg-[#0C0C0E] hover:border-[#B76E79]/40 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-5">
                  <Phone className="text-[#B76E79]" size={26} strokeWidth={1.4} />
                  <span className="text-[9px] uppercase tracking-[0.32em] text-white/40 font-mono">
                    CH · 02
                  </span>
                </div>
                <h3 className="font-editorial text-2xl md:text-3xl text-white leading-none mb-3">
                  {t.contact.callTitle}
                </h3>
                <p className="text-[#E0BFB8] tracking-wider text-lg">{SITE.phoneDisplay}</p>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 border border-white/10 bg-[#0C0C0E]">
                  <MapPin className="text-[#D4AF37] mb-4" size={20} strokeWidth={1.4} />
                  <h4 className="text-[9px] uppercase tracking-[0.32em] text-white/50 mb-2 font-mono">
                    {t.contact.addressTitle}
                  </h4>
                  <p className="text-white/85 text-sm leading-tight">{t.contact.address}</p>
                </div>
                <div className="p-6 border border-white/10 bg-[#0C0C0E]">
                  <Clock className="text-[#D4AF37] mb-4" size={20} strokeWidth={1.4} />
                  <h4 className="text-[9px] uppercase tracking-[0.32em] text-white/50 mb-2 font-mono">
                    {t.contact.hoursTitle}
                  </h4>
                  <p className="text-white/85 text-sm leading-tight">{t.contact.hoursValue}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-4 p-5 border border-white/10 bg-[#0C0C0E] hover:border-[#D4AF37]/40 transition-colors duration-500"
              >
                <Mail className="text-[#D4AF37]" size={20} strokeWidth={1.4} />
                <span className="text-white/85 text-sm flex-1 group-hover:text-white transition-colors">
                  {SITE.email}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-white/40 group-hover:text-[#D4AF37] group-hover:rotate-45 transition-all duration-500"
                />
              </a>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="p-8 lg:p-12 border border-white/10 bg-gradient-to-b from-[#141416] to-[#0A0A0B] relative"
              >
                <div className="flex items-center justify-between mb-10">
                  <h3 className="font-editorial text-4xl md:text-5xl text-white leading-none">
                    {t.contact.formTitle}
                  </h3>
                  <span className="text-[9px] uppercase tracking-[0.32em] text-[#D4AF37] font-mono">
                    FORM / 03
                  </span>
                </div>

                <div className="space-y-8">
                  <Field
                    label={t.contact.formName}
                    testid="contact-name"
                    number="01"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <Field
                    label={t.contact.formPhone}
                    testid="contact-phone"
                    number="02"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                  />
                  <Field
                    label={t.contact.formMessage}
                    testid="contact-message"
                    number="03"
                    textarea
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  data-testid="contact-submit"
                  className="group w-full mt-10 flex items-center justify-between gap-4 bg-white text-black px-8 py-5 uppercase tracking-[0.28em] text-[11px] font-medium hover:bg-[#D4AF37] transition-all duration-500 disabled:opacity-60"
                >
                  <span className="flex items-center gap-3">
                    <Send size={14} />
                    {sending ? t.common.sending : t.contact.formSubmit}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:rotate-45 transition-transform duration-500"
                  />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

const Field = ({ label, value, onChange, textarea, testid, number }) => (
  <label className="block group">
    <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-white/50 mb-3 font-mono">
      <span className="text-[#D4AF37]">{number}</span>
      <span className="w-4 h-px bg-white/20" />
      {label}
    </span>
    {textarea ? (
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid={testid}
        className="w-full bg-transparent border-b border-white/15 focus:border-[#D4AF37] focus:outline-none text-white py-3 text-lg transition-colors resize-none"
        required
      />
    ) : (
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid={testid}
        className="w-full bg-transparent border-b border-white/15 focus:border-[#D4AF37] focus:outline-none text-white py-3 text-lg transition-colors"
        required
      />
    )}
  </label>
);
