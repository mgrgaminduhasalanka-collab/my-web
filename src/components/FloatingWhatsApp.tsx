import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../lib/content';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-10px_rgba(37,211,102,0.7)] transition hover:scale-105"
    >
      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]/50" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
