"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { previousLife, workExperience } from "../../data/experience";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

export const WorkExperience = () => {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <section className="py-16 md:py-24">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title={
            <>
              Shipping product <span className="text-pink">since 2021.</span>
            </>
          }
        />
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-border md:left-[calc(30%+7px)]" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute top-0 bottom-0 left-[7px] w-px origin-top bg-pink md:left-[calc(30%+7px)]"
          />

          <ol ref={ref} className="flex flex-col gap-16 md:gap-24">
            {workExperience.map((job) => (
              <li
                key={job.id}
                id={job.id}
                className="relative grid scroll-mt-28 grid-cols-1 gap-6 pl-10 md:grid-cols-[30%_minmax(0,1fr)] md:gap-0 md:pl-0"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-40% 0px" }}
                  className="absolute top-2 left-0 size-[15px] rounded-full border-4 border-background bg-pink md:left-[30%]"
                />

                <div className="md:sticky md:top-32 md:self-start md:pr-12 md:text-right">
                  <p className="body-sm !text-pink">
                    {job.start} — {job.end}
                  </p>
                  <p className="body-sm !text-secondary">{job.location}</p>
                </div>

                <Reveal className="min-w-0 md:pl-12">
                  <article className="rounded-3xl border border-border bg-card p-6 transition-colors hover:border-pink/40 md:p-10">
                    <div className="mb-6 flex flex-col-reverse items-start gap-4 sm:flex-row sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="heading-h2">{job.company}</h3>
                        <p className="body-lg mt-1 !text-secondary">{job.role}</p>
                      </div>
                      {job.logo && (
                        <div className="flex h-14 w-24 shrink-0 items-center justify-center rounded-2xl bg-muted p-3">
                          <Image
                            src={job.logo}
                            alt=""
                            width={96}
                            height={56}
                            className="max-h-full w-auto object-contain"
                          />
                        </div>
                      )}
                    </div>
                    <p className="body-lg">{job.summary}</p>
                    {job.highlights && (
                      <ul className="mt-6 flex flex-col gap-3">
                        {job.highlights.map((highlight) => (
                          <li key={highlight} className="body-md flex gap-3 !text-secondary">
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-pink" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                    {job.stack && (
                      <ul className="mt-8 flex flex-wrap gap-2">
                        {job.stack.map((tech) => (
                          <li key={tech} className="chip">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
                    {job.url && (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link body-sm mt-8 gap-1"
                      >
                        {job.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <SectionHeading
          eyebrow="Before code"
          title={
            <>
              The previous life <span className="text-pink">still shows in my work.</span>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {previousLife.map((role, index) => (
            <Reveal key={role.id} delay={index * 0.08}>
              <article className="h-full rounded-3xl border border-border p-7 transition-colors hover:bg-card">
                <p className="body-sm !text-pink">{role.date}</p>
                <h3 className="heading-h4 mt-3">{role.title}</h3>
                <p className="body-sm mt-1 !text-secondary">{role.location}</p>
                <p className="body-md mt-5 !text-secondary">{role.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};
