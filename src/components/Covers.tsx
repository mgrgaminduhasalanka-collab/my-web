import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, FileText } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { ui, WHATSAPP_LINK } from '../lib/content';
import type { Bi } from '../lib/i18n';

type Cover = {
  id: string;
  image: string;
  alt: string;
  title: Bi;
  unit: Bi;
  client: Bi;
  desc: Bi;
  accent: string;
};

const covers: Cover[] = [
  {
    id: 'unit3',
    image: '/brand/cover_bs_unit3.jpg',
    alt: 'BS Unit 3 — රජය හා ව්‍යාපාර tute cover mockup',
    title: { en: 'Government & Business', si: 'රජය හා ව්‍යාපාර' },
    unit: { en: 'Business Studies · Unit 03', si: 'Business Studies · Unit 03' },
    client: { en: 'Avindu Fernando · B.Sc. (Mgt) USJ', si: 'අවිඳු ප්‍රනාන්දු · B.Sc. (Mgt) USJ' },
    desc: {
      en: 'Sky-blue cover with the Sri Lankan parliament dome, glass towers and the national flag — a calm, civic palette for the unit on government and business.',
      si: 'ශ්‍රී ලංකා පාර්ලිමේන්තු ගොඩනැගිල්ල, glass towers සහ ජාතික ධජය සහිත ලා නිල් cover එකක් — රජය හා ව්‍යාපාර ඒකකයට සන්සුන් civic පැලට් එකක්.',
    },
    accent: '#3a86ff',
  },
  {
    id: 'unit2',
    image: '/brand/cover_mr_kottu.jpg',
    alt: 'Mr. Kottu — BS Unit 2 tute cover mockup',
    title: { en: 'Business Ethics & Social Responsibility', si: 'ව්‍යාපාර සමාජ වගකීම් හා ආචාර ධර්ම' },
    unit: { en: 'Business Studies · Unit 02', si: 'Business Studies · Unit 02' },
    client: { en: 'Avindu Fernando · BS පංතිය', si: 'අවිඳු ප්‍රනාන්දු · BS පංතිය' },
    desc: {
      en: '"Mr. Kottu" — a caricature of a kottu chef swinging his big spoon, on a hot orange gradient. A tute cover that makes students smile before they open it.',
      si: '"Mr. Kottu" — ලොකු හැඳි ගසන කොත්තු chef කෙනෙකුගේ caricature එකක්, උණුසුම් තැඹිලි gradient එකක් මත. විවෘත කරන්න කලින්ම හිනා ගෙනෙන tute cover එකක්.',
    },
    accent: '#ff6a1a',
  },
  {
    id: 'fifa',
    image: '/brand/cover_fifa.jpg',
    alt: 'FIFA Edition — We Are Ready 2026 Business Studies tute cover mockup',
    title: { en: 'FIFA Edition — "We Are Ready 26"', si: 'FIFA Edition — "We Are Ready 26"' },
    unit: { en: 'Business Studies · The Ground MCQ book', si: 'Business Studies · The Ground MCQ book' },
    client: { en: 'Avindu Fernando · St. Sebastian\'s College', si: 'අවිඳු ප්‍රනාන්දු · St. Sebastian\'s College' },
    desc: {
      en: 'World Cup 2026 themed MCQ book: lime-green pitch gradient, a halftone crowd of players and Neymar & Messi back-to-back under the FIFA trophy.',
      si: 'World Cup 2026 theme එකේ MCQ පොතක්: lime-green pitch gradient, halftone ක්‍රීඩක සමූහයක් සහ FIFA trophy යට Neymar සහ Messi.',
    },
    accent: '#7cc72a',
  },
];

export default function Covers() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="covers" className="relative scroll-mt-20 overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-electric/25 blur-[150px]" />
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.covers.kicker} title={ui.covers.title} sub={ui.covers.sub} />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {covers.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-sky/15 bg-ink-deep/70 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] transition hover:-translate-y-1 hover:border-amber/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="block aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg"
                  style={{ background: c.accent }}
                >
                  Cover {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className={`text-[11px] font-bold uppercase tracking-[0.2em] text-amber ${lang === 'si' ? 'si-text normal-case tracking-normal' : ''}`}>
                  {t(c.unit)}
                </p>
                <h3 className={`mt-2 font-display text-2xl font-extrabold leading-tight text-cream ${si}`}>{t(c.title)}</h3>
                <p className={`mt-3 flex-1 text-[15px] leading-relaxed text-cream/70 ${si}`}>{t(c.desc)}</p>

                <dl className="mt-6 grid gap-3 border-t border-sky/15 pt-5 text-sm">
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                    <div>
                      <dt className={`text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>{t(ui.work.client)}</dt>
                      <dd className={`mt-0.5 font-semibold text-cream ${si}`}>{t(c.client)}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                    <div>
                      <dt className={`text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>{t(ui.covers.format)}</dt>
                      <dd className="mt-0.5 font-semibold text-cream">{t(ui.covers.formatValue)}</dd>
                    </div>
                  </div>
                </dl>

                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi The Habitz! I saw the "${c.title.en}" tute cover and I'd like one for my class.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 font-extrabold text-ink-deep transition hover:bg-cream ${si}`}
                >
                  <MessageCircle className="h-4 w-4" /> {t(ui.covers.cta)}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
