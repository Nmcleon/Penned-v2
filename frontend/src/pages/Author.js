import React from 'react';
import { useParams } from 'react-router-dom';
import './Author.css';
import Footer from '../components/Footer/Footer';
import useFetch from '../customHook/useFetch';
import Card from '../components/CardSection/Card';

export default function Author() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch('/data/db.json');

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const author = data.blogs.find((blog) => blog.author.id === id)?.author;

  if (!author) return <div>Author not found</div>;

  const authorArticles = data.blogs.filter((blog) => blog.author.id === id);

  return (
    <>
      <section className="author">
        <div className="author-tag">
          <div className="author-img">
            <img src={`/images/${author.image}`} alt={author.name} />
          </div>
          <div className="author-details">
            <div className="author-name">
              <h1>{`Hey, I'm ${author.name} welcome to my blog`}</h1>
            </div>
            <div className="author-social"> </div>
          </div>
        </div>

        <div className="my-posts">
          <h2>My Posts</h2>
        </div>
        <div className="my-posts-content">
          {authorArticles.map((article) => (
            <Card key={article.id} {...article} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
