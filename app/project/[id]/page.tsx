import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, works } from "../../lib/data/works";
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

  return (
    <article className="page-container mx-auto max-w-xl py-10">
      <div className="mb-6 h-[300px] overflow-hidden shadow-[0_0_20px_#ddd]">
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="heading-h1 mb-4">{project.name}</h1>
      <p className="heading-h5 mb-4 text-pink">{project.technologies}</p>
      <p className="body-lg mb-6">{project.description}</p>
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link body-md"
        >
          Go to the Project
        </Link>
      )}
    </article>
  );
}
