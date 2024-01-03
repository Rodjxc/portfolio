import { AboutMe } from "./AboutMe/AboutMe";
import { Hero } from "./Hero/Hero";
import "./Home.css";
import { Staff } from "./Staff/Staff";
import { TechStack } from "./TechStack/TechStack";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    // Intersection Observer setup. Runs the observer on load. It'll "observe" changes in the intersection of a target element
    // with a parent element or the viewport

    const observer = new IntersectionObserver((entries) => {
      // it goes over every "entry" in the entries array, Entries represent elements being observed. If the entry "intersects", it gives
      // it the class of show (making them visible through CSS). Since I want them dissapearing again when not displayed, I make an else
      // that will remove the class

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
    <div className="hero-section">
     
    <Hero />
        
      <section id="second-section">
        <TechStack />

        <AboutMe />
      </section>
      {/*            THIRD SECTION   |   The Team     */}
      <section id="team-heading">
        
        <div className="staff-cards hidden">
          <Staff />
        </div>
      </section>
    </div>
  );
};
