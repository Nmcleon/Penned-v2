import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import { Button } from '../Button/Button';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase'; // Adjust the path according to your project structure

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [articles, setArticles] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, 'blogs');
      const snapshot = await getDocs(articlesCollection);
      const fetchedArticles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(fetchedArticles);
    };

    fetchArticles().catch((error) =>
      console.error('Error fetching articles:', error)
    );
  }, []);

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    if (text.trim() === '') {
      setFilteredResults([]);
      return;
    }

    const searchTerm = text.toLowerCase();
    const filtered = articles.reduce((acc, article) => {
      const authorMatch = article.author.name
        .toLowerCase()
        .includes(searchTerm);
      const titleMatch = article.title.toLowerCase().includes(searchTerm);
      const matchingSections = article.sections.filter((section) =>
        section.details.toLowerCase().includes(searchTerm)
      );

      if (authorMatch || titleMatch || matchingSections.length > 0) {
        acc.push({ ...article, matchingSections });
      }
      return acc;
    }, []);
    setFilteredResults(filtered);
  };

  const handleSearchSubmit = () => {
    if (searchText.trim() === '') {
      setFilteredResults([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleResultClick = (articleId, author = null) => {
    if (author) {
      navigate(`/author/${author.id}`);
    } else {
      navigate(`/article/${articleId}`);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
      />
      <Button buttonStyle="btn--primary" onClick={handleSearchSubmit}>
        Search
      </Button>
      {searchText && (
        <div className="search-results">
          {filteredResults.map((article) => (
            <div
              key={article.id}
              className="search-result"
              onClick={() => handleResultClick(article.id)}
            >
              <h3>{article.title}</h3>
              <p
                onClick={(e) => {
                  e.stopPropagation();
                  handleResultClick(null, article.author);
                }}
              >
                {article.author.name}
              </p>
              {article.matchingSections.map((section, index) => (
                <div key={index} className="search-section">
                  <h4>{section.subtopic}</h4>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
