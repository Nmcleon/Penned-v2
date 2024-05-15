import React from 'react';
import './Badge.css';

export default function Badge() {
  return (
    <>
      <div className="card-badge">
        <div className="card-categories">
          <p>tech</p>
          <p>auto</p>
        </div>
        <div className="card-date">
          <p>May 15, 2022</p>
        </div>
      </div>
    </>
  );
}
