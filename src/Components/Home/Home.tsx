import "./Home.css";
import { Staff } from "./Staff/Staff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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

      <section id="container-hero">
        <div className="hero-text hidden">
          <h1>
            <a
              className="link-small"
              href="https://www.beerandcideracademy.org/meet-the-sommeliers/2018/10/10/rodrigo-jimeno"
              target="blank"
            >
              Beer expert🍺
            </a>
            turned <br />
            Front End Developer
          </h1>
          <div>
            <h4>Hi👋!</h4>
            <h4>
              I'm <strong>Rod</strong>, a <strong>Web Developer</strong> and <strong>Web Designer</strong> based
              in Oslo, Norway 📍.
            </h4>
          </div>
          <div>
            <span className="icons">
              <a href="https://www.linkedin.com/in/rod-jimeno/" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://github.com/Rodjxc" target="blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </span>
          </div>
        </div>
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
          A brewer who changed careers into front-end developer, that loves the webs with awesome user experiences!
          I can sit for hours and code or research new frameworks, tools or learn new technologies. I like starting new projects starting 
          with simple designs in Figma, to fully functional websites.
          <br />

          I have a Bachelor's Degree in Tourism and Leisure Studies, so I've always being passionate about learning languages.
          <br />
          <br />
        Some of my favorite frameworks/tools: HTML, CSS3, Typescript, ReactJS, Vite, Webflow, TailwindCSS, Bootstrap, Figma, Photoshop and of course Spotify, Google, Stackoverflow and Chat GPT like AIs. I'm a natural
          problem-solver and self-learner.
            <br />
            <br />

            I'm also a passionate and professional digital content creator with
            extensive experience in video creation, photo and video editing and
            live streaming.
            <br />
            I've started my own YouTube (39k+) and Twitch channel (10k+) from 0
            and have built a solid follower base and engaged community and do
            live streams when the time allows it. This has allowed me to expand
            my skills in other fields like SEO copywriting, picture editing and
            public speaking amongst other things. <br />
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
