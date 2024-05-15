import React from 'react';
import './Footer.css';
import send from '../../assets/send-icon.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="newsletter">
          <div className="newsletter-text">
            <p>Newsletter</p>
          </div>
          <div className="input-wrapper">
            <input
              className="newsletter-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button className="newsletter-cta">
              <img src={send} alt="" />
            </button>
          </div>
        </div>
        <div className="footer-link">
          <div className="footer-nav">
            <ul>
              <li className="footer-item">
                <Link to="/" className="footer-links">
                  Home
                </Link>
              </li>

              <li className="footer-item">
                <Link to="/Blog" className="footer-links">
                  Blogs
                </Link>
              </li>

              <li className="footer-item">
                <Link to="/About" className="footer-links">
                  About us
                </Link>
              </li>

              <li className="footer-item">
                <Link to="/Contact" className="footer-links">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="socialmedia">
            <div class="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
          <small class="website-rights">PENNED © 2024</small>
        </div>
      </div>
    </>
  );
}
