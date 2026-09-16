import { useState, type FormEvent, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Facebook, Send, Phone } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { ui, projectTypes, WHATSAPP_LINK, WHATSAPP_NUMBER, FACEBOOK_LINK } from '../lib/content';

export default function Contact() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';
  const [name, setName] = useState('');
  const [type, setType] = useState(projectTypes[0].en);
  const [msg, setMsg] = useState('');

  const text = `Hi The Habitz! 👋\nName: ${name || '-'}\nNeed: ${type}\n\n${msg}`;
  const waHref = `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`;
  const ready = msg.trim().length > 0;

  // Plain anchor navigation is never popup-blocked; if the new tab is
  // still refused (e.g. sandboxed iframe), fall back to the same tab.
  const onSend = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ready) {
      e.preventDefault();
      return;
    }
    const win = window.open(waHref, '_blank', 'noopener,noreferrer');
    if (win) e.preventDefault();
    else window.location.href = waHref;
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (ready) window.location.href = waHref;
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 rounded-full bg-electric/25 blur-[160px]" />
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <SectionHead kicker={ui.contact.kicker} title={ui.contact.title} sub={ui.contact.sub} />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-amber p-6 text-ink-deep transition hover:-translate-y-1"
            >
              <span className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-coral/30 blur-2xl" />
              <MessageCircle className="h-7 w-7" />
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] opacity-70">{t(ui.contact.whatsappLabel)}</p>
              <p className="mt-1 font-display text-2xl font-extrabold">{WHATSAPP_NUMBER}</p>
              <p className="mt-1 font-mono text-xs opacity-70">+94 71 359 6833</p>
            </a>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-sky/25 bg-ink p-6 transition hover:-translate-y-1 hover:border-sky"
            >
              <span className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-electric/40 blur-2xl" />
              <Facebook className="h-7 w-7 text-sky" />
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-sky/70">{t(ui.contact.fbLabel)}</p>
              <p className="mt-1 font-display text-2xl font-extrabold text-cream">@thehabitz.lk</p>
              <p className="mt-1 font-mono text-xs text-cream/50">facebook.com/thehabitz.lk</p>
            </a>
          </div>

          <a
            href={`tel:+${'94713596833'}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cream/60 transition hover:text-cream"
          >
            <Phone className="h-4 w-4" /> +94 71 359 6833
          </a>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-sky/20 bg-ink/70 p-7 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur md:p-9"
        >
          <h3 className={`font-display text-2xl font-extrabold text-cream ${si}`}>{t(ui.contact.formTitle)}</h3>

          <label className="mt-6 block">
            <span className={`text-xs font-bold uppercase tracking-[0.18em] text-sky/80 ${si}`}>{t(ui.contact.name)}</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-sky/20 bg-ink-deep/70 px-4 py-3 text-cream outline-none transition placeholder:text-cream/30 focus:border-amber"
              placeholder={lang === 'si' ? 'ඔබේ නම' : 'Your name'}
            />
          </label>

          <label className="mt-5 block">
            <span className={`text-xs font-bold uppercase tracking-[0.18em] text-sky/80 ${si}`}>{t(ui.contact.type)}</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={`mt-2 w-full appearance-none rounded-2xl border border-sky/20 bg-ink-deep/70 px-4 py-3 text-cream outline-none transition focus:border-amber ${si}`}
            >
              {projectTypes.map((p) => (
                <option key={p.en} value={p.en} className="bg-ink-deep">
                  {t(p)}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block">
            <span className={`text-xs font-bold uppercase tracking-[0.18em] text-sky/80 ${si}`}>{t(ui.contact.message)}</span>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={5}
              required
              className={`mt-2 w-full resize-none rounded-2xl border border-sky/20 bg-ink-deep/70 px-4 py-3 text-cream outline-none transition placeholder:text-cream/30 focus:border-amber ${si}`}
              placeholder={t(ui.contact.placeholder)}
            />
          </label>

          <a
            href={waHref}
            onClick={onSend}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!ready}
            className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-extrabold transition ${
              ready ? 'bg-amber text-ink-deep hover:bg-cream' : 'cursor-not-allowed bg-amber/40 text-ink-deep/60'
            } ${si}`}
          >
            <Send className="h-4 w-4" /> {t(ui.contact.send)}
          </a>
          <button type="submit" className="sr-only" tabIndex={-1} aria-hidden>
            submit
          </button>
          <p className={`mt-3 text-center text-xs text-cream/45 ${si}`}>
            {ready ? t(ui.contact.note) : lang === 'si' ? 'යවන්න කලින් විස්තර ටිකක් ලියන්න.' : 'Write a short message above to enable sending.'}
          </p>
          <p className="mt-2 text-center text-xs text-cream/45">
            {lang === 'si' ? 'නැත්නම් කෙලින්ම message කරන්න:' : 'Or message directly:'}{' '}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-amber hover:underline">
              {WHATSAPP_NUMBER}
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
}
