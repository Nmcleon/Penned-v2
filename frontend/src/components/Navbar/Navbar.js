import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Blogs" className="nav-links" onClick={closeMenu}>
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-links" onClick={closeMenu}>
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Contact" className="nav-links" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
          {button && (
            <Button to="/SignIn" buttonStyle="btn--outline">
              Sign in
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
