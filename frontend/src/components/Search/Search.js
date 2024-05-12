import React, { useState } from 'react';
import './Search.css';
import { Button } from '../Button';

export default function Search() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Implement search logic
    console.log('Searching for:', searchText);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <Button buttonStyle="btn--primary" onClick={handleSearchSubmit}>
          Search
        </Button>
      </div>
    </>
  );
}
