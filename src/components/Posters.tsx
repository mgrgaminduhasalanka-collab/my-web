import { motion } from 'framer-motion';
import { MessageCircle, Clapperboard, User, FileText, Award } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { ui, WHATSAPP_LINK } from '../lib/content';

export default function Posters() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section
      id="posters"
      className="relative scroll-mt-20 overflow-hidden py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #01023a 0%, #0b1a6e 50%, #01023a 100%)' }}
    >
      {/* stage haze echoing the poster palette */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1d5cff]/25 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#ff7a1a]/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.posters.kicker} title={ui.posters.title} sub={ui.posters.sub} />

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] border border-amber/30" />
            <div className="absolute -inset-3 rotate-1 rounded-[2rem] border border-sky/20" />
            <div className="relative overflow-hidden rounded-[1.4rem] border border-sky/25 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.95)]">
              <img
                src="/brand/poster_giridevi.jpg"
                alt="ගිරිදේවි — drama poster with a golden Sinhala title, a traditional mask and three dancers in orange"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
            <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-ink-deep/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber backdrop-blur">
              <Clapperboard className="h-3.5 w-3.5" /> Drama poster
            </span>
          </figure>

          <div>
            <p className="font-script text-5xl leading-none text-amber md:text-6xl">Giridevi</p>
            <h3 className="si-text mt-2 font-display text-4xl font-black leading-tight text-cream md:text-5xl">ගිරිදේවි</h3>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-2 text-sm font-bold text-amber">
              <Award className="h-4 w-4" />
              <span className={si}>
                {lang === 'si' ? 'කොළඹ ජාත්‍යන්තර රංගකලා උළෙල · අවසන් වටය' : 'Colombo International Theatre Festival · Finalist'}
              </span>
            </div>

            <dl className="mt-8 grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-sky/15 bg-ink-deep/50 p-4">
                <dt className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>
                  <User className="h-3.5 w-3.5" /> {t(ui.posters.director)}
                </dt>
                <dd className={`mt-2 font-semibold text-cream ${si}`}>{t(ui.posters.directorName)}</dd>
              </div>
              <div className="rounded-2xl border border-sky/15 bg-ink-deep/50 p-4">
                <dt className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>
                  <User className="h-3.5 w-3.5" /> {t(ui.posters.cast)}
                </dt>
                <dd className={`mt-2 font-semibold text-cream ${si}`}>{t(ui.posters.castName)}</dd>
              </div>
              <div className="rounded-2xl border border-sky/15 bg-ink-deep/50 p-4">
                <dt className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>
                  <FileText className="h-3.5 w-3.5" /> {t(ui.posters.format)}
                </dt>
                <dd className={`mt-2 font-semibold text-cream ${si}`}>{t(ui.posters.formatValue)}</dd>
              </div>
            </dl>

            <div className="mt-8 border-t border-sky/15 pt-6">
              <p className={`text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>{t(ui.posters.concept)}</p>
              <p className={`mt-2 text-[15px] leading-relaxed text-cream/75 ${si}`}>{t(ui.posters.conceptText)}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-sky">
              {['ගීරිදේවී', 'designsbyhabitz', 'posterdesign', 'dramaposterdesign', 'photoshop', 'srilanka'].map((tag) => (
                <span key={tag} className="rounded-full border border-sky/20 px-2.5 py-1">#{tag}</span>
              ))}
            </div>

            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hi The Habitz! I saw the "Giridevi" poster and I need a poster for my production / event.')}`}
              target="_blank"
              rel="noreferrer"
              className={`mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 font-extrabold text-ink-deep transition hover:bg-cream ${si}`}
            >
              <MessageCircle className="h-4 w-4" /> {t(ui.posters.cta)}
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
