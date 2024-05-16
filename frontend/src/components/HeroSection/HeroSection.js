import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import './Herosection.css';

export default function HeroSection() {
  const [latestBlog, setLatestBlog] = useState(null);

  useEffect(() => {
    {
      /*change to http://localhost:8000/data/db.json or location ot fetch data from*/
    }
    fetch('/data/db.json')
      .then((response) => response.json())
      .then((data) => {
        if (!data.blogs || data.blogs.length === 0) {
          console.error('No blogs found in the data.');
          return;
        }

        // Find the default blog with id: 1
        const defaultBlog = data.blogs.find((blog) => blog.id === '1');

        // Sort the blogs by publishedAt in descending order to find the latest
        const sortedBlogs = [...data.blogs].sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );

        // Set the latest blog or default to the blog with id: 1 if no new ones are found
        setLatestBlog(sortedBlogs[0] || defaultBlog);
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  if (!latestBlog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hero">
      <div className="hero-banner">
        <img src={`/images/${latestBlog.image}`} alt="Latest Blog Image" />
      </div>
      <div className="hero-detail">
        <h2 className="hero-title">{latestBlog.title}</h2>
        <p className="hero-text">{latestBlog.sections[0].details}</p>
        <div className="hero-cta">
          <Button
            to={`/article/${latestBlog.id}`}
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
