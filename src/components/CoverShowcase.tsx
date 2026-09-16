import { motion } from 'framer-motion';
import { MessageCircle, Facebook } from 'lucide-react';
import { useLang } from '../lib/i18n';
import { ui, WHATSAPP_LINK, FACEBOOK_LINK } from '../lib/content';
import type { Bi } from '../lib/i18n';

const showcaseCovers: { image: string; alt: string; label: Bi; unit: string }[] = [
  {
    image: '/brand/cover_bs_unit3.jpg',
    alt: 'BS Unit 3 — රජය හා ව්‍යාපාර tute cover',
    label: { en: 'Government & Business', si: 'රජය හා ව්‍යාපාර' },
    unit: 'BS · Unit 03',
  },
  {
    image: '/brand/cover_mr_kottu.jpg',
    alt: 'Mr. Kottu — BS Unit 2 tute cover',
    label: { en: 'Mr. Kottu — Ethics & CSR', si: 'Mr. Kottu — ආචාර ධර්ම' },
    unit: 'BS · Unit 02',
  },
  {
    image: '/brand/cover_fifa.jpg',
    alt: 'FIFA Edition — We Are Ready 26 MCQ book cover',
    label: { en: 'FIFA Edition — We Are Ready 26', si: 'FIFA Edition — We Are Ready 26' },
    unit: 'BS · MCQ book',
  },
  {
    image: '/brand/cover_econ_unit8.jpg',
    alt: 'ECON Unit 08 Part II — රාජ්‍ය ආර්ථිකය tute cover',
    label: { en: 'Public Economics — Part II', si: 'රාජ්‍ය ආර්ථිකය — Part II' },
    unit: 'ECON · Unit 08',
  },
];

export default function CoverShowcase() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="showcase" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-sky/20 bg-ink/60 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.95)]"
        >
          <div className="relative grid gap-10 px-6 pb-8 pt-8 md:px-10 md:pb-12 md:pt-12 lg:grid-cols-[1fr_1.15fr] lg:items-end">
            <div>
              <p className={`text-xs font-bold uppercase tracking-[0.22em] text-amber ${lang === 'si' ? 'si-text normal-case tracking-normal' : ''}`}>
                {t(ui.showcase.kicker)}
              </p>
              <h2 className={`mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-cream md:text-5xl ${si}`}>
                {t(ui.showcase.sub)}
              </h2>
              <p className={`mt-4 max-w-md text-[15px] leading-relaxed text-cream/75 ${si}`}>{t(ui.showcase.body)}</p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hi The Habitz! I saw the A/L 2026 cover showcase and I need a custom tute cover.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 font-extrabold text-ink-deep transition hover:bg-cream ${si}`}
                >
                  <MessageCircle className="h-4 w-4" /> {t(ui.showcase.cta)}
                </a>
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 text-xs font-semibold text-cream/60 transition hover:text-cream ${si}`}
                >
                  <Facebook className="h-3.5 w-3.5" /> {t(ui.showcase.shared)}
                </a>
              </div>
            </div>

            {/* the A/L 2026 covers */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {showcaseCovers.map((c, i) => (
                <motion.figure
                  key={c.image}
                  initial={{ opacity: 0, y: 24, rotate: i % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-ink-deep/60 shadow-[0_25px_50px_-25px_rgba(0,0,0,0.9)]"
                >
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="block aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/95 via-ink-deep/70 to-transparent p-3 pt-10">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-amber">{c.unit}</p>
                    <p className={`mt-0.5 text-xs font-bold leading-tight text-cream md:text-sm ${si}`}>{t(c.label)}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-sky/10 px-6 py-4 text-[11px] font-semibold text-cream/55 md:px-10">
            <span>#thehabitz #GraphicDesign #TuteCover #BookCoverDesign #AL2026 #printreadyartwork</span>
            <span className="font-display font-bold text-cream/80">Crafting visuals that speak!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
