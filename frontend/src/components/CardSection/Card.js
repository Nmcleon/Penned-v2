// Card.js
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
        <Placard author={author} />
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

{
  {
    /*
import React from 'react';
import './Card.css';
import Placard from '../Placard/Placard';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import Badge from '../Badge/Badge';

export default function Card(props) {
  const articleUrl = `/article/${props.id}`;
  const firstSectionSubtopic =
    props.sections && props.sections.length > 0
      ? props.sections[0].subtopic
      : '';

  return (
    <div className="card">
      <div className="card-img">
        <img src={`./images/${props.image}`} alt="" />
      </div>
      <Badge tags={props.tags} publishedAt={props.publishedAt} />
      <div className="card-details">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-text">
          <p>{firstSectionSubtopic}</p>
        </div>
      </div>
      <div className="card-action">
        <Placard author={props.author} />
        <div className="card-cta">
          <Link to={`/Article/${props.id}`}>
            <Button
              to={`/article/${props.id}`}
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
*/
  }
}
