import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Calendar, User, Wrench, MessageCircle, Play, ArrowUpRight } from 'lucide-react';
import SectionHead from './SectionHead';
import PosterTile from './PosterTile';
import { useLang } from '../lib/i18n';
import { categories, projects, ui, WHATSAPP_LINK, type Category, type Project } from '../lib/content';

function formatDate(d: string, lang: 'en' | 'si') {
  const date = new Date(d + 'T00:00:00');
  return date.toLocaleDateString(lang === 'si' ? 'si-LK' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function Work() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [active, setActive] = useState<Project | null>(null);

  const list = useMemo(() => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)), [filter]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="work" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-electric/15 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead kicker={ui.work.kicker} title={ui.work.title} sub={ui.work.sub} />
        </div>

        <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
              filter === 'all' ? 'bg-cream text-ink' : 'border border-sky/25 text-cream/75 hover:border-sky hover:text-cream'
            } ${si}`}
          >
            {t(ui.work.all)} <span className="ml-1 opacity-60">{projects.length}</span>
          </button>
          {categories.map((c) => {
            const count = projects.filter((p) => p.category === c.id).length;
            return (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                  filter === c.id ? 'bg-cream text-ink' : 'border border-sky/25 text-cream/75 hover:border-sky hover:text-cream'
                } ${si}`}
              >
                {t(c.label)} <span className="ml-1 opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-8 grid grid-flow-dense auto-rows-[17rem] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[18rem] lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.button
                layout
                key={p.id}
                onClick={() => setActive(p)}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-sky/15 bg-ink/60 text-left shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] transition hover:-translate-y-1 hover:border-amber/60 ${
                  p.span === 'tall' ? 'row-span-2' : ''
                } ${p.span === 'wide' ? 'sm:col-span-2' : ''}`}
              >
                <div className="relative min-h-0 flex-1 overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.imageAlt ?? p.title.en}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    p.tile && <PosterTile tile={p.tile} />
                  )}
                  {p.category === 'video' && (
                    <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-ink-deep/80 px-2.5 py-1 text-[10px] font-bold text-cream backdrop-blur">
                      <Play className="h-3 w-3 fill-current" /> 9:16 REEL
                    </span>
                  )}
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-ink-deep opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="flex items-center gap-3 border-t border-sky/10 px-4 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber">
                      {t(categories.find((c) => c.id === p.category)!.label)}
                    </p>
                    <p className={`mt-0.5 truncate font-display text-sm font-bold leading-tight text-cream ${si}`}>{t(p.title)}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] text-cream/40">{p.date.slice(0, 7)}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-end justify-center bg-ink-deep/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-3xl border border-sky/20 bg-ink sm:rounded-3xl"
            >
              <div className="grid md:grid-cols-[1fr_1.1fr]">
                <div
                  className={`relative ${
                    active.image && active.category === 'video'
                      ? 'aspect-[9/16] max-h-[70vh]'
                      : active.image && (active.category === 'backdrops' || active.category === 'covers' || active.category === 'social' || active.category === 'illustration' || active.category === 'posters')
                        ? 'flex max-h-[80vh] items-center justify-center bg-ink-deep'
                        : 'aspect-[4/5] md:aspect-auto md:min-h-[32rem]'
                  }`}
                >
                  {active.image ? (
                    <img
                      src={active.image}
                      alt={active.imageAlt ?? active.title.en}
                      className={`h-full w-full ${active.category === 'backdrops' || active.category === 'covers' || active.category === 'social' || active.category === 'illustration' || active.category === 'posters' ? 'max-h-[80vh] object-contain' : 'object-cover'}`}
                    />
                  ) : (
                    active.tile && <PosterTile tile={active.tile} />
                  )}
                </div>
                <div className="relative p-7 md:p-10">
                  <button
                    onClick={() => setActive(null)}
                    aria-label={t(ui.work.close)}
                    className="absolute right-5 top-5 rounded-full border border-sky/25 p-2 text-cream/70 transition hover:bg-sky/10 hover:text-cream"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber">
                    {t(categories.find((c) => c.id === active.category)!.label)}
                  </p>
                  <h3 className={`mt-3 pr-12 font-display text-3xl font-extrabold leading-tight text-cream md:text-4xl ${si}`}>
                    {t(active.title)}
                  </h3>
                  <p className={`mt-5 text-[15px] leading-relaxed text-cream/75 ${si}`}>{t(active.desc)}</p>

                  <dl className="mt-7 grid gap-4 border-t border-sky/15 pt-6 text-sm sm:grid-cols-3">
                    <div>
                      <dt className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>
                        <User className="h-3.5 w-3.5" /> {t(ui.work.client)}
                      </dt>
                      <dd className={`mt-1.5 font-semibold text-cream ${si}`}>{t(active.client)}</dd>
                    </div>
                    <div>
                      <dt className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>
                        <Calendar className="h-3.5 w-3.5" /> {t(ui.work.date)}
                      </dt>
                      <dd className="mt-1.5 font-semibold text-cream">{formatDate(active.date, lang)}</dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70">
                        <Wrench className="h-3.5 w-3.5" /> Tools
                      </dt>
                      <dd className="mt-1.5 font-semibold text-cream">{active.tools.join(', ')}</dd>
                    </div>
                  </dl>

                  <div className="mt-7 rounded-2xl border border-sky/15 bg-ink-deep/60 p-5">
                    <p className={`text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>{t(ui.work.original)}</p>
                    <p className="si-text mt-2 whitespace-pre-line text-sm text-cream/75">{active.post}</p>
                  </div>

                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi The Habitz! I saw "${active.title.en}" and I'd like something similar.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-7 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 font-extrabold text-ink-deep transition hover:bg-cream ${si}`}
                  >
                    <MessageCircle className="h-4 w-4" /> {t(ui.work.similar)}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
