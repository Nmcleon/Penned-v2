import React from 'react';
import './Card.css';
import Placard from '../Placard/Placard';
import { Button } from '../Button/Button';

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src="images/rivian.jpg" alt="" />
        </div>
        <div className="card-badge">
          <div className="card-categories">
            <p>tech</p>
            <p>auto</p>
          </div>
          <div className="card-date">
            <p>May 15, 2022</p>
          </div>
        </div>
        <div className="card-details">
          <div className="card-title">
            <h3>Rivian Stock Plamit</h3>
          </div>
          <div className="card-text">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when
            </p>
          </div>
        </div>
        <div className="card-action">
          <Placard />
          <div className="card-cta">
            <Button buttonSize="btn--medium" buttonStyle="outline">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
