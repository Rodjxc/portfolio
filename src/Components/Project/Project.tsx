import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Works } from "../../Data/Works";
import "./Project.css";

// Here we create an interface to let the useState know that the params we'll be receiving, will of be those types
interface ProjectType {
  id: string;
  name: string;
  tecnologies: string;
  description: string;
  url: string;
}

export const Project = () => {
  // Here we use the useParams to get the parameters like id, descript, etc from the element we're reading (in this case, from
  // the items of the portfolio)

  const params = useParams();

  // And here, linked to the interface, we define the initial state of the useState depending on the parameter we receive. It'll be
  // of one of those types, or it'll be null

  const [proyecto, setProyecto] = useState<ProjectType | null>(null);

  useEffect(() => {
    let proyecto = Works.filter((trabajo) => trabajo.id === params.id);
    setProyecto(proyecto[0]);
  }, []);

  return (
    <div className="page-work">
      <div className="mask">
        <img src={"../../../public/img/" + proyecto.id + ".jpg"} alt="" />
      </div>
      <h1>{proyecto.name}</h1>
      <p>{proyecto.tecnologies}</p>
      <p>{proyecto.description}</p>
      <a href={proyecto.url} target="blank">
        Go to the Proyect
      </a>
    </div>
  );
};
