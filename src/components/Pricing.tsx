import { motion } from 'framer-motion';
import { MessageCircle, Check, Star, Tag } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { ui, priceList, bundles, WHATSAPP_LINK } from '../lib/content';

const lkr = (n: number) => `Rs. ${n.toLocaleString('en-LK')}`;

export default function Pricing() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="pricing" className="relative scroll-mt-20 overflow-hidden bg-ink py-20 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-0 h-[26rem] w-[26rem] rounded-full bg-amber/15 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-electric/25 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.pricing.kicker} title={ui.pricing.title} sub={ui.pricing.sub} />

        {/* packages */}
        <p className={`mt-12 text-[11px] font-bold uppercase tracking-[0.2em] text-sky/80 ${lang === 'si' ? 'si-text normal-case tracking-normal' : ''}`}>
          {t(ui.pricing.bundles)}
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {bundles.map((b, i) => (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-3xl border p-6 md:p-7 ${
                b.popular
                  ? 'border-amber bg-gradient-to-b from-amber/15 to-ink-deep shadow-[0_30px_70px_-30px_rgba(255,179,0,0.5)] md:-translate-y-2'
                  : 'border-sky/20 bg-ink-deep/70'
              }`}
            >
              {b.popular && (
                <span className={`absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-amber px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-ink-deep ${lang === 'si' ? 'si-text normal-case tracking-normal' : ''}`}>
                  <Star className="h-3 w-3 fill-current" /> {t(ui.pricing.popular)}
                </span>
              )}
              <h3 className={`font-display text-2xl font-extrabold text-cream ${si}`}>{t(b.name)}</h3>
              <p className={`mt-1 text-sm text-cream/70 ${si}`}>{t(b.tagline)}</p>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-3xl font-extrabold text-amber sm:text-4xl">{lkr(b.price)}</span>
                <span className={`text-xs font-semibold text-cream/60 ${si}`}>{b.monthly ? t(ui.pricing.perMonth) : t(ui.pricing.oneOff)}</span>
              </p>
              <p className={`mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>{t(ui.pricing.includes)}</p>
              <ul className="mt-2 flex-1 space-y-2">
                {b.features.map((f, j) => (
                  <li key={j} className={`flex items-start gap-2.5 text-sm text-cream/85 ${si}`}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" /> {t(f)}
                  </li>
                ))}
              </ul>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi The Habitz! I'd like the "${b.name.en}" package (${lkr(b.price)}${b.monthly ? '/month' : ''}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-extrabold transition ${
                  b.popular ? 'bg-amber text-ink-deep hover:bg-cream' : 'border border-sky/40 text-cream hover:border-amber hover:text-amber'
                } ${si}`}
              >
                <MessageCircle className="h-4 w-4" /> {t(ui.pricing.choose)}
              </a>
            </motion.article>
          ))}
        </div>

        {/* à la carte */}
        <p className={`mt-14 text-[11px] font-bold uppercase tracking-[0.2em] text-sky/80 ${lang === 'si' ? 'si-text normal-case tracking-normal' : ''}`}>
          {t(ui.pricing.alacarte)}
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {priceList.map((g, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-sky/20 bg-ink-deep/70 p-5 md:p-6"
            >
              <h3 className={`flex items-center gap-2 font-display text-lg font-extrabold text-cream ${si}`}>
                <Tag className="h-4 w-4 text-amber" /> {t(g.group)}
              </h3>
              <ul className="mt-4 divide-y divide-sky/10">
                {g.items.map((it, ii) => (
                  <li key={ii} className="flex items-start justify-between gap-4 py-3">
                    <div className="min-w-0">
                      <p className={`text-sm font-semibold leading-snug text-cream ${si}`}>{t(it.name)}</p>
                      <p className={`mt-0.5 text-xs text-cream/60 ${si}`}>{t(it.detail)}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className={`text-[10px] font-semibold uppercase tracking-wider text-cream/50 ${si}`}>{t(ui.pricing.from)}</p>
                      <p className="font-display text-base font-extrabold text-amber">{lkr(it.price)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-sky/15 bg-ink-deep/60 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className={`text-xs leading-relaxed text-cream/70 ${si}`}>{t(ui.pricing.note)}</p>
          <a
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hi The Habitz! Could I get a quote for a design job?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-amber px-5 py-3 font-extrabold text-ink-deep transition hover:bg-cream ${si}`}
          >
            <MessageCircle className="h-4 w-4" /> {t(ui.pricing.quote)}
          </a>
        </div>
      </div>
    </section>
  );
}
