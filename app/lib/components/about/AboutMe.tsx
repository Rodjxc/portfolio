"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { socials } from "../../data/contact";
import { languages } from "../../data/skills";
import { Reveal } from "../common/Reveal";

const facts = [
  { emoji: "📍", title: "Oslo, Norway", text: "After years in London, Norway became home." },
  { emoji: "🥋", title: "Brazilian Jiu-Jitsu", text: "Most evenings you'll find me on the mats at the gym." },
  { emoji: "🎬", title: "YouTube", text: "Gaming as @sendaplays and travel stories as @elrodtrip. 50k+ subscribers." },
  { emoji: "🐶", title: "Family", text: "Most free time goes to my wife, our dog, and travelling." },
];

export const AboutMe = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      <section className="grid items-start gap-12 pt-16 pb-10 md:pt-24 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="mr-3 text-pink">04</span>About
            </p>
            <h2 className="heading-section">
              The person <span className="text-pink">behind the code.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex flex-col gap-6">
            <p className="body-lg">
              I grew up surrounded by computers and video games, but spent my
              first career in craft beer: bartending and managing in London,
              brewing in Oslo, and becoming a certified beer sommelier.
            </p>
            <p className="body-lg !text-secondary">
              In 2021 a job task had me build a simple website, and I fell
              head first into web development. Today I build web products in
              Oslo, with a soft spot for minimal interfaces, thoughtful motion
              and well-typed code.
            </p>
            <p className="body-lg !text-secondary">
              The hospitality years stuck with me: I still think about the
              person on the other side first, whether that&apos;s a guest at
              the bar or someone using what I build.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 transition-colors hover:border-pink hover:text-pink"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </Reveal>
        </div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-border lg:sticky lg:top-28"
        >
          <motion.div style={{ y: imageY }} className="absolute -inset-[10%]">
            <Image
              src="/img/rod.jpg"
              alt="Rod holding a mechanical keyboard"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <Reveal key={fact.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -6, rotate: index % 2 ? 1 : -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full rounded-3xl border border-border bg-card p-7"
              >
                <span className="text-4xl">{fact.emoji}</span>
                <h3 className="heading-h4 mt-6">{fact.title}</h3>
                <p className="body-md mt-2 !text-secondary">{fact.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4 rounded-3xl border border-border p-7 md:p-10">
          <p className="eyebrow mb-6">Human languages I speak</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-6">
            {languages.map((language) => (
              <li key={language.name}>
                <p className="heading-h3">{language.name}</p>
                <p className="body-sm !text-secondary">{language.proficiency}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
};
