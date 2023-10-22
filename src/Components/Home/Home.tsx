import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <div className="home">
      {/*   HERO SECTION - FIRST SECTION */}

      <section id="container-hero">
        <div className="hero-text">
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
              I'm <strong>Rod</strong>, a <strong>Web Developer</strong> based
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
        <div className="hero-img-section">
          <img
            src="/img/snd.jpg"
            alt="profile pic for Rod"
            className="hero-img"
          />
        </div>
      </section>

      <section className="second-section">
        <div className="skills">
          <p>Tech Stack </p>
          <ul>
            <li>
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=js,ts"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=figma,ps"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=react,vite"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=bootstrap,tailwind,scss"
                alt="skill-icon"
              />
            </li>
          </ul>
        </div>

        {/*   ABOUT ME - SECOND SECTION */}
        <div className="second-section-text">
          <h3>ABOUT ME</h3>
          <h4>
            I love building beautiful and functional web applications and
            letting my creativity shine through code. I'm a natural
            problem-solver and self-learner.
            <br />
            I'm also a passionate and professional digital content creator with
            extensive experience in video creation, photo and video editing and
            live streaming.
          </h4>
          <h4>
            I've started my own YouTube (39k+) and Twitch channel (10k+) from 0
            and have built a solid follower base and engaged community and do
            live streams when the time allows it. This has allowed me to expand
            my skills in other fields like SEO copywriting, picture editing and
            public speaking amongst other things. <br />
            <br />
            <br />
            <Link to="/Contact">Contact me!</Link>
            <br />
            <br />
          </h4>
        </div>
      </section>
      <section className="team-heading">
        <div className="section-heading-wrapper">
          <div className="section-header-item">
            <h2 className="section-heading">The Oslo Team</h2>
            <p>I wear a lot of hats around here</p>
          </div>
        </div>

        <div className="works"></div>
      </section>
    </div>
  );
};
