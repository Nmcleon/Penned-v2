import React from 'react';
import { Button } from '../Button/Button';
import './Herosection.css';

export default function HeroSection() {
  return (
    <>
      <div className="hero">
        <div className="hero-banner">
          <img src="/images/rivian.jpg" alt="banner img" />
        </div>
        <div className="hero-detail">
          <h2 className="hero-title">Rivian Stalk hits all time Low</h2>
          <p className="hero-text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className="hero-cta">
            <Button buttonStyle="btn--outline" buttonSize="btn--large">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
