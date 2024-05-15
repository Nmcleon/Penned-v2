import React from 'react';
import { Button } from '../Button/Button';
import './Prompt.css';
import { Link } from 'react-router-dom';

export default function Prompt() {
  return (
    <>
      <div className="prompt-container">
        <div className="prompt-text">
          <h2>
            Do you want to write a <span>blog</span>?
          </h2>
        </div>
        <div className="prompt-cta">
          <Button>
            {' '}
            <Link to="/Create">Write now</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
