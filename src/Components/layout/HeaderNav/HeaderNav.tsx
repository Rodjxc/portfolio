import { NavLink } from "react-router-dom";
import "./HeaderNav.css";

export const HeaderNav = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <h3>Rodj.dev</h3>
        </div>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
          </li>
          {/*<li>
             <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>
            </li>*/}
          <li>
            <NavLink
              to="/cv"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CV
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
