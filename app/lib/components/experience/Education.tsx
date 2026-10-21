import { ArrowUpRight } from "lucide-react";
import { educationItems } from "../../data/education";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

export const Education = () => {
  return (
    <section className="py-16 md:py-24">
      <SectionHeading eyebrow="Education" title="Always learning something." />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {educationItems.map((item, index) => {
          const content = (
            <>
              <p className="eyebrow !text-pink">{item.issuer}</p>
              <p className="heading-h5 mt-3 pr-8">{item.title}</p>
              {item.href && (
                <ArrowUpRight className="absolute top-6 right-6 size-5 text-secondary transition-all group-hover:rotate-45 group-hover:text-pink" />
              )}
            </>
          );
          return (
            <li key={item.title} className="overflow-hidden rounded-3xl border border-border">
              <Reveal delay={index * 0.04} className="h-full">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block h-full p-6 transition-colors hover:bg-card"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="relative h-full p-6">{content}</div>
                )}
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
