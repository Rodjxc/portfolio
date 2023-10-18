import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Works } from "../../Data/Works";
import "./Project.css";

export const Project = () => {
  // Here we use the useParams to get the parameters like id, descript, etc from the element we're reading (in this case, from
  // the items of the portfolio)

  const params = useParams();

  const [proyecto, setProyecto] = useState({});

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
