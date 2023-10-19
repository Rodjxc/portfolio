import { Works } from "../../Data/Works";
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
                  src={"../../../img/" + Works.id + ".jpg"}
                  alt="Image of the project"
                />
              </div>
              <h1>
                <Link to={"/project/" + Works.id}>{Works.name}</Link>
              </h1>
              <span>{Works.tecnologies}</span>
              <p>
                <em>{Works.description}</em>
              </p>
              <span>
                <Link to={Works.github || "/default-path-if-undefined"}>
                  Github repository
                </Link>
              </span>
            </article>
          );
        })}
      </section>
    </div>
  );
};
