// Article.js
import React from 'react';
import Placard from '../../components/Placard/Placard';
import Prompt from '../../components/Prompt/Prompt';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/CardSection/Card';
import Badge from '../../components/Badge/Badge';
import { useParams } from 'react-router-dom';
import useFetch from '../../customHook/useFetch';
import './Article.css';

export default function Article() {
  const { id } = useParams();
  const { data: blogs, isLoading, error } = useFetch('blogs');

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
          <img
            src={`${process.env.PUBLIC_URL}/images/${blog.image}`}
            alt={blog.title}
          />
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

{
  {
    /*
import React from 'react';
import Placard from '../../components/Placard/Placard';
import Prompt from '../../components/Prompt/Prompt';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/CardSection/Card';
import Badge from '../../components/Badge/Badge';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../customHook/useFetch';
import './Article.css';

export default function Article() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch('/data/db.json');

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const blog = data.blogs.find((blog) => blog.id === id);

  if (!blog) return <div>Blog not found</div>;

  const otherBlogs = data.blogs
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
          <img
            src={`${process.env.PUBLIC_URL}/images/${blog.image}`}
            alt={blog.title}
          />
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
*/
  }
}
