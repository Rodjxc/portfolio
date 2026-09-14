"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navLinks, socialLinks } from "./links";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
}

export function MobileNav({ isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const close = () => setIsMenuOpen(false);

  return (
    <>
      <button
        className={`md:hidden fixed top-4 right-4 z-[100] rounded-full border border-border bg-card p-2 text-primary shadow-lg transition-opacity ${
          isMenuOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-label="Open menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu className="h-7 w-7" />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.aside
              key="drawer"
              className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col bg-background px-6 py-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 flex justify-end">
                <button
                  aria-label="Close menu"
                  className="rounded-full border border-border p-2"
                  onClick={close}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-active={pathname === link.href}
                    className="nav-link heading-h4"
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-4 border-t border-border pt-6">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link body-lg gap-2"
                      onClick={close}
                    >
                      {link.label}
                      {link.label === "Github" ? (
                        <Github className="size-5" />
                      ) : (
                        <Linkedin className="size-5" />
                      )}
                    </Link>
                  ))}
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
