const events = [
  { year: "2024", title: "Darya Band", desc: "Lead violinist for collaborative live sets blending Hindustani textures with contemporary band arrangements." },
  { year: "2023", title: "Black Pearl Band", desc: "Featured strings across stage performances and recorded original compositions." },
  { year: "2023", title: "Delhi University — National Stage", desc: "Multiple appearances across DU's flagship cultural circuit and inter-college festivals." },
  { year: "2022", title: "Cinematic Live Showcase", desc: "Orchestral re-interpretations of film themes performed for live audiences." },
  { year: "Ongoing", title: "Creative Collaborations", desc: "Studio sessions, fusion experiments and cross-genre artistic projects with emerging musicians." },
];

export function Stage() {
  return (
    <section id="stage" className="relative overflow-hidden py-32 md:py-44">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-20 max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Stage & Collaborations
          </p>
          <h2 className="font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
            Bands, stages, and the people <em className="text-gradient-gold">who make the sound</em>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:left-1/2" />
          <div className="space-y-12">
            {events.map((e, i) => (
              <div
                key={e.title}
                className={`reveal relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`md:${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <p className="font-display text-4xl text-gold">{e.year}</p>
                </div>
                <div className="glass-strong rounded-sm p-6 hover-lift">
                  <h3 className="font-display text-2xl text-foreground">{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {e.desc}
                  </p>
                </div>
                {/* node */}
                <div className="absolute left-4 top-4 hidden h-3 w-3 -translate-x-[5px] rounded-full bg-gold shadow-[0_0_20px] shadow-gold md:left-1/2 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
