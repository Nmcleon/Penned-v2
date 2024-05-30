import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';
import { useAuth } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

function Navbar() {
  const { currentUser } = useAuth();
  const [click, setClick] = useState(false);
  const [firstName, setFirstName] = useState('');

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
    const fetchUserData = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setFirstName(userDoc.data().firstName);
        }
      }
    };
    fetchUserData();
  }, [currentUser]);

  window.addEventListener('resize', showButton);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        closeMenu();
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

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
            <div className="mobile">
              {currentUser ? (
                <li className="nav-item">
                  <p
                    onClick={
                      <Link to="/SignIn" buttonStyle="btn--outline">
                        Sign in
                      </Link>
                    }
                  >
                    Hi, {currentUser.firstName}
                  </p>
                </li>
              ) : null}
              <li className="nav-item">
                <Button
                  to={!currentUser ? '/signin' : ''}
                  className="nav-links-mobile"
                  onClick={() => (!currentUser ? closeMenu() : handleLogout())}
                  buttonSize="btn--large"
                  buttonStyle="btn--outline"
                >
                  {!currentUser ? 'Sign in' : 'Sign out'}
                </Button>
              </li>
            </div>
          </ul>
          {button && !currentUser && (
            <Button to="/SignIn" buttonStyle="btn--outline">
              Sign in
            </Button>
          )}
          {button && currentUser && (
            <div className="dropdown">
              <p onClick={handleClick}>Hi, {firstName}</p>
              <div
                className={
                  click ? 'dropdown-content active' : 'dropdown-content'
                }
              >
                <ul>
                  <li>
                    <Link to="/Profile" buttonStyle="btn--outline">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Button onClick={handleLogout} buttonStyle="btn--outline">
                      Log out
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
