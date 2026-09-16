import { motion } from 'framer-motion';
import type { Bi } from '../lib/i18n';
import { useLang } from '../lib/i18n';

type Props = { kicker: Bi; title: Bi; sub?: Bi; align?: 'left' | 'center'; light?: boolean };

export default function SectionHead({ kicker, title, sub, align = 'left', light = false }: Props) {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${light ? 'text-ink/60' : 'text-amber'} ${
          lang === 'si' ? 'si-text normal-case tracking-normal' : ''
        }`}
      >
        {t(kicker)}
      </p>
      <h2
        className={`font-display text-[clamp(1.9rem,7.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight ${
          light ? 'text-ink-deep' : 'text-cream'
        } ${si}`}
      >
        {t(title)}
      </h2>
      {sub && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-ink/75' : 'text-cream/80'} ${si}`}>{t(sub)}</p>
      )}
    </motion.div>
  );
}
