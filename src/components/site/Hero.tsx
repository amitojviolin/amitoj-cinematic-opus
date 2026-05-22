import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden grain">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Amitoj Singh - violinist on stage under cinematic light"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/50" />
      </div>

      {/* ambient floating glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/15 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:pb-32">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold animate-fade-in">
            <span className="h-px w-10 bg-gold" />
            Blending emotion, storytelling and cinematic sound through the violin - from Hindustani classical roots to orchestral cinema.
          </p>
          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.95] tracking-tight text-foreground animate-fade-in">
            Amitoj
            <span className="block italic text-gradient-gold">Singh</span>
          </h1>
          <p className="mt-6 text-base uppercase tracking-[0.35em] text-muted-foreground animate-fade-in">
            Violinist · Performer · Music Producer
          </p>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/80 animate-fade-in">
            Blending emotion, storytelling and cinematic sound through the violin -
            from Hindustani classical roots to orchestral cinema.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-in">
            <a
              href="#performances"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:scale-[1.02] animate-pulse-glow"
            >
              Watch Performances
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-8 py-4 text-sm uppercase tracking-[0.2em] text-foreground transition-all hover:border-gold hover:text-gold"
            >
              Collaborate
            </a>
            <a
              href="#contact"
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-20 flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Scroll to listen
          </p>
          <div className="hidden gap-12 text-right md:flex">
            <Stat n="12+" label="Years of practice" />
            <Stat n="100+" label="Live performances" />
            <Stat n="5" label="Genres mastered" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-gold">{n}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
