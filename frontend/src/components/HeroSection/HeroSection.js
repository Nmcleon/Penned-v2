import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './Herosection.css';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default function HeroSection() {
  const [latestBlog, setLatestBlog] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isImageLoading, setIsImageLoading] = useState(true);

  const fetchImageUrl = async (imageName) => {
    const storage = getStorage();
    const imageRef = ref(storage, imageName);
    const startTime = Date.now(); // Record the start time of the fetch operation

    try {
      const imageUrl = await getDownloadURL(imageRef);
      return imageUrl;
    } catch (error) {
      console.error('Error fetching image URL:', error);
      return null;
    } finally {
      const endTime = Date.now();
      const duration = endTime - startTime;
      if (duration > 150000) {
        console.log('Image fetch took longer than 150 seconds');
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogsList = [];
        querySnapshot.forEach((doc) => {
          blogsList.push({ ...doc.data(), id: doc.id });
        });

        const sortedBlogs = [...blogsList].sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );

        setLatestBlog(sortedBlogs[0] || blogsList[0]);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchData();
    if (latestBlog) {
      fetchImageUrl(`/images/${latestBlog.image}`)
        .then(setImageUrl)
        .finally(() => setIsImageLoading(false));
    }
  }, [latestBlog]);

  if (!latestBlog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hero">
      <div className="hero-banner">
        {/* Check if the image URL has been fetched */}
        {isImageLoading ? (
          <div>Loading Image...</div>
        ) : (
          <img
            src={imageUrl || `/images/${latestBlog.image}`}
            alt="Latest Blog Image"
          />
        )}
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
