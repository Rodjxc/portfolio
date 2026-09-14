import { AboutMe } from "../lib/components/about/AboutMe";

export const metadata = {
  title: "About Me",
};

export default function AboutMePage() {
  return (
    <div className="page-container pb-16">
      <AboutMe />
    </div>
  );
}
