import type { Tile } from '../lib/content';

export default function PosterTile({ tile }: { tile: Tile }) {
  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden p-6"
      style={{ background: tile.bg, color: tile.fg }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '18px 18px',
        }}
      />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full opacity-40 blur-3xl" style={{ background: tile.accent }} />

      <div className="relative flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em]">
        <span className="opacity-80">{tile.kicker}</span>
        <span className="font-script text-lg normal-case tracking-normal opacity-90">The Habitz</span>
      </div>

      <div className="relative">
        <p
          className={`font-display text-[2.1rem] font-extrabold leading-[1] tracking-tight md:text-[2.5rem] ${
            tile.sinhala ? 'si-text font-black leading-[1.15]' : ''
          }`}
        >
          {tile.headline}
        </p>
        {tile.sub && (
          <p className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold" style={{ background: tile.accent, color: '#0a0a1a' }}>
            {tile.sub}
          </p>
        )}
      </div>
    </div>
  );
}
