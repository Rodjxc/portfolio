"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Boxes, Map, Rocket, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { capabilities } from "../../data/skills";
import { ease } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

const icons: Record<string, LucideIcon> = {
  product: Rocket,
  data: Map,
  systems: Boxes,
  quality: ShieldCheck,
  ai: Sparkles,
};

const SpotlightCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const background = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(246, 197, 183, 0.12), transparent 70%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      onMouseLeave={() => {
        mouseX.set(-400);
        mouseY.set(-400);
      }}
      className={cn("group relative overflow-hidden rounded-3xl border border-border bg-card", className)}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background }}
      />
      {children}
    </motion.div>
  );
};

export const Capabilities = () => {
  return (
    <section className="page-container py-16 md:py-24">
      <SectionHeading
        index="02"
        eyebrow="What I bring"
        title={
          <>
            Less &ldquo;which languages I speak&rdquo;,{" "}
            <span className="text-pink">more what I get done.</span>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-6">
        <SpotlightCard className="min-h-[320px] md:col-span-3 md:row-span-2">
          <Image
            src="/img/coding.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-8">
            <p className="eyebrow mb-3 !text-pink">How I work</p>
            <p className="heading-h3 max-w-md">
              I care about the details users feel but rarely notice: loading
              states, keyboard flows, and motion that explains what just happened.
            </p>
          </div>
        </SpotlightCard>

        {capabilities.map((capability, index) => {
          const Icon = icons[capability.id];
          return (
            <SpotlightCard
              key={capability.id}
              delay={capability.wide ? 0 : 0.08 * (index + 1)}
              className={
                capability.wide
                  ? "order-first border-pink/30 bg-gradient-to-br from-pink/10 to-card p-7 md:col-span-6 md:p-10"
                  : "p-7 md:col-span-3"
              }
            >
              <div className={capability.wide ? "relative max-w-3xl" : "relative"}>
                <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-pink/10 text-pink transition-transform group-hover:-rotate-6">
                  <Icon className="size-5" />
                </div>
                <h3 className="heading-h4">{capability.title}</h3>
                <p className="body-md mt-2 !text-secondary">{capability.description}</p>
                <p className="body-sm mt-5 font-mono !text-primary/70">
                  {capability.tools.join(" · ")}
                </p>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};
