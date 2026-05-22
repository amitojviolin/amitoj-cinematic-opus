export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl text-gold">AS</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Amitoj Singh · Violinist
          </span>
        </div>
        <div className="divider-gold hidden h-px w-32 md:block" />
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} · Crafted with sound & light
        </p>
      </div>
    </footer>
  );
}
