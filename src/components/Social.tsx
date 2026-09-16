import { motion } from 'framer-motion';
import { MessageCircle, Users, Smartphone, Facebook } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../lib/i18n';
import { ui, WHATSAPP_LINK } from '../lib/content';
import type { Bi } from '../lib/i18n';

type SocialPost = {
  id: string;
  image: string;
  alt: string;
  ratio: string;
  title: Bi;
  brand: Bi;
  client: Bi;
  format: Bi;
  desc: Bi;
  accent: string;
};

const socialPosts: SocialPost[] = [
  {
    id: 'econ',
    image: '/brand/social_econ_2027.jpg',
    alt: '2027 Econ අගෝස්තු මාසය — Graduex Moratuwa class poster',
    ratio: 'aspect-[25/36]',
    title: { en: '2027 Econ — August plan', si: '2027 Econ — අගෝස්තු මාසය' },
    brand: { en: 'Class poster · Graduex Smart Educational Centre, Moratuwa', si: 'Class poster · Graduex Smart Educational Centre, මොරටුව' },
    client: { en: 'Shehan Fernando · BBA (Acc & Fin) University of Ruhuna', si: 'ෂෙහාන් ප්‍රනාන්දු · BBA (Acc & Fin) University of Ruhuna' },
    format: { en: '1500 × 2160 · portrait poster', si: '1500 × 2160 · portrait poster' },
    desc: {
      en: 'A kite-flying, Avurudu-sky theme for an August theory + revision timetable — Theory (Wed & Fri), MCQ+ essays (Sun), a "plan for August" sticker and a WhatsApp QR to join the class.',
      si: 'අගෝස්තු theory + revision timetable එකට සරුංගල් යවන අවුරුදු අහස theme එකක් — Theory (බදාදා/සිකුරාදා), MCQ+ රචනා (සඳුදා), "අගෝස්තුවේ PLAN එක" sticker එකක් සහ පන්තියට එකතු වෙන්න WhatsApp QR එකක්.',
    },
    accent: '#ff7a3d',
  },
  {
    id: 'kalusudu',
    image: '/brand/social_kalu_sudu_bs.jpg',
    alt: 'Kalu Sudu BS 2026 Revision — Facebook post',
    ratio: 'aspect-square',
    title: { en: 'Kalu Sudu BS — 2026 Revision', si: 'කළු සුදු BS — 2026 Revision' },
    brand: { en: 'Facebook post · Kalu Sudu BS', si: 'Facebook post · කළු සුදු BS' },
    client: { en: 'Thisaru Chamika & Achintha Arachchige · B.Sc. (Hons) USJ', si: 'තිසරු චාමික සහ අචින්ත ආරච්චිගේ · B.Sc. (Hons) USJ' },
    format: { en: '1080 × 1080 · square post', si: '1080 × 1080 · square post' },
    desc: {
      en: 'The brand is literally "black & white" — so the layout splits the frame, one tutor in black on white and the other in white on black. HRM starts 08 January at Nawinna & Rawathawatta; six-month syllabus cover class.',
      si: 'Brand එක "කළු සුදු" — ඒ නිසා frame එක දෙකට බෙදුවා: එක් ගුරුවරයෙක් සුදු මත කළු, අනෙක් කෙනා කළු මත සුදු. මානව සම්පත් කළමනාකරණය ජනවාරි 08 නැවින්න සහ රාවතාවත්ත; මාස 06න් syllabus එක cover කරන එකම පන්තිය.',
    },
    accent: '#1b1b1b',
  },
];

export default function Social() {
  const { t, lang } = useLang();
  const si = lang === 'si' ? 'si-text' : '';

  return (
    <section id="social" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-coral/15 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead kicker={ui.social.kicker} title={ui.social.title} sub={ui.social.sub} />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {socialPosts.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group grid overflow-hidden rounded-3xl border border-sky/15 bg-ink/60 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] transition hover:-translate-y-1 hover:border-amber/50 sm:grid-cols-[0.9fr_1.1fr]"
            >
              {/* phone-style frame */}
              <div className="relative flex items-center justify-center bg-ink-deep/80 p-6 sm:p-7">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #9aa3ff 1px, transparent 0)',
                    backgroundSize: '18px 18px',
                  }}
                />
                <div className="relative w-full max-w-[16rem] overflow-hidden rounded-[1.4rem] border border-sky/30 bg-ink-deep shadow-[0_25px_50px_-20px_rgba(0,0,0,0.9)]">
                  <div className="flex items-center gap-2 border-b border-sky/15 px-3 py-2">
                    <img src="/brand/profile.jpg" alt="" className="h-6 w-6 rounded-full" />
                    <span className="text-[11px] font-bold text-cream">The Habitz</span>
                    <Facebook className="ml-auto h-3.5 w-3.5 text-sky/70" />
                  </div>
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className={`block w-full object-cover ${p.ratio} transition duration-700 group-hover:scale-[1.03]`}
                  />
                </div>
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg"
                  style={{ background: p.accent }}
                >
                  Post {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-col p-6 md:p-8">
                <p className={`text-[11px] font-bold uppercase tracking-[0.2em] text-amber ${lang === 'si' ? 'si-text normal-case tracking-normal' : ''}`}>
                  {t(p.brand)}
                </p>
                <h3 className={`mt-2 font-display text-2xl font-extrabold leading-tight text-cream md:text-3xl ${si}`}>{t(p.title)}</h3>
                <p className={`mt-4 flex-1 text-[15px] leading-relaxed text-cream/70 ${si}`}>{t(p.desc)}</p>

                <dl className="mt-6 grid gap-3 border-t border-sky/15 pt-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                    <div>
                      <dt className={`text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>{t(ui.work.client)}</dt>
                      <dd className={`mt-0.5 font-semibold text-cream ${si}`}>{t(p.client)}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                    <div>
                      <dt className={`text-[11px] font-bold uppercase tracking-[0.18em] text-sky/70 ${si}`}>{t(ui.social.format)}</dt>
                      <dd className="mt-0.5 font-semibold text-cream">{t(p.format)}</dd>
                    </div>
                  </div>
                </dl>

                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi The Habitz! I saw the "${p.title.en}" post and I'd like a social media design for my class.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 font-extrabold text-ink-deep transition hover:bg-cream ${si}`}
                >
                  <MessageCircle className="h-4 w-4" /> {t(ui.social.cta)}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
