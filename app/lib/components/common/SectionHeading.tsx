import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  link?: { href: string; label: string };
};

export const SectionHeading = ({ index, eyebrow, title, link }: SectionHeadingProps) => {
  return (
    <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow mb-4">
          {index && <span className="mr-3 text-pink">{index}</span>}
          {eyebrow}
        </p>
        <h2 className="heading-section max-w-3xl">{title}</h2>
      </div>
      {link && (
        <Link href={link.href} className="nav-link body-md shrink-0 gap-1">
          {link.label}
          <ArrowUpRight className="size-4" />
        </Link>
      )}
    </Reveal>
  );
};
