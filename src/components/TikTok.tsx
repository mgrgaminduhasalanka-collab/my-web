import { motion } from 'framer-motion';
import { MessageCircle, Play, Check, Music2, Heart, MessageSquare, Share2 } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { ui, WHATSAPP_LINK } from '../lib/content';
import type { Bi } from '../lib/i18n';

type Clip = { image: string; alt: string; caption: Bi; hook: string };

const clips: Clip[] = [
  {
    image: '/brand/video_reel_podcast.jpg',
    alt: 'The Brain Studio TikTok — the 4 personality types',
    caption: { en: 'The 4 personality types — which one are you?', si: 'පෞර්ෂ වර්ග 4 — ඔයා කුමන එකද?' },
    hook: 'පෞර්ෂ වර්ග 4ක් තියෙනවා',
  },
  {
    image: '/brand/video_reel_podcast_2.jpg',
    alt: 'The Brain Studio TikTok — how do you judge people?',
    caption: { en: 'Is this how you judge people?', si: 'ඔයත් මිනිස්සු මනින්නේ මෙහෙමද?' },
    hook: 'ඔයත් පුද්ගලයන්ගේ පෙරස මනින්නේ මෙහෙමද?',
  },
];

function TikTokMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.6 2.6 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}

export default function TikTok() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="tiktok" className="relative scroll-mt-20 overflow-hidden bg-[#050507] py-24 md:py-32">
      {/* TikTok cyan / pink glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-[#25F4EE]/15 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#FE2C55]/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.tiktok.kicker} title={ui.tiktok.title} sub={ui.tiktok.sub} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* phones */}
          <div className="flex items-end justify-center gap-4 sm:gap-6">
            {clips.map((c, i) => (
              <motion.figure
                key={c.image}
                initial={{ opacity: 0, y: 40, rotate: i === 0 ? -4 : 4 }}
                whileInView={{ opacity: 1, y: 0, rotate: i === 0 ? -3 : 3 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative w-[min(11rem,44vw)] shrink-0 sm:w-[13.5rem] ${i === 1 ? 'mt-10' : 'mb-10'}`}
              >
                <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#1a1a1f] bg-black shadow-[0_40px_80px_-30px_rgba(0,0,0,0.95)]">
                  <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#1a1a1f]" />
                  <img src={c.image} alt={c.alt} loading="lazy" className="block aspect-[9/16] w-full object-cover" />

                  {/* TikTok UI overlay */}
                  <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 text-white">
                    <img src="/brand/profile.jpg" alt="" className="h-8 w-8 rounded-full border-2 border-white" />
                    <Heart className="h-5 w-5 fill-[#FE2C55] text-[#FE2C55]" />
                    <MessageSquare className="h-5 w-5" />
                    <Share2 className="h-5 w-5" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 pr-12 pt-12 text-white">
                    <p className="text-[11px] font-bold">@thebrainstudio</p>
                    <p className={`si-text mt-1 line-clamp-2 text-[11px] leading-snug`}>{c.hook}</p>
                    <p className="mt-1.5 flex items-center gap-1 text-[10px] text-white/70">
                      <Music2 className="h-3 w-3" /> original sound · The Brain Studio
                    </p>
                  </div>
                  <span className="absolute left-3 top-8 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[9px] font-bold text-white backdrop-blur">
                    <TikTokMark className="h-3 w-3" /> TikTok
                  </span>
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition group-hover:opacity-100">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                </div>
                <figcaption className={`mt-3 text-center text-xs font-semibold text-cream/70 ${si}`}>{t(c.caption)}</figcaption>
              </motion.figure>
            ))}
          </div>

          {/* details */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1a1a1f]/80 px-4 py-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white ring-1 ring-white/15">
                <TikTokMark className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/50">{t(ui.tiktok.handle)}</p>
                <p className="font-display text-lg font-extrabold leading-none text-cream">The Brain Studio</p>
              </div>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[ui.tiktok.s1, ui.tiktok.s2, ui.tiktok.s3, ui.tiktok.s4].map((f, i) => (
                <li key={i} className={`flex items-start gap-3 text-[15px] text-cream/80 ${si}`}>
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#25F4EE]" />
                  {t(f)}
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-3 gap-3">
              {[
                [ui.tiktok.stat1, ui.tiktok.stat1l],
                [ui.tiktok.stat2, ui.tiktok.stat2l],
                [ui.tiktok.stat3, ui.tiktok.stat3l],
              ].map(([v, l], i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-[#1a1a1f]/80 p-4">
                  <dt className="font-display text-2xl font-extrabold text-cream">{t(v)}</dt>
                  <dd className={`mt-1 text-[11px] text-cream/55 ${si}`}>{t(l)}</dd>
                </div>
              ))}
            </dl>

            {/* mini timeline strip */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/brand/video_timeline.jpg"
                alt="Premiere Pro timeline of The Brain Studio TikTok edit"
                loading="lazy"
                className="block h-24 w-full object-cover object-bottom opacity-80"
              />
            </div>

            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hi The Habitz! I saw The Brain Studio TikTok clips and I need short-form edits for my podcast.')}`}
              target="_blank"
              rel="noreferrer"
              className={`mt-7 inline-flex items-center gap-2 rounded-full bg-[#FE2C55] px-5 py-3 font-extrabold text-white transition hover:bg-[#25F4EE] hover:text-black ${si}`}
            >
              <MessageCircle className="h-4 w-4" /> {t(ui.tiktok.cta)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
