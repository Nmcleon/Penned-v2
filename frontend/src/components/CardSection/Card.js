import React from 'react';
import './Card.css';
import Placard from '../Placard/Placard';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import Badge from '../Badge/Badge';

export default function Card(props) {
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
          <p>{props.subtitle}</p>
        </div>
      </div>
      <div className="card-action">
        <Placard author={props.author} />
        <div className="card-cta">
          <Button buttonSize="btn--medium" buttonStyle="outline">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
