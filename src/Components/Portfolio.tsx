import {Works} from "../Data/Works"
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <div className='page'>
      <h1 className="heading">Portfolio</h1>
      {Works.map(Works => {
        return (
        <article key={Works.id}>
          <span>{Works.categories}</span>
          <h1><Link to={"/project/"+Works.id}>{Works.name}</Link></h1>
          <span>{Works.tecnologies}</span>
          <p><em>{Works.description}</em></p>
        </article>
        );
        })
      }
      </div>
  )
}
