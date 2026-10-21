"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { EMAIL } from "../../data/contact";

export const ContactCTA = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [64, 24]);

  return (
    <section ref={ref} className="page-container py-16 md:py-24">
      <motion.div
        style={{ scale, borderRadius: radius }}
        className="relative overflow-hidden bg-pink px-6 py-16 text-center md:px-16 md:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/2 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-white/40 blur-3xl"
        />
        <p className="eyebrow relative mb-6 !text-black/60">Say hello</p>
        <h2 className="heading-hero relative mx-auto max-w-4xl !text-[#141414]">
          Always happy to chat about the web.
        </h2>
        <a
          href={`mailto:${EMAIL}`}
          data-cursor-text="Say hi!"
          className="group relative mt-10 inline-flex items-center gap-3 rounded-full bg-[#141414] px-7 py-4 text-primary transition-transform hover:scale-105"
        >
          <span className="body-lg">{EMAIL}</span>
          <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
        </a>
      </motion.div>
    </section>
  );
};
