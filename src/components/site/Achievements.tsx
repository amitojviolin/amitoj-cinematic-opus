const items = [
  ["Prabhakar", "Prayag Sangeet Samiti - Hindustani Violin"],
  ["National", "Featured competition performances"],
  ["DU Circuit", "Multiple wins across Delhi University events"],
  ["Recognized", "Creative & musical accolades"],
];

export function Achievements() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/40 py-24">
      <div className="ambient-gold absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Recognition
            </p>
            <h2 className="font-display text-4xl text-foreground md:text-5xl">
              A quiet trail of <em className="text-gradient-gold">milestones</em>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Awards and titles matter - but the moments behind them matter more.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
          {items.map(([t, s]) => (
            <div
              key={t}
              className="reveal group bg-background p-8 transition-colors hover:bg-card md:p-10"
            >
              <p className="font-display text-3xl text-foreground transition-colors group-hover:text-gold md:text-4xl">
                {t}
              </p>
              <div className="mt-4 h-px w-10 bg-gold/40 transition-all group-hover:w-20" />
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
