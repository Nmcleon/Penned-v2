import React, { useEffect, useState } from 'react';
import Card from '../components/CardSection/Card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const CardElement = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogsList = [];
        querySnapshot.forEach((doc) => {
          blogsList.push({ ...doc.data(), id: doc.id });
        });
        setBlogs(blogsList);
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
  {
    /*
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
*/
  }
}
{
  /*removed blog={blog} instead used spread syntax instead got rid of .blog in the Card component */
}
