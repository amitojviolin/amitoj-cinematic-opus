import violin from "@/assets/violin-closeup.jpg";
import stage from "@/assets/stage.jpg";
import hands from "@/assets/hands.jpg";
import bow from "@/assets/bow.jpg";
import crowd from "@/assets/crowd.jpg";
import studio from "@/assets/studio.jpg";

const perfs = [
  { img: stage, tag: "Live", title: "Cinematic Concert Set", meta: "Stage · 2024" },
  { img: violin, tag: "Classical", title: "Raga Yaman - Alaap", meta: "Hindustani · Studio" },
  { img: hands, tag: "Cinematic", title: "Pirates of the Caribbean", meta: "Cover · Orchestral" },
  { img: crowd, tag: "Bollywood", title: "Tum Hi Ho - Reimagined", meta: "Live · 2024" },
  { img: bow, tag: "Fusion", title: "East Meets West", meta: "Original · Single" },
  { img: studio, tag: "Production", title: "Studio Sessions Vol. I", meta: "Original · 2024" },
];

const categories = ["All", "Bollywood", "Classical", "Cinematic", "Live", "Fusion"];

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

        <div className="reveal mt-14 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                i === 0
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {perfs.map((p) => (
            <article
              key={p.title}
              className="reveal group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-sm hover-lift"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-gold/0 transition-colors duration-700 group-hover:bg-gold/10" />

              {/* play icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-700 group-hover:opacity-100">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold bg-background/40 backdrop-blur-md">
                  <span className="ml-1 text-2xl text-gold">▶</span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
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

        <div className="reveal mt-16 text-center">
          <a
            href="https://instagram.com/amitojviolin"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-gold transition-all hover:gap-5"
          >
            Watch more on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
