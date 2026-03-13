import { Depoimentos } from "@/pages/Depoimentos";
import { Faq } from "@/pages/Faq";
import { Footer } from "@/pages/Footer";
import { Hero } from "@/pages/Hero";
import { Nav } from "@/pages/Nav";
import { Pricing } from "@/pages/Pricing";
import { Repertorio } from "@/pages/Repertorio";
import { Stats } from "@/pages/Stats";
import { TheExpirience } from "@/pages/TheExperience";
import { ThePilot } from "@/pages/ThePilot";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-accent selection:text-white">
      <Nav />
      <Hero />
      <Stats />
      <TheExpirience />
      <ThePilot />
      <Repertorio />
      <Pricing />
      <Depoimentos />
      <Faq />
      <Footer />
    </div>
  );
}
