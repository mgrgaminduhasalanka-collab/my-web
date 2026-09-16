import { motion } from 'framer-motion';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { steps, tools, ui } from '../lib/content';

export default function Process() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden bg-cream py-24 text-ink-deep md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(2,0,102,0.18) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.process.kicker} title={ui.process.title} light />

        <ol className="mt-14 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl border border-ink/10 bg-white/70 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-ink/40 hover:bg-white"
            >
              <span className="font-display text-5xl font-extrabold text-ink/15 transition group-hover:text-electric">{s.n}</span>
              <h3 className={`mt-4 font-display text-xl font-bold leading-tight ${si}`}>{t(s.title)}</h3>
              <p className={`mt-2 text-sm leading-relaxed text-ink/70 ${si}`}>{t(s.desc)}</p>
              {i < steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-amber text-xs font-black text-ink-deep md:flex">
                  →
                </span>
              )}
            </motion.li>
          ))}
        </ol>

        <div className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHead kicker={ui.tools.kicker} title={ui.tools.title} light />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white/80 p-3 transition hover:border-ink/40"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-black shadow-md"
                  style={{ background: tool.color, color: tool.fg }}
                >
                  {tool.short}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-bold">{tool.name}</p>
                  <p className={`truncate text-xs text-ink/60 ${si}`}>{t(tool.use)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
