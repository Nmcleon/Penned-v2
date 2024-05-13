import React from 'react';
import './Placard.css';

export default function Placard() {
  return (
    <div className="placard">
      <div className="placard-img">
        <img src="/images/rivian.jpg" alt="User" />
      </div>
      <div className="placard-name">
        <h4>Young King</h4>
      </div>
    </div>
  );
}
