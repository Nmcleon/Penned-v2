import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Button } from '../../components/Button/Button';
import './About.css';

export default function About() {
  return (
    <>
      <div className="abt-section">
        <h2 className="abt-title">ABOUT US</h2>
        <div className="abt-hero">
          <div className="abt-header">
            <h3>Passionate storytellers with a drive to learn and share.</h3>
          </div>
          <div className="abt-text">
            <p>
              We strive to provide a platform where enthusiasts, experts, and
              novices alike can come together to share their thoughts, insights,
              and experiences. Whether you're a seasoned blogger aficionado or
              just starting to delve into its intricacies, you'll find a
              welcoming space here to learn, discuss, and connect with
              like-minded individuals.
            </p>
          </div>
        </div>
        <div className="abt-img">
          <img src={'./images/abt-hero.jpg'} alt="" />
        </div>
        <div className="sub-content">
          <div className="abt-mission">
            <h2 className="abt-heading">Our Mission</h2>
            <h3 className="abt-subheading">
              Empowering change through
              <br />
              innovation and collaboration
            </h3>
            <p className="abt-text">
              At Penned, our mission is to empower individuals and communities
              through the transformative power of innovation and collaboration.
              We believe that by fostering a culture of creativity, exploration,
              and inclusivity, we can drive positive change and make a
              meaningful impact in the world.
            </p>
          </div>
          <div className="abt-vision">
            <h2 className="abt-heading">Our Vision</h2>
            <h3 className="abt-subheading">
              Inspiring minds,
              <br /> igniting passions
            </h3>
            <p className="abt-text">
              We envisions a future where curiosity knows no bounds and passion
              fuels endless possibilities. Our vision is to inspire minds and
              ignite passions, creating a world where individuals are empowered
              to explore, create, and innovate without limits.
            </p>
          </div>
        </div>

        <div className="abt-team">
          <div className="team">
            <div className="abt-team-details">
              <h2 className="abt-team-heading">Meet Our Creative Team</h2>
              <h3 className="abt-team-sub">
                Driving Innovation, Inspiring Change
              </h3>
              <p className="abt-text">
                Our diverse and passionate team at Penned Community Blog is
                dedicated to pushing boundaries and bringing fresh perspectives
                to the table. With backgrounds ranging from literature to
                technology, we collaborate seamlessly to create content that
                resonates with our readers and sparks meaningful conversations.
              </p>
            </div>
            <div className="abt-team-img">
              <img src={'./images/abt-reason.jpg'} alt="" />
            </div>
          </div>
          <div className="reason">
            <div className="abt-team-img">
              <img src={'./images/abt-creatives.jpg'} alt="Team Image" />
            </div>
            <div className="abt-reason">
              <h2 className="abt-team-heading">Why We Started Penned</h2>
              <h3 className="abt-team-sub">
                Fulfilling a Passion, Embracing Change
              </h3>
              <p className="abt-text">
                Penned Community Blog was born out of a shared love for
                storytelling and a desire to create a space where voices could
                be heard and stories could be shared. We believe in the power of
                words to inspire, educate, and unite, and our journey with
                Penned is a testament to that belief.
              </p>
            </div>
          </div>
        </div>

        <div className="abt-prompt">
          <div className="abt-prompt-text">
            <h2 className="abt-team-heading">
              Be a Part of Our Journey <br />
              Join Our Team Today
            </h2>
            <p className="abt-text-prompt">
              Shape the future of content creation
            </p>
          </div>
          <Button buttonSize="btn--large">Join Now</Button>
        </div>

        <Footer />
      </div>
    </>
  );
}
