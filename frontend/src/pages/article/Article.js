import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Placard from '../../components/Placard/Placard';
import Prompt from '../../components/Prompt/Prompt';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/CardSection/Card';
import Badge from '../../components/Badge/Badge';
import useFetch from '../../customHook/useFetch';
import './Article.css';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default function Article() {
  const { id } = useParams();
  const { data: blogs, isLoading, error } = useFetch('blogs');

  const [imageUrl, setImageUrl] = useState('');
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const fetchImageURL = async (imageName) => {
      const storage = getStorage();
      const imageRef = ref(storage, `images/${imageName}`);
      try {
        const imageUrl = await getDownloadURL(imageRef);
        return imageUrl;
      } catch (error) {
        console.error('Error fetching image URL:', error);
        return null;
      }
    };

    const loadImage = async () => {
      if (blogs.length > 0) {
        const blog = blogs.find((blog) => blog.id === id);
        if (blog) {
          const url = await fetchImageURL(blog.image);
          if (url) {
            setImageUrl(url);
            setLoadingImage(false);
          } else {
            setTimeout(async () => {
              const retryUrl = await fetchImageURL(blog.image);
              if (retryUrl) {
                setImageUrl(retryUrl);
              } else {
                setImageUrl(`${process.env.PUBLIC_URL}/images/${blog.image}`);
              }
              setLoadingImage(false);
            }, 150);
          }
        }
      }
    };

    loadImage();
  }, [blogs, id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) return <div>Blog not found</div>;

  const otherBlogs = blogs
    .filter((otherBlog) => otherBlog.id !== id)
    .slice(0, 2);

  return (
    <>
      <section className="article">
        <div className="article-header">
          <Placard author={blog.author} />
          <div className="article-heading">
            <h2>{blog.title}</h2>
          </div>
          <Badge tags={blog.tags} publishedAt={blog.publishedAt} />
        </div>
        <div className="article-img">
          {loadingImage ? (
            <div>Loading...</div>
          ) : (
            <img
              src={imageUrl}
              alt={blog.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${process.env.PUBLIC_URL}/images/default.jpg`;
              }}
            />
          )}
        </div>
        <div className="main">
          {blog.sections.map((section, index) => (
            <div key={index} className="article-details">
              <h2 className="subtopic">{section.subtopic}</h2>
              <p className="details">{section.details}</p>
            </div>
          ))}
        </div>
        <h2 className="subtopic">Next Read</h2>
        <div className="suggestion">
          {otherBlogs.map((otherBlog) => (
            <Card key={otherBlog.id} {...otherBlog} />
          ))}
        </div>
      </section>
      <Prompt />
      <Footer />
    </>
  );
}
