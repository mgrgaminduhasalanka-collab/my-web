import { motion } from 'framer-motion';
import { MessageCircle, Ruler, Building2 } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { ui, WHATSAPP_LINK } from '../lib/content';
import type { Bi } from '../lib/i18n';

type Backdrop = {
  id: string;
  image: string;
  alt: string;
  event: Bi;
  client: Bi;
  meta: Bi;
  desc: Bi;
  date: string;
};

const backdrops: Backdrop[] = [
  {
    id: 'avurudu',
    image: '/brand/boc_avurudu.jpg',
    alt: 'Bank of Ceylon Corporate Branch — Avurudu Udawa 2026 stage backdrop',
    event: { en: 'Avurudu Udawa 2026', si: 'අවුරුදු උදාව 2026' },
    client: { en: 'Bank of Ceylon · Corporate Branch, Head Office', si: 'ලංකා බැංකුව · ආයතනික ශාඛාව, ප්‍රධාන කාර්යාලය' },
    meta: { en: 'Sinhala & Tamil New Year celebration · stage backdrop', si: 'සිංහල හා දෙමළ අලුත් අවුරුද්ද · වේදිකා backdrop' },
    desc: {
      en: 'Traditional Avurudu motifs — the kolam-drawing girl, brass oil lamp, kiribath and sweetmeats, a rooster on the paddy fields — arranged around the BOC 2025 Sports & Welfare Society branding.',
      si: 'කොළම් අඳින තරුණිය, පහන, කිරිබත් සහ කැවිලි, කුඹුරු කෙත් — සාම්ප්‍රදායික අවුරුදු රූප BOC 2025 ක්‍රීඩා හා සුබසාධක සංගම branding වටා සකසා ඇත.',
    },
    date: '2026-07-12',
  },
  {
    id: 'batch',
    image: '/brand/boc_batch.jpg',
    alt: 'Bank of Ceylon 2018 Batch Get-Together event backdrop',
    event: { en: '2018 Batch Get-Together', si: '2018 Batch Get-Together' },
    client: { en: 'Bank of Ceylon · 2018 batch', si: 'ලංකා බැංකුව · 2018 batch' },
    meta: { en: '8ft × 6ft event backdrop · with height scale', si: '8ft × 6ft event backdrop · උස මිනුම් සහිත' },
    desc: {
      en: 'A bold Bank of Ceylon yellow-and-black backdrop with the BOC badge, a photo-height scale down the side and ribbon-style typography — built to look sharp in every group photo.',
      si: 'ලංකා බැංකු කහ සහ කළු පැලට් එකක, BOC badge, පැත්තෙන් photo height scale එකක් සහ ribbon typography — හැම group photo එකකම ලස්සනට පෙනෙන්න හැදුවා.',
    },
    date: '2026-08-08',
  },
];

export default function Backdrops() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="backdrops" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-amber/15 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.backdrops.kicker} title={ui.backdrops.title} sub={ui.backdrops.sub} />

        <div className="mt-14 space-y-20">
          {backdrops.map((b, i) => (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative">
                <div className={`absolute -inset-3 rounded-[2rem] border border-amber/25 ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`} />
                <div className="relative overflow-hidden rounded-[1.6rem] border border-sky/25 bg-ink-deep shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
                  <img src={b.image} alt={b.alt} className="block h-auto w-full" loading="lazy" />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-ink-deep/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber backdrop-blur">
                  Backdrop {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                <p className={`text-[11px] font-bold uppercase tracking-[0.22em] text-amber ${lang === 'si' ? 'si-text normal-case tracking-normal' : ''}`}>
                  {t(b.meta)}
                </p>
                <h3 className={`mt-3 font-display text-3xl font-extrabold leading-tight text-cream md:text-4xl ${si}`}>{t(b.event)}</h3>
                <p className={`mt-5 text-[15px] leading-relaxed text-cream/70 ${si}`}>{t(b.desc)}</p>

                <dl className="mt-7 grid gap-4 border-t border-sky/15 pt-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                    <div>
                      <dt className={`text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>{t(ui.work.client)}</dt>
                      <dd className={`mt-1 font-semibold text-cream ${si}`}>{t(b.client)}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                    <div>
                      <dt className={`text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>{t(ui.backdrops.format)}</dt>
                      <dd className="mt-1 font-semibold text-cream">{t(ui.backdrops.formatValue)}</dd>
                    </div>
                  </div>
                </dl>

                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi The Habitz! I saw the "${b.event.en}" backdrop and I need one for my event.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-7 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 font-extrabold text-ink-deep transition hover:bg-cream ${si}`}
                >
                  <MessageCircle className="h-4 w-4" /> {t(ui.backdrops.cta)}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
