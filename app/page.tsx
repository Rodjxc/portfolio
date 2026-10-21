import { AboutMe } from "./lib/components/about/AboutMe";
import { Staff } from "./lib/components/about/Staff";
import { ContactCTA } from "./lib/components/common/ContactCTA";
import { Education } from "./lib/components/experience/Education";
import { WorkExperience } from "./lib/components/experience/WorkExperience";
import { Capabilities } from "./lib/components/home/Capabilities";
import { Hero } from "./lib/components/home/Hero";
import { Marquee } from "./lib/components/home/Marquee";
import { SelectedWork } from "./lib/components/home/SelectedWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <SelectedWork />
      <Capabilities />
      <div id="experience" className="page-container scroll-mt-20">
        <WorkExperience />
        <Education />
      </div>
      <div id="about" className="page-container scroll-mt-20">
        <AboutMe />
        <Staff />
      </div>
      <ContactCTA />
    </>
  );
}
