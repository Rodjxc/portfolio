"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { codingSkills, languages, workingTools } from "../../data/skills";
import { SkillCard } from "./SkillCard";

export const TechStack = () => {
  const { scrollY } = useScroll();
  const headingX = useTransform(scrollY, [0, 1000], [0, -80]);

  return (
    <section className="relative z-10 overflow-x-hidden pt-10 md:pt-16">
      <motion.h2
        style={{ x: headingX }}
        className="heading-display my-10 text-center md:my-16"
      >
        ⚙️ Skills
      </motion.h2>
      <p className="body-lg page-container mb-10">
        Here is a summary of my most important skills and abilities as a
        Front-end Developer. You can have a detailed view of where I&apos;ve put
        them to use in the Experience section :)
      </p>

      <div className="page-container">
        <SkillCard
          title="Coding"
          items={codingSkills}
          image="/img/coding.jpg"
          columns={2}
          className="h-[400px]"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <SkillCard
            title="Languages"
            items={languages.map(
              (language) => `${language.name} — ${language.proficiency}`
            )}
            image="/img/languages.webp"
          />
          <SkillCard
            title="Working Tools"
            items={workingTools}
            image="/img/tools.jpg"
          />
        </div>
      </div>
    </section>
  );
};
