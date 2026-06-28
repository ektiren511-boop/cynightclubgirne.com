import { useLang } from "@/i18n/LanguageContext";
import { waLink } from "@/data/site";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloatingButton = () => {
  const { lang } = useLang();
  return (
    <a
      href={waLink(lang)}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp-btn"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-[0_0_24px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform duration-300 flex items-center justify-center"
    >
      <MessageCircle size={26} />
    </a>
  );
};
