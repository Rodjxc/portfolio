"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type SkillCardProps = {
  title: string;
  items: string[];
  image: string;
  columns?: 1 | 2;
  className?: string;
};

export const SkillCard = ({
  title,
  items,
  image,
  columns = 1,
  className,
}: SkillCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={cn(
        "relative mx-auto my-8 h-[300px] max-w-[90%] overflow-hidden md:max-w-[70%]",
        className
      )}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-50"
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        className="relative z-10 mx-auto my-[8%] max-w-[90%] rounded-md bg-white/90 p-6 text-center shadow-md md:max-w-[60%]"
      >
        <h3 className="heading-h5 mb-4 !text-black">{title}</h3>
        <ul
          className={cn(
            "body-sm !text-black",
            columns === 2 && "grid grid-cols-2 gap-2"
          )}
        >
          {items.map((item) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
