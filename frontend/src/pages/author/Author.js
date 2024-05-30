import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Author.css';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/CardSection/Card';
import useFetch from '../../customHook/useFetch';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default function Author() {
  const { id } = useParams();
  const { data: blogs, isLoading, error } = useFetch('blogs');
  const [user, setUser] = useState(null);
  const [userArticles, setUserArticles] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', id));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser(userData);
          console.log('User Data:', userData);

          // Fetch user articles
          const blogsCollection = collection(db, 'blogs');
          const snapshot = await getDocs(blogsCollection);
          const userBlogs = snapshot.docs
            .map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
            .filter((blog) => blog.author.uid === id);
          setUserArticles(userBlogs);
          console.log('User Articles:', userBlogs);

          // Set image URL directly if it's provided
          if (userData.image) {
            setImageUrl(userData.image);
          } else {
            // Fetch user image from storage
            const storage = getStorage();
            const fetchImage = async (folder) => {
              const imageRef = ref(storage, `${folder}/${userData.image}`);
              try {
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
              } catch (error) {
                console.error(`Error fetching image from ${folder}:`, error);
                return false;
              }
              return true;
            };

            const found =
              (await fetchImage('uploads')) || (await fetchImage('images'));
            if (!found) {
              const defaultRef = ref(storage, 'images/default.png');
              try {
                const defaultUrl = await getDownloadURL(defaultRef);
                setImageUrl(defaultUrl);
              } catch (error) {
                console.error('Error fetching default image URL:', error);
                setImageUrl('/images/default.png');
              }
            }
          }
        } else {
          console.log('No such user!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (
      !blogs.find((blog) => blog.author.id === id || blog.author.uid === id)
    ) {
      fetchUserData();
    }
  }, [id, blogs]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const author = blogs.find(
    (blog) => blog.author.id === id || blog.author.uid === id
  )?.author;
  const authorArticles = blogs.filter(
    (blog) => blog.author.id === id || blog.author.uid === id
  );

  console.log('Blogs:', blogs);
  console.log('Author:', author);
  console.log('Author Articles:', authorArticles);

  if (!author && !user) return <div>Author not found</div>;

  const displayedAuthor = author || user;

  return (
    <>
      <section className="author">
        <div className="author-tag">
          <div className="author-img">
            <img
              src={displayedAuthor.image || imageUrl}
              alt={displayedAuthor.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/default.png';
              }}
            />
          </div>
          <div className="author-details">
            <div className="author-name">
              <h1>{`Hey, I'm ${displayedAuthor.name} welcome to my blog`}</h1>
            </div>
            <div className="author-social"> </div>
          </div>
        </div>

        <div className="my-posts">
          <h2>My Posts</h2>
        </div>
        <div className="my-posts-content">
          {(author ? authorArticles : userArticles).map((article) => (
            <Card key={article.id} {...article} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
