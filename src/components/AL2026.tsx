import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, FileText, Calendar } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { ui, WHATSAPP_LINK } from '../lib/content';

export default function AL2026() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="al2026" className="relative scroll-mt-20 overflow-hidden bg-cream py-24 text-ink-deep md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(2,0,102,0.18) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-6 select-none font-display text-[9rem] font-extrabold leading-none text-transparent md:text-[16rem]"
        style={{ WebkitTextStroke: '1.5px rgba(2,0,102,0.18)' }}
      >
        2026
      </span>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.al2026.kicker} title={ui.al2026.title} sub={ui.al2026.sub} light />

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14"
        >
          <div className="relative">
            <div className="absolute -inset-3 -rotate-1 rounded-[2rem] border border-ink/15 bg-white/50" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-ink/15 bg-white shadow-[0_40px_90px_-30px_rgba(2,0,102,0.45)]">
              <img
                src="/brand/cover_econ_unit8.jpg"
                alt="ECON Unit 08 Part II — රාජ්‍ය ආර්ථිකය tute cover mockup for 2026 A/L"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-ink-deep px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber shadow-lg">
              2026 A/L · Featured
            </span>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-electric">Economics · Unit 08 · Part II</p>
            <h3 className={`mt-3 font-display text-3xl font-extrabold leading-tight md:text-4xl ${si}`}>
              {lang === 'si' ? 'රාජ්‍ය ආර්ථිකය — Part II' : 'Public Economics — Part II'}
            </h3>
            <p className={`mt-5 text-[15px] leading-relaxed text-ink/70 ${si}`}>
              {lang === 'si'
                ? 'Cream කඩදාසිය මත gold-foil "ECON" අකුරු සහ රාජ්‍ය නායකයන්, මුදල් නෝට්ටු සහ ජන සමූහයක් එක්වූ collage එකක් — රජය හා ආර්ථිකය ගැන ඒකකයට vintage-editorial cover එකක්. 2026 A/L කණ්ඩායමට print-ready A4 ලෙස භාර දුන්නා.'
                : 'Cream paper, a gold-foil "ECON" wordmark and a collage of statesmen, bank notes and a marching crowd — a vintage-editorial cover for the unit on government and the economy. Delivered print-ready in A4 for the 2026 A/L batch.'}
            </p>

            <dl className="mt-7 grid gap-4 border-t border-ink/15 pt-6 text-sm">
              <div className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                <div>
                  <dt className={`text-[11px] font-bold uppercase tracking-[0.18em] text-ink/55 ${si}`}>{t(ui.work.client)}</dt>
                  <dd className={`mt-0.5 font-semibold ${si}`}>
                    {lang === 'si' ? "මහේශ් රංගජීව · B.Sc. (Hons) USJ · ගුරු, St. Sebastian's College" : "Mahesh Rangajeewa · B.Sc. (Hons) USJ · Teacher, St. Sebastian's College"}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                <div>
                  <dt className={`text-[11px] font-bold uppercase tracking-[0.18em] text-ink/55 ${si}`}>{t(ui.covers.format)}</dt>
                  <dd className="mt-0.5 font-semibold">{t(ui.covers.formatValue)}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                <div>
                  <dt className={`text-[11px] font-bold uppercase tracking-[0.18em] text-ink/55 ${si}`}>{t(ui.work.date)}</dt>
                  <dd className="mt-0.5 font-semibold">14 Aug 2026</dd>
                </div>
              </div>
            </dl>

            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hi The Habitz! I need a 2026 A/L tute cover for my class.')}`}
              target="_blank"
              rel="noreferrer"
              className={`mt-7 inline-flex items-center gap-2 rounded-full bg-ink-deep px-5 py-3 font-extrabold text-cream transition hover:bg-electric ${si}`}
            >
              <MessageCircle className="h-4 w-4" /> {t(ui.al2026.cta)}
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
