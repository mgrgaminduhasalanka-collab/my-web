import { useLang } from '../lib/i18n';
import { clients, ui } from '../lib/content';

export default function Clients() {
  const { t, lang } = useLang();
  return (
    <div className="border-y border-sky/10 bg-ink/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-10 md:px-8 lg:flex-row lg:justify-between">
        <p
          className={`text-xs font-bold uppercase tracking-[0.22em] text-sky/70 ${
            lang === 'si' ? 'si-text normal-case tracking-normal' : ''
          }`}
        >
          {t(ui.clients.label)}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {clients.map((c) => (
            <li key={c} className="font-display text-lg font-bold text-cream/60 transition hover:text-cream md:text-xl">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
