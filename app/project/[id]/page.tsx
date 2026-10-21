import { ArrowLeft, ArrowUpRight, Figma, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, works } from "../../lib/data/works";
import { Reveal } from "../../lib/components/common/Reveal";
import { withHttps } from "@/lib/utils";

export function generateStaticParams() {
  return works.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  return {
    title: project?.name ?? "Project",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const liveUrl = project.url ? withHttps(project.url) : undefined;
  const index = works.findIndex((work) => work.id === project.id);
  const next = works[(index + 1) % works.length];

  const links = [
    { href: liveUrl, label: "Visit live site", icon: ArrowUpRight },
    { href: project.github, label: "GitHub", icon: Github },
    { href: project.figma, label: "Figma", icon: Figma },
  ].filter((link): link is typeof link & { href: string } => !!link.href);

  return (
    <article className="page-container py-10 md:py-16">
      <Link href="/#work" className="nav-link body-sm mb-10 gap-2">
        <ArrowLeft className="size-4" />
        All work
      </Link>

      <Reveal>
        <p className="eyebrow mb-6">{project.category}</p>
        <h1 className="heading-hero">{project.name}</h1>
        <p className="heading-h3 mt-4 max-w-3xl !text-secondary">{project.tagline}</p>
      </Reveal>

      <Reveal delay={0.1} className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-card">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="eyebrow mb-4">Stack</p>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-lg">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 transition-colors hover:border-pink hover:text-pink"
              >
                {label}
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <Link
        href={`/project/${next.id}`}
        className="group mt-24 flex items-center justify-between gap-6 border-t border-border pt-10"
      >
        <div>
          <p className="eyebrow mb-2">Next project</p>
          <p className="heading-section transition-colors group-hover:text-pink">{next.name}</p>
        </div>
        <ArrowUpRight className="size-10 shrink-0 text-secondary transition-all group-hover:rotate-45 group-hover:text-pink" />
      </Link>
    </article>
  );
}
