import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { ShieldCheck } from "lucide-react";

export const AgeVerificationModal = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("knc_age_ok");
    if (!verified) setOpen(true);
  }, []);

  if (!open) return null;

  const confirm = () => {
    localStorage.setItem("knc_age_ok", "1");
    setOpen(false);
  };
  const leave = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div
      className="fixed inset-0 z-[100] backdrop-blur-3xl bg-black/90 flex items-center justify-center px-6"
      data-testid="age-verification-modal"
    >
      <div className="relative max-w-lg w-full bg-gradient-to-b from-[#141416] to-[#0A0A0B] border border-[#D4AF37]/30 p-10 md:p-14 text-center">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 border border-[#D4AF37]/40 flex items-center justify-center">
            <ShieldCheck className="text-[#D4AF37]" size={26} />
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.32em] text-[#E0BFB8] mb-4">
          18+
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-5">
          {t.ageGate.title}
        </h2>
        <p className="text-white/65 text-sm md:text-base leading-relaxed mb-10">
          {t.ageGate.text}
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={confirm}
            data-testid="age-confirm-btn"
            className="bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white py-4 uppercase tracking-[0.22em] text-xs font-medium hover:brightness-110 transition-all"
          >
            {t.ageGate.confirm}
          </button>
          <button
            onClick={leave}
            data-testid="age-leave-btn"
            className="text-white/50 py-3 text-xs uppercase tracking-[0.22em] hover:text-white transition-colors"
          >
            {t.ageGate.leave}
          </button>
        </div>
      </div>
    </div>
  );
};
