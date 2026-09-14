import { works } from "../lib/data/works";
import { ProjectCard } from "../lib/components/portfolio/ProjectCard";

export const metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <div className="page-container pb-16">
      <h1 className="heading-display my-10 text-center">Portfolio</h1>
      <div className="flex flex-col gap-10">
        {works.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
