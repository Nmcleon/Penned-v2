import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Placard.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default function Placard({ id }) {
  const [author, setAuthor] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchAuthorData = async () => {
      const blogsCollection = collection(db, 'blogs');
      const snapshot = await getDocs(blogsCollection);
      const blogsList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const blog = blogsList.find((blog) => blog.id === id);
      setAuthor(blog?.author || null);
    };

    fetchAuthorData();
  }, [id]);

  useEffect(() => {
    if (author) {
      const fetchImage = async () => {
        const storage = getStorage();
        const imageRef = ref(storage, `uploads/${author.image}`);
        try {
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
        } catch (error) {
          console.error('Error fetching image URL:', error);
          setImageUrl(`/images/${author.image}`);
        }
      };

      fetchImage();
    }
  }, [author]);

  useEffect(() => {
    const fetchDefaultImage = async () => {
      if (imageUrl.includes('default.png')) {
        const storage = getStorage();
        const defaultImageRef = ref(storage, 'images/default.png');
        try {
          const defaultImageUrl = await getDownloadURL(defaultImageRef);
          setImageUrl(defaultImageUrl);
        } catch (error) {
          console.error('Error fetching default image URL:', error);
        }
      }
    };

    fetchDefaultImage();
  }, [imageUrl]);

  if (!author) {
    return null;
  }

  return (
    <div className="placard">
      <div className="placard-img">
        <img
          src={imageUrl}
          alt={author.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `/images/${author.image}`;
          }}
        />
      </div>
      <div className="placard-name">
        <h4>
          <Link to={`/author/${author.uid ? author.uid : author.id}`}>
            {author.name}
          </Link>
        </h4>
      </div>
    </div>
  );
}
