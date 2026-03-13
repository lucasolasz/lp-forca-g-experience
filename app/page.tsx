import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Stats } from "@/components/Stats";
import { TheExpirience } from "@/components/TheExperience";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-accent selection:text-white">
      <Nav />
      <Hero />
      <Stats />
      <TheExpirience />
    </div>
  );
}
