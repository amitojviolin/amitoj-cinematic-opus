import portrait from "@/assets/portrait.jpg";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32 md:py-44">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-24">
        <div className="reveal lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-sm bg-gradient-to-br from-gold/30 to-accent/20 blur-xl" />
            <img
              src={portrait}
              alt="Portrait of Amitoj Singh holding violin"
              loading="lazy"
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-sm object-cover grayscale-[0.15] contrast-[1.05]"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-sm border border-gold/40 glass-strong sm:block">
              <div className="flex h-full flex-col items-center justify-center">
                <p className="font-display text-3xl text-gold">12+</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                  Years
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal lg:col-span-7 lg:pt-12">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" />
            The Artist
          </p>
          <h2 className="font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
            A bow that speaks in <em className="text-gradient-gold not-italic">raga</em>,
            <br /> a soul tuned to cinema.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/75">
            <p>
              Trained for over twelve years in the lineage of Hindustani classical
              violin, Amitoj earned the <span className="text-gold">Prabhakar</span> from
              Prayag Sangeet Samiti - a foundation that still shapes every note he draws.
            </p>
            <p>
              From there, the journey opened outward. Bollywood ballads,
              western classical, sweeping cinematic themes like <em>Pirates of the Caribbean</em>,
              fusion sets on live stages, and original production work in the studio -
              each genre is a new dialect for the same emotional language.
            </p>
            <p className="text-foreground/60">
              The violin, in his hands, is less an instrument and more a storyteller.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              ["Hindustani", "Classical roots"],
              ["Cinematic", "Orchestral themes"],
              ["Bollywood", "Modern covers"],
              ["Fusion", "Live experiments"],
              ["Production", "Studio sessions"],
              ["Western", "Classical training"],
            ].map(([t, s]) => (
              <div key={t} className="border-l border-gold/30 pl-4">
                <p className="font-display text-xl text-foreground">{t}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
