const perfs = [
  { src: "/videos/tiny_desk.mp4", tag: "Live", title: "Tiny Desk", meta: "Live Session" },
  { src: "/videos/India_habitat_centre.mp4", tag: "Concert", title: "India Habitat Centre", meta: "Stage · Live" },
  { src: "/videos/The_piano_man.mp4", tag: "Live", title: "The Piano Man", meta: "Live · Venue" },
  { src: "/videos/shred_collab.mp4", tag: "Collab", title: "Shred Collab", meta: "Collaboration" },
  { src: "/videos/kaha_oc.mp4", tag: "Original", title: "Kaha", meta: "Original Composition" },
];

export function Performances() {
  return (
    <section id="performances" className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Featured Performances
            <span className="h-px w-10 bg-gold" />
          </p>
          <h2 className="font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
            Where every string <em className="text-gradient-gold">tells a story</em>
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            A curated reel of moments - from candlelit classical sets to roaring stage finales.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {perfs.map((p) => (
            <article
              key={p.title}
              className="reveal group relative aspect-[4/5] overflow-hidden rounded-sm hover-lift"
            >
              <video
                src={p.src}
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/40 to-transparent p-6">
                <span className="inline-block rounded-full border border-gold/40 bg-background/50 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold backdrop-blur">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-display text-2xl text-foreground">{p.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {p.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
