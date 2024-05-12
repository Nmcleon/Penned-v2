import React from 'react';
import { Button } from '../Button';
import './Prompt.css';

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
          <Button> Write now</Button>
        </div>
      </div>
    </>
  );
}
