import Image from "next/image";
import { workExperience } from "../../data/experience";

export const WorkExperience = () => {
  return (
    <section className="relative py-10">
      <h2 className="heading-display mb-6 text-center">Work Experience</h2>
      <p className="body-lg mx-auto mb-16 max-w-3xl">
        Here is a summary of my work experience as a Front-end Developer.
      </p>

      <div className="relative mx-auto max-w-7xl">
        <div className="absolute top-0 left-[1%] hidden h-full w-px bg-gradient-to-b from-pink to-transparent md:block" />

        <ol className="flex flex-col gap-16 md:gap-28">
          {workExperience.map((experience) => (
            <li
              key={experience.id}
              className="flex flex-col gap-6 md:flex-row md:items-start"
            >
              <div className="sticky top-32 flex w-full max-w-sm flex-col items-start self-start md:pl-8">
                {experience.image ? (
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    width={220}
                    height={80}
                    className="mb-4 h-auto max-h-[80px] w-auto max-w-[50%] object-contain"
                  />
                ) : null}
                <h3 className="heading-h4 text-pink">{experience.title}</h3>
                <p className="body-sm mt-2 text-secondary">{experience.date}</p>
                <p className="body-sm text-secondary">
                  📍 {experience.location}
                </p>
              </div>

              <div className="w-full">
                <p className="body-md border-l-4 border-pink pl-6">
                  {experience.description}
                </p>
                {experience.stack && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {experience.stack.map((tech) => (
                      <li
                        key={tech}
                        className="body-sm rounded-md border border-pink px-3 py-1 text-primary transition-colors hover:text-pink"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
