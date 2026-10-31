"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type ProjectVideoProps = {
  src: string;
  poster: string;
  label: string;
  controls?: boolean;
  className?: string;
};

// Muted loop that only downloads and plays while on screen. With controls it
// becomes a regular player for the project page.
export const ProjectVideo = ({ src, poster, label, controls, className }: ProjectVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { margin: "200px" });

  useEffect(() => {
    const video = ref.current;
    if (!video || controls) return;
    if (inView) video.play().catch(() => {});
    else video.pause();
  }, [inView, controls]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop={!controls}
      playsInline
      controls={controls}
      preload={controls ? "metadata" : "none"}
      className={cn("size-full object-cover object-top", className)}
    />
  );
};
