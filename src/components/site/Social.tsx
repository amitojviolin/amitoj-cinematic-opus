import stage from "@/assets/stage.jpg";
import hands from "@/assets/hands.jpg";
import bow from "@/assets/bow.jpg";
import crowd from "@/assets/crowd.jpg";

const reels = [
  { img: stage, label: "Live · Pirates Theme" },
  { img: hands, label: "Raga Yaman" },
  { img: bow, label: "Studio Sessions" },
  { img: crowd, label: "Stage · Fusion Set" },
];

export function Social() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div className="pointer-events-none absolute inset-0 ambient-gold opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-10 bg-gold" />
              On Instagram
            </p>
            <h2 className="font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              <span className="text-gradient-gold">@amitojviolin</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/75">
              New reels every week - covers, classical pieces, behind-the-scenes from
              stages and the studio.
            </p>
            <a
              href="https://instagram.com/amitojviolin"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/40 px-7 py-3 text-sm uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-primary-foreground"
            >
              Follow on Instagram →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {reels.map((r, i) => (
              <a
                key={i}
                href="https://instagram.com/amitojviolin"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-[9/14] overflow-hidden rounded-sm hover-lift"
                style={{ marginTop: i % 2 ? "2rem" : 0 }}
              >
                <img
                  src={r.img}
                  alt={r.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute left-3 top-3 rounded-full bg-background/60 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-gold backdrop-blur">
                  Reel
                </div>
                <p className="absolute bottom-3 left-3 right-3 text-xs uppercase tracking-[0.2em] text-foreground">
                  {r.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
