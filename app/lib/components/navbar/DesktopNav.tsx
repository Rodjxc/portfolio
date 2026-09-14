"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin } from "lucide-react";
import { navLinks, socialLinks } from "./links";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-1 items-center justify-end gap-10">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          data-active={pathname === link.href}
          className="nav-link body-md"
        >
          {link.label}
        </Link>
      ))}
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link body-md gap-2"
        >
          {link.label}
          {link.label === "Github" ? (
            <Github className="size-4" />
          ) : (
            <Linkedin className="size-4" />
          )}
        </Link>
      ))}
    </nav>
  );
}
