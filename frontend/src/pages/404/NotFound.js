import React from 'react';
import './NotFound.css';
import { Button } from '../../components/Button/Button';

export default function NotFound() {
  return (
    <>
      <div className="notfound-container">
        <h1 className="notfound-header">404 Error</h1>
        <h2 className="notfound-subtitle">Oops!</h2>
        <p className="notfound-text">Page not found</p>
        <Button buttonSize="btn--large" to="/">
          Home
        </Button>
      </div>
    </>
  );
}
