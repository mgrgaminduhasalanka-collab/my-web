import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { useLang } from '../lib/i18n';
import { ui, tools, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../lib/content';

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-electric/30 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-72 h-[28rem] w-[28rem] rounded-full bg-coral/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div>
          <motion.p
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-sky/25 bg-ink/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky ${
              lang === 'si' ? 'si-text normal-case tracking-normal' : ''
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-amber" />
            {t(ui.hero.kicker)}
          </motion.p>

          <h1 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight">
            <motion.span
              custom={1}
              variants={fade}
              initial="hidden"
              animate="show"
              className="block text-[clamp(2rem,9vw,4.5rem)] text-cream/85"
            >
              {t(ui.hero.line1)}
            </motion.span>
            <motion.span
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className="sticker block text-[clamp(2.9rem,15.5vw,8.5rem)] text-cream"
            >
              {t(ui.hero.line2)}
            </motion.span>
            <motion.span
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="sticker block text-[clamp(2.9rem,15.5vw,8.5rem)] text-amber"
            >
              {t(ui.hero.line3)}
            </motion.span>
          </h1>

          <motion.p
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className={`mt-8 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg ${lang === 'si' ? 'si-text' : ''}`}
          >
            {t(ui.hero.sub)}
          </motion.p>

          <motion.div
            custom={5}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber px-6 py-3.5 font-extrabold text-ink-deep shadow-[0_12px_40px_-10px_rgba(255,179,0,0.6)] transition hover:-translate-y-0.5 hover:bg-cream sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              {t(ui.hero.cta1)}
              <span className="hidden rounded-full bg-ink-deep/10 px-2 py-0.5 font-mono text-xs sm:inline">{WHATSAPP_NUMBER}</span>
            </a>
            <a
              href="#work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-sky/30 px-6 py-3.5 font-bold text-cream transition hover:border-sky hover:bg-sky/10 sm:w-auto"
            >
              {t(ui.hero.cta2)}
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            custom={6}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-sky/15 pt-6"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky/70">{t(ui.hero.toolsLabel)}</p>
              <div className="mt-2 flex gap-1.5">
                {tools.map((tool) => (
                  <span
                    key={tool.id}
                    title={tool.name}
                    style={{ background: tool.color, color: tool.fg }}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-[11px] font-black shadow-md"
                  >
                    {tool.short}
                  </span>
                ))}
              </div>
            </div>
            <ul className={`flex flex-wrap gap-x-6 gap-y-1 text-sm text-cream/70 ${lang === 'si' ? 'si-text' : ''}`}>
              {[ui.hero.stat1, ui.hero.stat2, ui.hero.stat3].map((s, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                  {t(s)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="absolute -inset-3 -rotate-2 rounded-[2rem] border border-sky/20 bg-electric/10" />
          <div className="absolute -inset-3 rotate-2 rounded-[2rem] border border-amber/20" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-sky/25 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
            <img
              src="/brand/work_a.jpg"
              alt="The Habitz — I'm a designer & editor cover artwork"
              className="block h-auto w-full"
            />
          </div>

          <div className="animate-float absolute left-2 -top-6 rounded-2xl border border-sky/25 bg-ink-deep/90 px-4 py-3 shadow-xl backdrop-blur md:-left-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky/80">Facebook</p>
            <p className="font-script text-2xl leading-none text-cream">@thehabitz.lk</p>
          </div>

          <div
            className="animate-float absolute -bottom-6 right-2 rounded-2xl bg-amber px-4 py-3 text-ink-deep shadow-xl md:-right-8"
            style={{ animationDelay: '1.4s' }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Print · Social · Motion</p>
            <p className="font-display text-xl font-extrabold leading-none">Crafting visuals that speak!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
