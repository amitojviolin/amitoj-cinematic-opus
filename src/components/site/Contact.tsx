export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[160px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="reveal mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
          <span className="h-px w-10 bg-gold" />
          Get In Touch
          <span className="h-px w-10 bg-gold" />
        </p>
        <h2 className="reveal font-display text-5xl leading-[1.05] text-foreground md:text-8xl">
          Let's create <br /> something <em className="text-gradient-gold">beautiful</em>
        </h2>
        <p className="reveal mt-8 text-lg leading-relaxed text-foreground/70">
          For bookings, collaborations or simply a conversation about music -
          <br className="hidden md:block" />
          the inbox is open.
        </p>

        <div className="reveal mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <ContactCard
            label="Instagram"
            value="@amitojviolin"
            href="https://instagram.com/amitojviolin"
          />
          <ContactCard
            label="Year"
            value="© 2026"
            href="#"
          />
          <ContactCard
            label="WhatsApp"
            value="Direct booking"
            href="https://wa.me/919999999999"
          />
        </div>

        <div className="reveal mt-16">
          <div className="inline-flex items-center gap-3 rounded-full bg-gold px-10 py-5 text-sm uppercase tracking-[0.25em] text-primary-foreground">
            © 2026
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group glass-strong rounded-sm p-8 text-left transition-all hover-lift"
    >
      <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{label}</p>
      <p className="mt-3 font-display text-2xl text-foreground transition-colors group-hover:text-gold">
        {value}
      </p>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-all group-hover:text-gold">
        Open →
      </p>
    </a>
  );
}
