// src/customHook/cardElement.js
import React, { useEffect, useState } from 'react';
import Card from '../components/CardSection/Card';

const CardElement = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/db.json');
        if (!response.ok) {
          throw new Error('Could not fetch the data');
        }
        const data = await response.json();
        setBlogs(data.blogs);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };

    fetchData();
  }, []);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {blogs.map((blog) => (
        <Card key={blog.id} {...blog} />
      ))}
    </>
  );
};

export default CardElement;

{
  /*removed blog={blog} instead used spread syntax instead got rid of .blog in the Card component */
}
