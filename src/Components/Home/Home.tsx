import "./Home.css";
import { Staff } from "./Staff/Staff";
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
    <div className="home">
      {/*   HERO SECTION - FIRST SECTION */}
<div className="hero-title">
        <h1>
          ROD JIMENO
        </h1>
        </div> 
      <section id="container-hero">

       
        <div className="hero-text">
          <h2>Hey!</h2>
        </div>
        {/* <div className="hero-title hidden">
          <h1>
            Front End Developer < br/>
            and
            <a
              className="link-small show-image"
              href="https://www.beerandcideracademy.org/meet-the-sommeliers/2018/10/10/rodrigo-jimeno"
              target="blank"
            >
              Beer expert🍺
            </a>            
          </h1>
            
        </div>
        <div className="hero-text ">
            <h4>Hi👋!</h4>
            <h4>
              I'm <strong>Rod</strong>, a <strong>Web Developer</strong> and <strong>Web Designer</strong> based
              in Oslo, Norway 📍.
            </h4>
          </div> */}


        <div className="hero-img-section hidden">
          <img
            src="/img/snd.jpg"
            alt="profile pic for Rod"
            className="hero-img"
          />
        </div>
      </section>

      {/*   ABOUT ME - SECOND SECTION */}

      <section id="second-section">
        <div className="skills hidden">
          <p>Tech Stack </p>
          <ul>
            <li className="skill hidden">
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="skill-icon"
              />
            </li>
            <li className="skill hidden">
              <img
                src="https://skillicons.dev/icons?i=js,ts"
                alt="skill-icon"
              />
            </li>
            <li className="skill hidden">
              <img
                src="https://skillicons.dev/icons?i=figma,ps"
                alt="skill-icon"
              />
            </li>
            <li className="skill hidden">
              <img
                src="https://skillicons.dev/icons?i=react,vite"
                alt="skill-icon"
              />
            </li>
            <li className="skill hidden">
              <img
                src="https://skillicons.dev/icons?i=bootstrap,tailwind,scss"
                alt="skill-icon"
              />
            </li>
          </ul>
        </div>

        <div className="second-section-text hidden">
          <h3>ABOUT ME</h3>
          <h4>
          Since I was 5 I’ve been surrounded by computers and videogames which probably laid the foundations of an interest for technology. This interest took me to a pivotal decision, shifting from a 10+ years working in the craft beer industry and being a beer sommelier, to changing my career to become a developer. Fueled by this determination, I've completed all courses and education I could find over the last year to strengthen my skills, ensuring a transition into a developer role.
          <br />
          <br />
          I believe that my brain naturally works exactly the way a developer thinks, with the logic and
          synchronous (or asyc.) side of programming as well as being fullfilled by the creative side of 
          building a website. I really enjoy minimalist designs, inspired by the likes of Next JS and Vercel.
           When I see a project built with frameworks I'm not familiar with, I instantly get an “I want to 
           learn this” feeling, and I already have on sight learning Remix, ThreeJS and Python. Now I’m looking to
            be part of a bigger team and contribute to wider projects with my skills and personality.
          <br />
          <br />
        Some of my favorite frameworks/tools: HTML, CSS3, Typescript, ReactJS, Vite, Webflow, TailwindCSS, Bootstrap, Figma, Photoshop and of course Spotify, Google, Stackoverflow and Chat GPT like AIs. 
            <br />
            <br />

            <br />
            <br />
            <br />
          </h4>
        </div>
        <div className="contact hidden">
          <div className="contact-text">
            <h2>Contact me! 👇</h2>
            <a href="mailto:rodrysxc@gmail.com">
              <h1>rodrysxc@gmail.com</h1>
            </a>
          </div>
        </div>
      </section>

      {/*            THIRD SECTION   |   The Team     */}

      <section id="team-heading">
        <div className="section-heading-wrapper hidden">
          <div className="section-header-item">
            <h2 className="section-heading">The Oslo Team</h2>
            <p>I wear a lot of hats around here.</p>
          </div>
        </div>
        <div className="staff-cards hidden">
          <Staff />
        </div>
      </section>
    </div>
  );
};
