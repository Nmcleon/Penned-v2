import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './Herosection.css';

export default function HeroSection() {
  const [latestBlog, setLatestBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogsList = [];
        querySnapshot.forEach((doc) => {
          blogsList.push({ ...doc.data(), id: doc.id });
        });

        // Sort the blogs by publishedAt in descending order to find the latest
        const sortedBlogs = [...blogsList].sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );

        // Set the latest blog or default to the first blog if no new ones are found
        setLatestBlog(sortedBlogs[0] || blogsList[0]);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchData();
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
        <p className="hero-text">
          {latestBlog.sections[0]?.details || 'Details unavailable.'}
        </p>
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
