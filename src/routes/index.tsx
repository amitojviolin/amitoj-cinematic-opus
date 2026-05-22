import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Performances } from "@/components/site/Performances";
import { Achievements } from "@/components/site/Achievements";
import { Social } from "@/components/site/Social";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amitoj Singh - Violinist · Performer · Music Producer" },
      {
        name: "description",
        content:
          "Amitoj Singh is a violinist blending Hindustani classical, Bollywood and cinematic music. Live performances, studio sessions and bookings.",
      },
      { property: "og:title", content: "Amitoj Singh - Cinematic Violinist" },
      {
        property: "og:description",
        content:
          "Blending emotion, storytelling and cinematic sound through the violin.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Performances />
        <Achievements />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
