import violin from "@/assets/violin-closeup.jpg";
import stage from "@/assets/stage.jpg";
import hands from "@/assets/hands.jpg";
import bow from "@/assets/bow.jpg";
import crowd from "@/assets/crowd.jpg";
import studio from "@/assets/studio.jpg";
import portrait from "@/assets/portrait.jpg";

const tiles = [
  { src: portrait, span: "row-span-2", alt: "Portrait" },
  { src: stage, span: "", alt: "Stage" },
  { src: bow, span: "", alt: "Bow detail" },
  { src: hands, span: "row-span-2", alt: "Hands playing" },
  { src: crowd, span: "", alt: "Crowd" },
  { src: violin, span: "", alt: "Violin closeup" },
  { src: studio, span: "col-span-2", alt: "Studio" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-card/40 py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Gallery
            </p>
            <h2 className="font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
              Frames between <em className="text-gradient-gold">the notes</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Stage moments, studio quiet, the small geometries of a violin in motion.
          </p>
        </div>

        <div className="grid auto-rows-[16rem] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {tiles.map((t, i) => (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden rounded-sm ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-[1500ms] group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-30" />
              <figcaption className="absolute bottom-4 left-4 translate-y-2 text-xs uppercase tracking-[0.25em] text-foreground opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                {t.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
