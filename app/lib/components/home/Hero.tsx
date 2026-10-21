"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ease } from "../common/Reveal";
import { BackgroundBeams } from "./BackgroundBeams";

const headline = ["From", "beer", "sommelier", "to", "software."];
const highlighted = new Set(["to", "software."]);

const stickers = [
  { label: "✦ 5+ years in product teams", className: "-left-6 top-10 -rotate-6", delay: 0.9 },
  { label: "▶ 50k+ on YouTube", className: "-right-4 top-1/2 rotate-3", delay: 1.05 },
  { label: "⚛ React · Next.js · TS", className: "-bottom-5 left-8 -rotate-2", delay: 1.2 },
];

const stats = [
  { value: "5+", label: "years shipping web products" },
  { value: "5k+", label: "monthly visits on a site I built and run" },
  { value: "50k+", label: "subscribers across my YouTube channels" },
];

const RotatingBadge = () => (
  <motion.svg
    viewBox="0 0 100 100"
    className="absolute -top-6 -right-3 z-20 size-24 sm:-top-8 sm:-right-8 md:size-32"
    animate={{ rotate: 360 }}
    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    aria-hidden
  >
    <circle cx="50" cy="50" r="50" fill="var(--color-pink)" />
    <defs>
      <path id="badge-circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
    </defs>
    <text fontSize="10.5" fontWeight="700" letterSpacing="2.2" fill="#141414">
      <textPath href="#badge-circle">OSLO · NORWAY · FRONT-END · </textPath>
    </text>
    <circle cx="50" cy="50" r="19" fill="#141414" />
    <text x="50" y="57" textAnchor="middle" fontSize="20">
      👋
    </text>
  </motion.svg>
);

const Portrait = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease, delay: 0.3 }}
      className="relative mx-auto w-full max-w-[380px] [perspective:1000px]"
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{ rotateX, rotateY }}
        className="relative"
      >
        <RotatingBadge />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-muted">
          <Image
            src="/img/rod-headshot.jpg"
            alt="Portrait of Rod Jimeno"
            fill
            priority
            sizes="380px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="body-sm absolute bottom-5 left-5 flex items-center gap-2">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
            </span>
            Currently building at Plot.ai
          </p>
        </div>
        {stickers.map((sticker) => (
          <motion.span
            key={sticker.label}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: sticker.delay }}
            className={`body-sm absolute z-10 hidden rounded-full border border-border bg-card/90 px-4 py-2 whitespace-nowrap shadow-xl backdrop-blur sm:block ${sticker.className}`}
          >
            {sticker.label}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section className="relative isolate overflow-hidden">
      <BackgroundBeams className="absolute -z-10 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/4 -z-10 size-[500px] rounded-full bg-pink/10 blur-[120px]"
      />

      <div className="page-container grid items-center gap-16 pt-10 pb-20 md:pt-16 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
        <motion.div style={{ y: textY }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2"
          >
            Hey, I&apos;m Rod 👋 · Oslo, Norway
          </motion.p>

          <h1 className="heading-hero">
            {headline.map((word, index) => (
              <span key={word} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className={`inline-block ${highlighted.has(word) ? "text-pink" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.1 + index * 0.06 }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="body-lg mt-8 max-w-xl !text-secondary"
          >
            I&apos;m a senior front-end developer in Oslo, building fast,
            accessible products with React, Next.js and TypeScript, mostly in
            proptech, where maps, tables and big datasets need to feel simple.
            Before code, I spent a decade in craft beer as a{" "}
            <a
              className="text-link"
              href="https://www.beerandcideracademy.org/meet-the-sommeliers/2018/10/10/rodrigo-jimeno"
              data-cursor-text="Wanna know more?"
              target="_blank"
              rel="noopener noreferrer"
            >
              certified sommelier
            </a>
            , and in my spare time I make{" "}
            <a
              className="text-link"
              href="https://www.youtube.com/@SendaPlays"
              data-cursor-text="Watch!"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube videos
            </a>{" "}
            about gaming and travel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3.5 font-bold text-[#141414] transition-transform hover:scale-[1.03]"
            >
              Selected work
              <ArrowDownRight className="size-4 transition-transform group-hover:rotate-[-45deg]" />
            </Link>
            <Link
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 transition-colors hover:border-pink hover:text-pink"
            >
              More about me
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </motion.div>

        <Portrait />
      </div>

      <div className="page-container">
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: index * 0.1 }}
              className="bg-background p-6 md:p-8"
            >
              <dt className="body-sm !text-secondary">{stat.label}</dt>
              <dd className="heading-section mt-2 !text-pink">{stat.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};
