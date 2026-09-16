import { motion } from 'framer-motion';
import { MessageCircle, PenTool, Check } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { ui, WHATSAPP_LINK } from '../lib/content';

export default function Studio() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="studio" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-amber/20 blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-electric/25 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.studio.kicker} title={ui.studio.title} sub={ui.studio.sub} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14"
        >
          <figure className="relative">
            <div className="absolute -inset-3 rotate-1 rounded-[2rem] border border-amber/25" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-sky/25 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
              <img
                src="/brand/illustration_today.jpg"
                alt="Desk setup — concert on the monitor, floral vector pattern in Illustrator on the laptop"
                loading="lazy"
                className="block h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/90 to-transparent p-5 pt-16">
                <figcaption className={`font-display text-base font-bold text-cream md:text-lg ${si}`}>{t(ui.studio.caption)}</figcaption>
                <p className="mt-1 text-xs font-semibold text-sky">#illustrator #thehabitz #graphicdesign</p>
              </div>
            </div>
            <span
              className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black shadow-lg"
              style={{ background: '#330000', color: '#ff9a00' }}
              title="Adobe Illustrator"
            >
              Ai
            </span>
          </figure>

          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber text-ink-deep">
              <PenTool className="h-6 w-6" />
            </span>
            <ul className="mt-6 space-y-3">
              {[ui.studio.f1, ui.studio.f2, ui.studio.f3].map((f, i) => (
                <li key={i} className={`flex items-start gap-3 text-[15px] text-cream/80 ${si}`}>
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                  {t(f)}
                </li>
              ))}
            </ul>

            {/* pattern swatch echoing the floral vector in the photo */}
            <div
              className="mt-8 h-20 rounded-2xl border border-sky/20"
              style={{
                backgroundColor: '#f4efe4',
                backgroundImage:
                  'radial-gradient(circle at 50% 50%, #1a22a3 2px, transparent 2.5px), radial-gradient(ellipse 30% 55% at 50% 22%, #c9cde6 55%, transparent 56%), radial-gradient(ellipse 30% 55% at 50% 78%, #c9cde6 55%, transparent 56%), radial-gradient(ellipse 55% 30% at 22% 50%, #c9cde6 55%, transparent 56%), radial-gradient(ellipse 55% 30% at 78% 50%, #c9cde6 55%, transparent 56%)',
                backgroundSize: '40px 40px',
              }}
              aria-hidden
            />

            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hi The Habitz! I would like to commission a custom vector illustration.')}`}
              target="_blank"
              rel="noreferrer"
              className={`mt-7 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 font-extrabold text-ink-deep transition hover:bg-cream ${si}`}
            >
              <MessageCircle className="h-4 w-4" /> {t(ui.studio.cta)}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
