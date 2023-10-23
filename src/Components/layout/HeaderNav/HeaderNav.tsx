import { NavLink } from "react-router-dom";

import "./HeaderNav.css";

export const HeaderNav = () => {
  // Small function that will take us to the top of the screen when we browse through different pages. We call with an onClick
  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
              onClick={handleNavLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
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
