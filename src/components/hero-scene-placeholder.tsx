export function HeroScenePlaceholder() {
  return (
    <div aria-hidden="true" className="hidden lg:flex lg:justify-end">
      <div className="w-full max-w-[26rem]">
        <div className="relative aspect-[4/5] w-full border border-line bg-surface">
          <div className="technical-grid absolute inset-0" />

          <span className="absolute -left-px -top-px h-5 w-5 border-l border-t border-accent" />
          <span className="absolute -right-px -top-px h-5 w-5 border-r border-t border-line-strong" />
          <span className="absolute -bottom-px -left-px h-5 w-5 border-b border-l border-line-strong" />
          <span className="absolute -bottom-px -right-px h-5 w-5 border-b border-r border-line-strong" />

          <div className="absolute inset-x-6 top-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            <span>Fig. 01</span>
            <span>Reserved</span>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute left-1/2 top-1/2 h-px w-20 -translate-x-1/2 -translate-y-1/2 bg-line-strong" />
            <span className="absolute left-1/2 top-1/2 h-20 w-px -translate-x-1/2 -translate-y-1/2 bg-line-strong" />
            <span className="relative block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-accent" />
          </div>

          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
            <span className="font-mono text-[10px] uppercase leading-5 tracking-[0.22em] text-muted">
              Interactive scene
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              [ pending ]
            </span>
          </div>
        </div>

        <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Three.js / WebGL — not yet implemented
        </p>
      </div>
    </div>
  );
}
