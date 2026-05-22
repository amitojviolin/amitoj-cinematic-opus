const services = [
  { t: "Weddings", d: "Live violin sets that turn ceremonies into cinema.", i: "✦" },
  { t: "College Events", d: "High-energy stage performances built for crowds.", i: "✦" },
  { t: "Live Performances", d: "Solo & ensemble appearances for festivals and venues.", i: "✦" },
  { t: "Studio Sessions", d: "Session violin, layered strings, custom arrangements.", i: "✦" },
  { t: "Collaborations", d: "Cross-genre work with producers, bands and artists.", i: "✦" },
  { t: "Private Events", d: "Intimate acoustic sets for curated gatherings.", i: "✦" },
  { t: "Music Production", d: "Original compositions and full-track production.", i: "✦" },
  { t: "Corporate Events", d: "Refined cinematic ambience for premium brand experiences.", i: "✦" },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Bookings
            <span className="h-px w-10 bg-gold" />
          </p>
          <h2 className="font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
            Bring the <em className="text-gradient-gold">violin</em> to your moment
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.t}
              className="reveal group relative overflow-hidden bg-background p-8 transition-all hover:bg-card"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
              </div>
              <p className="text-2xl text-gold/60 transition-all group-hover:text-gold">{s.i}</p>
              <h3 className="mt-6 font-display text-2xl text-foreground">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold opacity-0 transition-all group-hover:opacity-100">
                Enquire →
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-[0_0_60px] hover:shadow-gold/40"
          >
            Request a booking →
          </a>
        </div>
      </div>
    </section>
  );
}
