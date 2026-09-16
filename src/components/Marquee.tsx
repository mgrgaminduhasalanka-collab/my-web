import { marqueeItems } from '../lib/content';

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="w-full max-w-[100vw] overflow-hidden py-2">
      <div className="relative -rotate-1 overflow-hidden border-y border-amber/40 bg-amber py-3 text-ink-deep">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {row.map((item, i) => (
            <span key={i} className="flex items-center font-display text-lg font-extrabold uppercase tracking-tight md:text-xl">
              <span className="px-6">{item}</span>
              <span className="text-coral">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
