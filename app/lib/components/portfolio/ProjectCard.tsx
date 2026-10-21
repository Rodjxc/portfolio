"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Figma, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn, withHttps } from "@/lib/utils";
import type { Project } from "../../data/works";
import { ease } from "../common/Reveal";

type ProjectCardProps = {
  project: Project;
  index: number;
  large?: boolean;
};

export const ProjectCard = ({ project, index, large }: ProjectCardProps) => {
  const liveUrl = project.url ? withHttps(project.url) : undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay: (index % 2) * 0.1 }}
      className={cn("group flex flex-col", large && "md:col-span-2")}
    >
      <Link
        href={`/project/${project.id}`}
        data-cursor-text="Details"
        className={cn(
          "relative block overflow-hidden rounded-3xl border border-border bg-card",
          large ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[16/10]"
        )}
      >
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          fill
          sizes={large ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="body-sm absolute top-5 left-5 rounded-full bg-background/80 px-3 py-1 backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute right-5 bottom-5 flex size-12 translate-y-4 items-center justify-center rounded-full bg-pink text-[#141414] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-5" />
        </span>
      </Link>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="eyebrow mb-2">{project.category}</p>
          <h2 className="heading-h3">
            <Link href={`/project/${project.id}`} className="transition-colors hover:text-pink">
              {project.name}
            </Link>
          </h2>
          <p className="body-md mt-1 !text-secondary">{project.tagline}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name}`}
              className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-pink hover:text-pink"
            >
              <ArrowUpRight className="size-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-pink hover:text-pink"
            >
              <Github className="size-4" />
            </a>
          )}
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} in Figma`}
              className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-pink hover:text-pink"
            >
              <Figma className="size-4" />
            </a>
          )}
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};
