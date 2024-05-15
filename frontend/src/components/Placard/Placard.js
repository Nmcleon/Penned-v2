import React from 'react';
import { Link } from 'react-router-dom';
import Author from '../../pages/Author';
import './Placard.css';

export default function Placard() {
  return (
    <div className="placard">
      <div className="placard-img">
        <img src="/images/rivian.jpg" alt="User" />
      </div>
      <div className="placard-name">
        <h4>
          <Link to="/Author" element={<Author />}>
            Young King
          </Link>
        </h4>
      </div>
    </div>
  );
}
