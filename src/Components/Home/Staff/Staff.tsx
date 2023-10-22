import { StaffData } from "../../../Data/StaffData";
import "./Staff.css";

export const Staff = () => (
  <div className="card-grid">
    {StaffData.map((StaffData) => (
      <div className="card" key={StaffData.id}>
        <article>
          <div>
            <img
              src={"/img/" + StaffData.id + ".jpg"}
              alt="Image of the project"
              className="card-image"
            />
          </div>
          <h1>{StaffData.position}</h1>
          <h4>{StaffData.name}</h4>
        </article>
      </div>
    ))}
  </div>
);
