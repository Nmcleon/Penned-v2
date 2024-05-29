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
            e.target.src = '/path/to/default/image.png';
          }}
        />
      </div>
      <div className="placard-name">
        <h4>
          <Link to={`/author/${author.id}`}>{author.name}</Link>
        </h4>
      </div>
    </div>
  );
}

{
  {
    /* (fetch img data from firebase)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Placard.css';
import { collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { db } from '../../firebase/firebase';

export default function Placard({ id }) {
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchAuthorData = async () => {
      const blogsCollection = collection(db, 'blogs');
      const snapshot = await getDocs(blogsCollection);
      const blogsList = snapshot.docs.map((doc) => ({
       ...doc.data(),
        id: doc.id,
      }));
      const blog = blogsList.find((blog) => blog.id === id);

      // Assuming the author's image path is stored in the document under 'image'
      const imagePath = blog?.author.image; // This should be the path relative to the root of your Firebase Storage

      // Fetch the image URL from Firebase Storage
      const storage = getStorage();
      const imageRef = ref(storage, `images/${imagePath}`);
      try {
        const imageUrl = await getDownloadURL(imageRef);
        setAuthor({...blog, imageUrl });
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Failed to fetch image:', error);
        setAuthor(null);
        setLoading(false); // Ensure loading is set to false even if there's an error
      }
    };

    fetchAuthorData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched
  }

  if (!author) {
    return null;
  }

  return (
    <div className="placard">
      <div className="placard-img">
        <img src={author.imageUrl} alt={author.author.name} />
      </div>
      <div className="placard-name">
        <h4>
          <Link to={`/author/${author.id}`}>{author.author.name}</Link>
        </h4>
      </div>
    </div>
  );*/
  }
}
