"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { staff } from "../../data/staff";
import { cn } from "@/lib/utils";
import { ease } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

export const Staff = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <SectionHeading
        eyebrow="The Oslo team"
        title={
          <>
            Meet the team. <span className="text-pink">All six of us.</span>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
        {staff.map((member, index) => (
          <motion.article
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: (index % 3) * 0.08 }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "group relative aspect-[3/2] overflow-hidden rounded-2xl transition-all duration-300 ease-out md:rounded-3xl",
              hovered !== null && hovered !== index && "md:scale-[0.98] md:opacity-50"
            )}
          >
            <img
              src={`/img/${member.id}.jpg`}
              alt={member.position}
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 md:p-6">
              <h3 className="heading-h5 md:heading-h4">{member.position}</h3>
              <p className="body-sm !text-secondary">{member.name}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
