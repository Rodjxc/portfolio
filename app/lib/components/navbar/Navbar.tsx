"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={
          `fixed top-0 left-0 z-30 w-full bg-background/70 backdrop-blur-sm ` +
          `transform transition-transform duration-300 ` +
          (showNavbar ? "translate-y-0" : "-translate-y-full")
        }
      >
        <div className="page-container relative my-4 flex w-full items-center justify-between">
          <Logo />
          <DesktopNav />
        </div>
      </header>

      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}
