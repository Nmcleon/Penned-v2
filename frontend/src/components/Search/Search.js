import React, { useState, useEffect } from 'react';
import './Search.css';
import { Button } from '../Button/Button';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/data/db.json')
      .then((response) => response.json())
      .then((data) => setArticles(data.blogs))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = () => {
    const filteredArticles = articles.filter((article) =>
      article.sections.some((section) =>
        section.details.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    console.log('Search results:', filteredArticles);
  };

  return (
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
  );
}
