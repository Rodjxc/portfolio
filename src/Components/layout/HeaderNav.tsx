import { NavLink } from 'react-router-dom';
import './HeaderNav.css'

export const HeaderNav = () => {
  return (
 <header className='header'>
  <div className='logo'>
    <span>R</span>
  <h3>Rod Jimeno Dev.</h3>
  </div>
    <nav>
        <ul>
            <li>
              <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Main</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={({isActive}) => isActive ? "active" : ""}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/cv" className={({isActive}) => isActive ? "active" : ""}>CV</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
            </li>
        </ul>
   </nav>
</header>
  )
}
