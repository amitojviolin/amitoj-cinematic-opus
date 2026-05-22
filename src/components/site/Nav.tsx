import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#performances", label: "Performances" },
  { href: "#stage", label: "Stage" },
  { href: "#services", label: "Bookings" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/60 border-b border-border" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-wider text-gold">AS</span>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Amitoj Singh
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-gold/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-primary-foreground md:inline-flex"
        >
          Book
        </a>
      </div>
    </header>
  );
}
