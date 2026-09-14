"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  { href: "https://github.com/Rodjxc", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/rod-jimeno/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/sendaplays/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@SendaPlays",
    label: "YouTube",
    icon: Youtube,
  },
];

export const AboutMe = () => {
  const { scrollY } = useScroll();
  const backgroundTextX = useTransform(scrollY, [0, 500], [-120, 240]);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <motion.p
        style={{ x: backgroundTextX }}
        className="pointer-events-none absolute top-[55%] left-[10%] z-0 whitespace-nowrap text-[50px] font-bold text-white/10 md:text-[180px]"
      >
        About Me
      </motion.p>

      <div className="relative z-10 mx-auto max-w-4xl">
        <h1 className="heading-display mb-12">About Me</h1>
        <div className="flex flex-col gap-6">
          <p className="body-lg">
            Since I was 5 I&apos;ve been surrounded by computers and videogames,
            which probably laid the foundations of an interest in technology.
            This interest took me to a pivotal decision, shifting from a 10+
            years working in the craft beer industry and being a beer sommelier,
            to changing my career to become a developer.
          </p>
          <p className="body-lg">
            I believe that my brain naturally works exactly the way a developer
            thinks, with the logic side of programming and believing that
            there&apos;s always more than one solution to a problem. Before I
            used my creativity to make original and tasty beers and now I use it
            to create web applications. I really enjoy minimalist designs
            inspired by the likes of Next JS and Vercel. When I see a project
            built with frameworks I&apos;m not familiar with, I instantly get an
            “I want to learn this” feeling.
          </p>
          <p className="body-lg">
            When I&apos;m not at the computer I&apos;m usually in the gym
            practicing Brazilian Jiu Jitsu, travelling, or spending time with my
            wife and dog.
          </p>
          <p className="body-lg">
            Oh, and I also have a YouTube channel where I make guides for
            videogames!
          </p>
        </div>
        <div className="mt-16 flex gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-primary transition-colors hover:text-pink"
              >
                <Icon className="size-6" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
