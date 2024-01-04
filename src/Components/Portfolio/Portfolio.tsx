import { Works } from "../../Data/Works";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>
      <section className="works">
        {Works.map((Works) => {
          return (
            <article key={Works.id} className="work-item">
              <div className="mask">
                {/*   If I want it to go to another page where I can display the project itself in detail, activate the
                link below. In this case the projects are just ideas so there's not much to talk about */}
                {/* <Link to={"/project/" + Works.id}> */}
                <Link className="portfolio-img"
                  to={Works.url || "/default-path-if-undefined"}
                  target="_blank"
                  data-cursor-text ="See project live"
                >
                  <img
                    src={"/img/" + Works.id + ".jpg"}
                    alt="Image of the project"
                  />
                </Link>
              </div>
               <div className="card-text">
                  <h1>{Works.name}</h1>
                  <span>{Works.tecnologies}</span>
                  <p>{Works.description}</p>
                  <div className="icons-card">
                       <Link
                          to={Works.url || "/default-path-if-undefined"}
                          target="_blank"
                        >
                          <FontAwesomeIcon
                          icon={faArrowUpFromBracket}
                          className="icon"
                        />
                        </Link>

                        {/* Here I made it only render if there's something inside the github param. If it doesn't have, don't show */}
                        {Works.github && (
                          <Link to={Works.github} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                        </Link>
                      )}
                        {Works.figma && (
                        <Link to={Works.figma} target="_blank">
                            <FontAwesomeIcon icon={faFigma} className="icon" />
                        </Link>
                      )}
                  </div>
                  
                </div>
             </article>
          );
        })}
      </section>
    </div>
  );
};
