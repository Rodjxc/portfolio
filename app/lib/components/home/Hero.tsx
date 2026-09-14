"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundTextX = useTransform(scrollY, [0, 900], [-200, 300]);
  const titleX = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative z-10 overflow-hidden px-5 py-24 md:px-[8%] md:py-[9%]">
      <motion.p
        style={{ x: backgroundTextX }}
        className="pointer-events-none absolute top-[78%] left-[8%] z-0 whitespace-nowrap text-[50px] font-bold text-white/10 md:top-[70%] md:text-[180px]"
      >
        Front-End Dev
      </motion.p>

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.h1 style={{ x: titleX }} className="heading-display mb-10">
          Hey, I&apos;m Rod! 👋
        </motion.h1>
        <p className="body-lg">
          I&apos;ve been a front-end developer since 2021 (previously I worked
          as a{" "}
          <a
            className="text-link"
            href="https://www.beerandcideracademy.org/meet-the-sommeliers/2018/10/10/rodrigo-jimeno"
            target="_blank"
            rel="noopener noreferrer"
          >
            beer sommelier
          </a>{" "}
          for breweries in the UK and Norway).
        </p>
        <p className="body-lg mt-6">
          Back in 2021, one of the tasks for my job back then was building a
          simple website and I tumbled head first into the rabbit hole of coding
          and web development. Fast-forward to today, and I&apos;ve had the
          pleasure of working for a{" "}
          <a
            className="text-link"
            href="https://www.marketer.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            real estate marketing company
          </a>
          , a{" "}
          <a
            className="text-link"
            href="https://www.estatelab.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            real estate management app
          </a>
          , a{" "}
          <a
            className="text-link"
            href="https://www.macondo.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            beer importer
          </a>
          , a{" "}
          <a
            className="text-link"
            href="https://www.meinbafoeg.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            loan facilitator company for German students
          </a>
          , and also some freelance projects.
        </p>
      </div>
    </section>
  );
};
