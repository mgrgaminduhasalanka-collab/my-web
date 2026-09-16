import { motion } from 'framer-motion';
import { MessageCircle, Play, Film, Check, Scissors } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { ui, WHATSAPP_LINK } from '../lib/content';
import type { Bi } from '../lib/i18n';

type Reel = { image: string; alt: string; title: Bi; meta: Bi; ratio: string; badge: string };

const reels: Reel[] = [
  {
    image: '/brand/video_reel_podcast.jpg',
    alt: 'Podcast reel — woman at the mic with Sinhala captions',
    title: { en: 'The Brain Studio · personality types', si: 'The Brain Studio · පෞර්ෂ වර්ග' },
    meta: { en: 'TikTok 9:16 · captions · Lumetri', si: 'TikTok 9:16 · captions · Lumetri' },
    ratio: 'aspect-[9/16]',
    badge: 'TIKTOK',
  },
  {
    image: '/brand/video_reel_podcast_2.jpg',
    alt: 'Podcast reel — ඔයත් පුද්ගලයන්ගේ පෙරස මනින්නේ මෙහෙමද?',
    title: { en: 'The Brain Studio · how do you judge people?', si: 'The Brain Studio · මනින්නේ මෙහෙමද?' },
    meta: { en: 'TikTok 9:16 · hook + caption cut', si: 'TikTok 9:16 · hook + caption cut' },
    ratio: 'aspect-[9/16]',
    badge: 'TIKTOK',
  },
  {
    image: '/brand/work_b.jpg',
    alt: 'Dannawada Mawa vertical edit frame',
    title: { en: 'Dannawada Mawa · vertical', si: 'දන්නවද මාව · vertical' },
    meta: { en: 'Slow-mo · colour grade', si: 'Slow-mo · colour grade' },
    ratio: 'aspect-[9/16]',
    badge: 'MUSIC',
  },
  {
    image: '/brand/work_c.jpg',
    alt: 'Api Aye Hamu Nowena vertical edit frame',
    title: { en: 'Api Aye Hamu Nowena · vertical', si: 'අපි ආයේ හමු නොවෙන · vertical' },
    meta: { en: 'Slow-mo · magenta grade', si: 'Slow-mo · magenta grade' },
    ratio: 'aspect-[9/16]',
    badge: 'MUSIC',
  },
  {
    image: '/brand/video_reel_theatre.jpg',
    alt: 'Theatre reel frame — New Theatre, 27th',
    title: { en: 'Theatre promo · New Theatre 27', si: 'Theatre promo · New Theatre 27' },
    meta: { en: '9:16 · promo cut', si: '9:16 · promo cut' },
    ratio: 'aspect-[9/16]',
    badge: 'PROMO',
  },
  {
    image: '/brand/video_cover_tile.jpg',
    alt: 'New Cover Page — tute cover showcase reveal',
    title: { en: 'Cover reveal · New Cover Page', si: 'Cover reveal · New Cover Page' },
    meta: { en: 'Motion graphics · A/L 2026', si: 'Motion graphics · A/L 2026' },
    ratio: 'aspect-[7/6]',
    badge: 'REVEAL',
  },
  {
    image: '/brand/cover_econ_unit8.jpg',
    alt: 'ECON Unit 08 cover mockup — reveal clip',
    title: { en: 'Cover reveal · ECON Unit 08', si: 'Cover reveal · ECON Unit 08' },
    meta: { en: 'Mockup animation · 5:4', si: 'Mockup animation · 5:4' },
    ratio: 'aspect-[5/4]',
    badge: 'REVEAL',
  },
];

export default function VideoEditing() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="video" className="relative scroll-mt-20 overflow-hidden bg-[#0d0d12] py-24 md:py-32">
      {/* editor-style backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(154,163,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(154,163,255,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 40px',
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#7c3aed]/25 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#0891b2]/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.video.kicker} title={ui.video.title} sub={ui.video.sub} />

        {/* timeline hero */}
        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-3xl border border-sky/20 bg-[#1a1a1f] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.95)]"
        >
          {/* faux window chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded text-[10px] font-black" style={{ background: '#00005b', color: '#e79cff' }}>
              Pr
            </span>
            <span className="truncate font-mono text-xs text-cream/60">The Brain Studio.prproj — TikTok / Reels vertical 9:16 (1080×1920)</span>
            <span className="ml-auto hidden items-center gap-1.5 rounded-full bg-[#e79cff]/15 px-2.5 py-1 text-[10px] font-bold text-[#e79cff] sm:flex">
              <Scissors className="h-3 w-3" /> 26 items · 4 video · 4 audio tracks
            </span>
          </div>
          <div className="grid lg:grid-cols-[1.55fr_0.45fr]">
            <img
              src="/brand/video_timeline.jpg"
              alt="Adobe Premiere Pro timeline of a vertical podcast reel with Sinhala captions"
              loading="lazy"
              className="block h-full w-full object-cover"
            />
            <figcaption className="flex flex-col justify-between border-t border-white/10 p-6 lg:border-l lg:border-t-0">
              <div>
                <p className={`text-[11px] font-bold uppercase tracking-[0.2em] text-[#e79cff] ${lang === 'si' ? 'si-text normal-case tracking-normal' : ''}`}>
                  {t(ui.video.timelineLabel)}
                </p>
                <h3 className={`mt-2 font-display text-xl font-extrabold leading-tight text-cream ${si}`}>{t(ui.video.timelineTitle)}</h3>
                <p className={`mt-3 text-sm leading-relaxed text-cream/65 ${si}`}>{t(ui.video.timelineDesc)}</p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {['Premiere Pro', 'Lumetri Color', '1080×1920', 'Sinhala captions', 'Jump-cuts'].map((tag) => (
                  <li key={tag} className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-semibold text-cream/70">
                    {tag}
                  </li>
                ))}
              </ul>
            </figcaption>
          </div>
        </motion.figure>

        {/* reels strip */}
        <div className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <p className={`text-[11px] font-bold uppercase tracking-[0.2em] text-sky/70 ${lang === 'si' ? 'si-text normal-case tracking-normal' : ''}`}>
              {t(ui.video.reelsLabel)}
            </p>
            <p className="font-mono text-[11px] text-cream/40">{reels.length} clips · swipe →</p>
          </div>
          <div className="no-scrollbar -mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8">
            {reels.map((r, i) => (
              <motion.figure
                key={r.image}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group flex w-40 shrink-0 snap-start flex-col sm:w-48 lg:w-52"
              >
                  <div className="relative flex aspect-[9/16] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1f] shadow-[0_25px_50px_-25px_rgba(0,0,0,0.9)]">
                    <img
                      src={r.image}
                      alt={r.alt}
                      loading="lazy"
                      className={`block w-full object-cover transition duration-700 group-hover:scale-[1.04] ${r.ratio === 'aspect-[9/16]' ? 'h-full' : ''}`}
                    />
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-ink-deep/85 px-2 py-1 text-[9px] font-bold tracking-[0.15em] text-amber backdrop-blur">
                      {r.badge}
                    </span>
                    <span className="absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-ink-deep transition group-hover:bg-amber">
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </span>
                  </div>
                <figcaption className="mt-3">
                  <p className={`text-sm font-bold leading-tight text-cream ${si}`}>{t(r.title)}</p>
                  <p className="mt-0.5 text-[11px] text-cream/50">{t(r.meta)}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* features */}
        <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-[#1a1a1f]/80 p-7 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: '#00005b', color: '#e79cff' }}>
            <Film className="h-6 w-6" />
          </span>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {[ui.video.f1, ui.video.f2, ui.video.f3, ui.video.f4].map((f, i) => (
              <li key={i} className={`flex items-start gap-3 text-[15px] text-cream/80 ${si}`}>
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                {t(f)}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex gap-1.5">
              {[
                { s: 'Pr', bg: '#00005b', fg: '#e79cff' },
                { s: 'Ae', bg: '#00005b', fg: '#9999ff' },
                { s: 'CC', bg: '#0f0f0f', fg: '#ffffff' },
              ].map((tl) => (
                <span key={tl.s} style={{ background: tl.bg, color: tl.fg }} className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-black shadow-md">
                  {tl.s}
                </span>
              ))}
            </div>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hi The Habitz! I have footage that needs editing into a reel.')}`}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-amber px-5 py-3 font-extrabold text-ink-deep transition hover:bg-cream ${si}`}
            >
              <MessageCircle className="h-4 w-4" /> {t(ui.video.cta)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
