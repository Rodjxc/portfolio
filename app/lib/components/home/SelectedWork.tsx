"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { withHttps } from "@/lib/utils";
import { works, type Project } from "../../data/works";
import { SectionHeading } from "../common/SectionHeading";
import { ProjectCard } from "../portfolio/ProjectCard";

const featured = works.filter((project) => project.featured);
const others = works.filter((project) => !project.featured);

type StackCardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

const StackCard = ({ project, index, total, progress }: StackCardProps) => {
  const targetScale = 1 - (total - index - 1) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const liveUrl = project.url ? withHttps(project.url) : undefined;

  return (
    <div
      className="flex items-start md:sticky md:h-[90vh] md:items-center"
      style={{ top: `calc(5rem + ${index * 28}px)` }}
    >
      <motion.article
        style={{ scale }}
        className="group relative flex w-full origin-top flex-col overflow-hidden rounded-[2rem] border border-border bg-card md:h-[72vh] md:max-h-[640px]"
      >
        <a
          href={liveUrl ?? `/project/${project.id}`}
          target={liveUrl ? "_blank" : undefined}
          rel={liveUrl ? "noopener noreferrer" : undefined}
          data-cursor-text="Visit site"
          className="relative order-first block aspect-[16/10] overflow-hidden md:absolute md:inset-0 md:aspect-auto"
        >
          <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            fill
            sizes="(min-width: 768px) 90vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </a>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-card from-25% via-card/85 via-45% to-transparent to-75% md:block"
        />
        <div className="relative flex flex-col justify-between gap-8 p-6 md:pointer-events-none md:h-full md:max-w-[45%] md:p-10">
          <div>
            <p className="eyebrow mb-6">
              <span className="text-pink">0{index + 1}</span> / {project.category}
            </p>
            <h3 className="heading-section">{project.name}</h3>
            <p className="body-lg mt-4 !text-secondary">{project.tagline}</p>
          </div>
          <div>
            <ul className="mb-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-5 py-3 backdrop-blur transition-colors hover:border-pink hover:text-pink"
              >
                Visit {project.name}
                <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export const SelectedWork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" className="page-container scroll-mt-24 py-16 md:py-24">
      <SectionHeading
        index="01"
        eyebrow="Selected work"
        title={
          <>
            Products I&apos;ve built, <span className="text-pink">used by real people.</span>
          </>
        }
      />
      <div ref={ref} className="flex flex-col gap-8 md:gap-0">
        {featured.map((project, index) => (
          <StackCard
            key={project.id}
            project={project}
            index={index}
            total={featured.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <p className="eyebrow mt-24 mb-10">More projects</p>
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {others.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={featured.length + index} />
        ))}
      </div>
    </section>
  );
};
