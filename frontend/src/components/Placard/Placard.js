import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Placard.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default function Placard({ id }) {
  const [author, setAuthor] = useState(null);

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

  if (!author) {
    return null;
  }

  return (
    <div className="placard">
      <div className="placard-img">
        <img src={`/images/${author.image}`} alt={author.name} />
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
    /*
import React from 'react';
import { Link } from 'react-router-dom';
import './Placard.css';

export default function Placard({ author }) {
  if (!author) {
    return null;
  }

  return (
    <div className="placard">
      <div className="placard-img">
        <img src={`/images/${author.image}`} alt={author.name} />
      </div>
      <div className="placard-name">
        <h4>
          <Link to={`/author/${author.id}`}>{author.name}</Link>
        </h4>
      </div>
    </div>
  );
}
*/
  }
}
