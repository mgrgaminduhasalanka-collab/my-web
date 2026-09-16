import { useEffect, useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useLang } from '../lib/i18n';
import { ui, WHATSAPP_LINK } from '../lib/content';

const links = [
  { id: 'services', label: ui.nav.services },
  { id: 'work', label: ui.nav.work },
  { id: 'covers', label: ui.nav.covers },
  { id: 'social', label: ui.nav.social },
  { id: 'showcase', label: ui.nav.showcase },
  { id: 'al2026', label: ui.nav.al2026 },
  { id: 'backdrops', label: ui.nav.backdrops },
  { id: 'posters', label: ui.nav.posters },
  { id: 'video', label: ui.nav.video },
  { id: 'tiktok', label: ui.nav.tiktok },
  { id: 'studio', label: ui.nav.studio },
  { id: 'process', label: ui.nav.process },
  { id: 'pricing', label: ui.nav.pricing },
  { id: 'feed', label: ui.nav.feed },
  { id: 'contact', label: ui.nav.contact },
];

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-deep/85 backdrop-blur-md border-b border-sky/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8 2xl:max-w-[96rem]">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/brand/profile.jpg"
            alt="The Habitz logo"
            className="h-10 w-10 rounded-full ring-2 ring-sky/30"
          />
          <span className="font-script text-3xl leading-none text-cream">The Habitz</span>
        </a>

        <nav className="no-scrollbar hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto xl:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold text-cream/75 transition hover:bg-sky/10 hover:text-cream 2xl:px-2.5 2xl:text-[13px]"
            >
              {t(l.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-sky/25 bg-ink/60 p-1 text-xs font-bold">
            <button
              onClick={() => setLang('en')}
              className={`rounded-full px-3 py-1.5 transition ${
                lang === 'en' ? 'bg-cream text-ink' : 'text-cream/70 hover:text-cream'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('si')}
              className={`rounded-full px-3 py-1.5 transition si-text leading-none ${
                lang === 'si' ? 'bg-cream text-ink' : 'text-cream/70 hover:text-cream'
              }`}
            >
              සිං
            </button>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-amber px-4 py-2.5 text-sm font-extrabold text-ink-deep transition hover:bg-cream md:flex xl:hidden 2xl:flex"
          >
            <MessageCircle className="h-4 w-4" />
            {t(ui.nav.whatsapp)}
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full border border-sky/25 p-2 text-cream xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-sky/10 bg-ink-deep/95 backdrop-blur-md xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-sky/10 py-3 font-display text-lg font-semibold text-cream"
              >
                {t(l.label)}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-amber px-4 py-3 font-extrabold text-ink-deep"
            >
              <MessageCircle className="h-4 w-4" />
              {t(ui.nav.whatsapp)}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
