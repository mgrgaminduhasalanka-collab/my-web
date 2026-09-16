import { motion } from 'framer-motion';
import { Video, Image as ImageIcon, LayoutTemplate, Flag, PenTool, Palette, ArrowUpRight } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { services, ui, WHATSAPP_LINK, type Service } from '../lib/content';

const icons: Record<Service['icon'], typeof Video> = {
  video: Video,
  image: ImageIcon,
  layout: LayoutTemplate,
  flag: Flag,
  pen: PenTool,
  palette: Palette,
};

export default function Services() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.services.kicker} title={ui.services.title} sub={ui.services.sub} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <motion.a
                key={s.id}
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi The Habitz! I'm interested in: ${s.title.en}`)}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-sky/15 bg-ink/50 p-7 transition hover:-translate-y-1 hover:border-amber/50 hover:bg-ink"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-electric/25 blur-3xl transition group-hover:bg-amber/30" />
                <div className="mb-6 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/20 text-sky transition group-hover:bg-amber group-hover:text-ink-deep">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-xs text-sky/60">0{i + 1}</span>
                </div>
                <h3 className={`font-display text-2xl font-bold leading-tight text-cream ${si}`}>{t(s.title)}</h3>
                <p className={`mt-3 flex-1 text-[15px] leading-relaxed text-cream/65 ${si}`}>{t(s.desc)}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-sky/20 px-2.5 py-1 text-[11px] font-semibold text-sky">
                      {tag}
                    </span>
                  ))}
                  <ArrowUpRight className="ml-auto h-5 w-5 text-cream/40 transition group-hover:text-amber" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
