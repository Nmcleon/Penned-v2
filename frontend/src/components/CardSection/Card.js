import React from 'react';
import './Card.css';
import Placard from '../Placard/Placard';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import Badge from '../Badge/Badge';

export default function Card({
  id,
  image,
  title,
  sections,
  tags,
  publishedAt,
  author,
}) {
  const articleUrl = `/article/${id}`;
  const firstSectionSubtopic =
    sections && sections.length > 0 ? sections[0].subtopic : '';

  return (
    <div className="card">
      <div className="card-img">
        <img src={`./images/${image}`} alt="" />
      </div>
      <Badge tags={tags} publishedAt={publishedAt} />
      <div className="card-details">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-text">
          <p>{firstSectionSubtopic}</p>
        </div>
      </div>
      <div className="card-action">
        {author && <Placard id={id} />}
        <div className="card-cta">
          <Link to={`/Article/${id}`}>
            <Button
              to={`/article/${id}`}
              buttonSize="btn--medium"
              buttonStyle="outline"
              href={articleUrl}
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
