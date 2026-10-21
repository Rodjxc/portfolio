"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "./links";

const sectionIds = navLinks.map((link) => link.id).filter((id) => id !== "top");

// Returns the id of the homepage section currently in the middle of the viewport.
export function useActiveSection() {
  const pathname = usePathname();
  const [active, setActive] = useState("top");

  useEffect(() => {
    if (pathname !== "/") return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const current = [...sectionIds].reverse().find((id) => visible.has(id));
        setActive(current ?? "top");
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return pathname === "/" ? active : null;
}
