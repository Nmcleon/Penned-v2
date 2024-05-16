import React from 'react';
import { Link } from 'react-router-dom';
import './Placard.css';

export default function Placard({ author }) {
  if (!author) {
    return null;
  }

  return (
    <div className="placard">
      <div className="placard-img">
        <img src={`/images/${author.image}`} alt={author.name} />
      </div>
      <div className="placard-name">
        <h4>
          <Link to={`/author/${author.id}`}>{author.name}</Link>
        </h4>
      </div>
    </div>
  );
}
