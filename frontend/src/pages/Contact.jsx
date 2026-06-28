import { useState } from "react";
import axios from "axios";
import { useLang } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { SITE, waLink } from "@/data/site";
import { toast } from "sonner";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Send,
  Mail,
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
      toast.success(t.common.success);
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      toast.error(t.common.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#0A0A0B] min-h-screen" data-testid="contact-page">
      <SEO customTitle={t.contact.title} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.32em] text-[#B76E79] mb-5">
            {lang === "tr" ? "Bize Ulaşın" : "Reach Out"}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
            {t.contact.title}
          </h1>
          <p className="text-white/60 mt-6">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: contact info */}
          <div className="lg:col-span-5 space-y-5">
            <a
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-wa-card"
              className="block p-7 border border-[#25D366]/30 bg-gradient-to-br from-[#0E1F12] to-[#0A0A0B] hover:border-[#25D366] transition-all group"
            >
              <MessageCircle
                className="text-[#25D366] mb-5"
                size={28}
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-2xl text-white mb-2">
                {t.contact.whatsappTitle}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                {t.contact.whatsappText}
              </p>
              <span className="text-[#25D366] text-xs uppercase tracking-[0.22em] inline-flex items-center gap-2">
                {SITE.phoneDisplay} →
              </span>
            </a>

            <a
              href={`tel:${SITE.phone}`}
              data-testid="contact-call-card"
              className="block p-7 border border-white/10 bg-[#0E0E10] hover:border-[#B76E79]/40 transition-all"
            >
              <Phone
                className="text-[#B76E79] mb-5"
                size={26}
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-2xl text-white mb-2">
                {t.contact.callTitle}
              </h3>
              <p className="text-[#E0BFB8] tracking-wider">{SITE.phoneDisplay}</p>
            </a>

            <div className="grid grid-cols-2 gap-5">
              <div className="p-6 border border-white/10 bg-[#0E0E10]">
                <MapPin
                  className="text-[#D4AF37] mb-4"
                  size={22}
                  strokeWidth={1.5}
                />
                <h4 className="text-xs uppercase tracking-[0.22em] text-white/50 mb-1.5">
                  {t.contact.addressTitle}
                </h4>
                <p className="text-white/80 text-sm">{t.contact.address}</p>
              </div>
              <div className="p-6 border border-white/10 bg-[#0E0E10]">
                <Clock
                  className="text-[#D4AF37] mb-4"
                  size={22}
                  strokeWidth={1.5}
                />
                <h4 className="text-xs uppercase tracking-[0.22em] text-white/50 mb-1.5">
                  {t.contact.hoursTitle}
                </h4>
                <p className="text-white/80 text-sm">{t.contact.hoursValue}</p>
              </div>
            </div>

            <div className="p-6 border border-white/10 bg-[#0E0E10] flex items-center gap-4">
              <Mail className="text-[#D4AF37]" size={22} strokeWidth={1.5} />
              <a href={`mailto:${SITE.email}`} className="text-white/80 text-sm hover:text-white">
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="p-8 lg:p-10 border border-white/10 bg-gradient-to-b from-[#121214] to-[#0A0A0B] space-y-6"
            >
              <h3 className="font-serif text-3xl text-white">
                {t.contact.formTitle}
              </h3>
              <Field
                label={t.contact.formName}
                testid="contact-name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Field
                label={t.contact.formPhone}
                testid="contact-phone"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
              />
              <Field
                label={t.contact.formMessage}
                testid="contact-message"
                textarea
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
              />
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-submit"
                className="w-full bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white py-4 uppercase tracking-[0.22em] text-xs font-medium hover:brightness-110 transition-all inline-flex items-center justify-center gap-3 disabled:opacity-60"
              >
                <Send size={14} /> {sending ? t.common.sending : t.contact.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const Field = ({ label, value, onChange, textarea, testid }) => (
  <label className="block">
    <span className="block text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2.5">
      {label}
    </span>
    {textarea ? (
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid={testid}
        className="w-full bg-black/40 border border-white/10 focus:border-[#B76E79]/60 focus:outline-none text-white px-4 py-3 text-sm transition-colors resize-none"
        required
      />
    ) : (
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid={testid}
        className="w-full bg-black/40 border border-white/10 focus:border-[#B76E79]/60 focus:outline-none text-white px-4 py-3 text-sm transition-colors"
        required
      />
    )}
  </label>
);
