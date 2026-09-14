import { BackgroundBeams } from "./lib/components/home/BackgroundBeams";
import { Hero } from "./lib/components/home/Hero";
import { Staff } from "./lib/components/home/Staff";
import { TechStack } from "./lib/components/home/TechStack";

export default function HomePage() {
  return (
    <div className="relative bg-background">
      <Hero />
      <TechStack />
      <BackgroundBeams className="pointer-events-none opacity-70" />
      <Staff />
    </div>
  );
}
