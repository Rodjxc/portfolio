import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Figma, Github } from "lucide-react";
import { withHttps } from "@/lib/utils";
import type { Project } from "../../data/works";

export const ProjectCard = ({ project }: { project: Project }) => {
  const liveUrl = project.url ? withHttps(project.url) : undefined;

  return (
    <article className="flex flex-col border-b border-r border-primary md:flex-row">
      <div className="max-h-[450px] w-full overflow-hidden md:w-1/2">
        <Link
          href={liveUrl || `/project/${project.id}`}
          target={liveUrl ? "_blank" : undefined}
          rel={liveUrl ? "noopener noreferrer" : undefined}
          className="block h-full"
        >
          <Image
            src={`/img/${project.id}.jpg`}
            alt={project.name}
            width={900}
            height={560}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-6 text-center md:w-1/2">
        <h2 className="heading-h3 text-pink">{project.name}</h2>
        <p className="heading-h5 mt-3 mb-4 text-pink">{project.technologies}</p>
        <p className="body-md mx-auto mb-6 max-w-[80%]">{project.description}</p>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-8">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link body-md gap-2"
            >
              <ArrowUpRight className="size-5" />
              See live
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link body-md gap-2"
            >
              <Github className="size-5" />
              GitHub
            </Link>
          )}
          {project.figma && (
            <Link
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link body-md gap-2"
            >
              <Figma className="size-5" />
              See in Figma
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
