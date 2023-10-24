import { Works } from "../../Data/Works";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
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
                <img
                  src={"/img/" + Works.id + ".jpg"}
                  alt="Image of the project"
                />
              </div>
              <h1>
                <Link to={"/project/" + Works.id}>{Works.name}</Link>
              </h1>
              <span>{Works.tecnologies}</span>
              <p>{Works.description}</p>
              <span>
                <div className="icons">
                  <span className="icon-wrapper">
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
                  </span>
                </div>
              </span>
            </article>
          );
        })}
      </section>
    </div>
  );
};
