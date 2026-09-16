import { Facebook, MessageCircle } from 'lucide-react';
import { useLang } from '../lib/i18n';
import { ui, FACEBOOK_LINK, WHATSAPP_LINK } from '../lib/content';

export default function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="border-t border-sky/10 bg-ink-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-4">
          <img src="/brand/profile.jpg" alt="The Habitz" className="h-12 w-12 rounded-full ring-2 ring-sky/30" />
          <div>
            <p className="font-script text-3xl leading-none text-cream">The Habitz</p>
            <p className="mt-1 text-sm text-cream/55">{t(ui.footer.tagline)}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sky/25 text-cream/70 transition hover:border-sky hover:text-cream"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-amber text-ink-deep transition hover:bg-cream"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-sky/10">
        <div
          className={`mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-cream/40 md:flex-row md:items-center md:justify-between md:px-8 ${
            lang === 'si' ? 'si-text' : ''
          }`}
        >
          <p>© 2026 The Habitz · Sri Lanka. {t(ui.footer.rights)}</p>
          <p>#thehabitz #designsbyhabitz #GraphicDesignerLK #VideoEditorSriLanka</p>
        </div>
      </div>
    </footer>
  );
}
