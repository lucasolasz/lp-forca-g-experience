import { Hero } from "@/Pages/Hero";
import { Nav } from "@/Pages/Nav";
import { Repertorio } from "@/Pages/Repertorio";
import { Stats } from "@/Pages/Stats";
import { TheExpirience } from "@/Pages/TheExperience";
import { ThePilot } from "@/Pages/ThePilot";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-accent selection:text-white">
      <Nav />
      <Hero />
      <Stats />
      <TheExpirience />
      <ThePilot />
      <Repertorio />
    </div>
  );
}
