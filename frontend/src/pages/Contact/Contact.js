import React from 'react';
import './Contact.css';
import Footer from '../../components/Footer/Footer';
import { Button } from '../../components/Button/Button';

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact-title">
          <h2>Contact</h2>
          <h3>Start a conversation</h3>
          <p>
            We're here to assist you. Feel free to reach out with any questions
            or concerns you may have. Our team is dedicated to providing you
            with the support you need.
          </p>
        </div>
        <div className="contact-info">
          <div className="left-container">
            <div className="container-title">
              <h3>Working hours</h3>
            </div>
            <div className="container-details">
              <p>Monday To Friday</p>
              <p>9:00 AM to 8:00PM</p>
            </div>
            <div className="container-footer">
              <p>Online Support Team is available 24/7</p>
            </div>
          </div>
          <div className="right-container">
            <div className="container-title">
              <h3>Contact us</h3>
            </div>
            <div className="container-details">
              <p>070 1234 5789</p>
              <p>020 0200 0255</p>
            </div>
            <div className="container-footer">
              <p>penned@written.com</p>
            </div>
          </div>
        </div>
        <div className="form-area">
          <form action="#" method="post">
            <fieldset>
              <legend className="visually-hidden">
                Your personal information
              </legend>
              <div className="form-group col-1-2">
                <label htmlFor="your-first-name">First Name</label>
                <div className="form-field">
                  <span className="form-field-container">
                    <input
                      type="text"
                      name="your-first-name"
                      id="your-first-name"
                      placeholder="e.g. Mike"
                      pattern="[A-Za-zÀ-ž\s]{3,}"
                      maxLength="35"
                      autoComplete="on"
                      accessKey="f"
                      required
                    />
                    <i className="form-field-icon" />
                  </span>
                  <p className="form-help">
                    First name should be at least 3 characters and only contains
                    letters
                  </p>
                </div>
              </div>
              <div className="form-group col-1-2">
                <label htmlFor="your-last-name">Last Name</label>
                <div className="form-field">
                  <span className="form-field-container">
                    <input
                      type="text"
                      name="your-last-name"
                      id="your-last-name"
                      placeholder="e.g. Smith"
                      pattern="[A-Za-zÀ-ž\s]{3,}"
                      maxLength="40"
                      autoComplete="on"
                      accessKey="l"
                      required
                    />
                    <i className="form-field-icon" />
                  </span>
                  <p className="form-help">
                    Last name should be at least 3 characters and only contains
                    letters
                  </p>
                </div>
              </div>
              <div className="form-group col-2-3">
                <label htmlFor="your-email">Email</label>
                <div className="form-field">
                  <span className="form-field-container">
                    <input
                      type="email"
                      name="your-email"
                      id="your-email"
                      placeholder="e.g. youremail@gmail.com"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      maxLength="55"
                      autoComplete="on"
                      accessKey="e"
                      required
                    />
                    <i className="form-field-icon" />
                  </span>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="visually-hidden">Your comment</legend>
              <div className="form-group col-2-3">
                <label htmlFor="your-title">Title</label>
                <div className="form-field">
                  <span className="form-field-container">
                    <input
                      type="text"
                      name="your-title"
                      id="your-title"
                      placeholder="e.g. Based Blogs"
                      pattern="[A-Za-zÀ-ž\s]{4,}"
                      maxLength="75"
                      autoComplete="on"
                      accessKey="t"
                      required
                    />
                    <i className="form-field-icon" />
                  </span>
                  <p className="form-help">
                    Title should be at least 4 characters and only contains
                    letters
                  </p>
                </div>
              </div>
              <div className="form-group col-2-3">
                <label htmlFor="your-comment">Comment</label>
                <div className="form-field">
                  <span className="form-field-container">
                    <textarea
                      name="your-comment"
                      id="your-comment"
                      accessKey="c"
                      placeholder="Write your comment here"
                      minLength="10"
                      cols="30"
                      rows="6"
                      required
                    />
                  </span>
                  <p className="form-help">
                    Comment should be at least 10 characters
                  </p>
                </div>
              </div>
              <div className="form-group">
                <Button buttonSize="btn--large">Send message</Button>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
