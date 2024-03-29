import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './HeaderNav.css';
import { useEffect } from 'react';

export const HeaderNav = () => {

  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileNavToggle = () => {
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileNav) {
      mobileNav.classList.toggle('is-active');
    }
  };

  const handleResize = () => {

    // Close mobile menu if window is resized beyond a certain breakpoint
    const mobileNav = document.querySelector('.mobile-nav');
    if (window.innerWidth > 768 && mobileNav && mobileNav.classList.contains('is-active')) {
      mobileNav.classList.remove('is-active');
    }
  };

  useEffect(() => {
    const menuBtn = document.querySelector('.hamburger-menu');
    menuBtn?.addEventListener('click', () => {
      menuBtn.classList.toggle('is-active');
      handleMobileNavToggle();
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <nav>
        <div className="logo"  data-cursor-text ="Take me back" 
>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleNavLinkClick}
              >
                &lt; RJ /&gt;
              </NavLink>
          
        </div>

        <button className="hamburger-menu">
          <div className="bar"></div>
        </button>

        <div className="links-navbar" data-cursor-text ="All my projects">
          <ul>
             <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleNavLinkClick}
              >
                Portfolio
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/cv"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleNavLinkClick}
              >
                CV
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="icons icons-navbar">
          <a href="https://github.com/Rodjxc" target="blank" data-cursor-text ="My Github repos">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/rod-jimeno/" target="blank" data-cursor-text ="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </nav>

      <nav className="mobile-nav">
        <div className="container-mobile">
          <ul>
           
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleNavLinkClick}
              >
                Portfolio
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/cv"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleNavLinkClick}
              >
                CV
              </NavLink>
            </li> */}
          </ul>
          <div className="icons">
            <a href="https://www.linkedin.com/in/rod-jimeno/" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://github.com/Rodjxc" target="blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
