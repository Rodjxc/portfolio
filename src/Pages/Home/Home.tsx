import { AboutMe } from "./AboutMe/AboutMe";
import { Box } from "@chakra-ui/react";
import { Hero } from "./Hero/Hero";
import { Staff } from "./Staff/Staff";
import { TechStack } from "./TechStack/TechStack";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // The empty dependency array ensures this effect runs only on mount

  return (
    <Box className="hero-section" color="white" bg="black">
      <Hero />

      <Box as="section" id="second-section">
        <TechStack />

        <AboutMe />
      </Box>

      <Box as="section" id="team-heading">
        <Box className="staff-cards hidden">
          <Staff />
        </Box>
      </Box>
    </Box>
  );
};
