"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { socials } from "../../data/contact";
import { navLinks } from "./links";
import { useActiveSection } from "./useActiveSection";

export function DesktopNav() {
  const active = useActiveSection();

  return (
    <>
      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-card/80 p-1 backdrop-blur-md md:flex">
        {navLinks.map((link) => {
          const isActive = active === link.id;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="body-sm relative rounded-full px-4 py-2 transition-colors hover:text-pink"
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-muted"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <ul className="hidden gap-2 md:flex">
        {socials
          .filter(({ label }) => label === "GitHub" || label === "LinkedIn")
          .map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-border bg-card/80 text-secondary backdrop-blur-md transition-colors hover:border-pink hover:text-pink"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}
