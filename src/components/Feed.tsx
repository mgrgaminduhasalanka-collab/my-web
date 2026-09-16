import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, ExternalLink } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { posts, ui, FACEBOOK_LINK } from '../lib/content';

function formatDate(d: string) {
  return new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Feed() {
  const { t, lang } = useLang();
  const [all, setAll] = useState(false);
  const shown = all ? posts : posts.slice(0, 6);

  return (
    <section id="feed" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead kicker={ui.feed.kicker} title={ui.feed.title} />
          <a
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex shrink-0 items-center gap-2 rounded-full border border-sky/30 px-5 py-3 font-bold text-cream transition hover:border-sky hover:bg-sky/10 ${
              lang === 'si' ? 'si-text' : ''
            }`}
          >
            <Facebook className="h-4 w-4" /> {t(ui.feed.view)} <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>

        <div className="mt-12 columns-1 gap-4 md:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {shown.map((p, i) => (
            <motion.article
              key={p.date + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="rounded-3xl border border-sky/15 bg-ink/50 p-6 transition hover:border-sky/40"
            >
              <header className="flex items-center gap-3">
                <img src="/brand/profile.jpg" alt="" className="h-9 w-9 rounded-full" />
                <div>
                  <p className="font-display text-sm font-bold text-cream">The Habitz</p>
                  <p className="text-xs text-cream/50">{formatDate(p.date)}</p>
                </div>
                <Facebook className="ml-auto h-4 w-4 text-sky/60" />
              </header>
              <p className="si-text mt-4 whitespace-pre-line text-[15px] text-cream/85">{p.text}</p>
              <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-xs font-semibold text-sky">
                {p.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </p>
            </motion.article>
          ))}
        </div>

        {posts.length > 6 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setAll((a) => !a)}
              className={`rounded-full border border-sky/30 px-6 py-3 font-bold text-cream transition hover:border-sky hover:bg-sky/10 ${
                lang === 'si' ? 'si-text' : ''
              }`}
            >
              {all ? t(ui.feed.less) : `${t(ui.feed.more)} (${posts.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
