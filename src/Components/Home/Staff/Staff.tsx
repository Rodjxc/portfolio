import { StaffData } from "../../../Data/StaffData";
import "./Staff.css";

export const Staff = () => (
  <div className="staff-section">
    <div className="section-heading-wrapper hidden">
          <div className="section-header-item">
            <h2 className="section-heading">The Oslo Team</h2>
            <p className="section-p">I wear a lot of hats around here.</p>
          </div>
        </div>
  
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
          <div className="card-text">
            <div className="position-name">
            <h3>{StaffData.position}</h3>
            <h4>{StaffData.name}</h4>
            </div>
          </div>
        </article>
      </div>
    ))}
  </div>
  </div>
);
