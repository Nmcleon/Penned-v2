import React, { useState } from 'react';
import Prompt from '../components/Prompt/Prompt';
import Footer from '../components/Footer/Footer';
import './CreateArticle.css';

export default function CreateArticle() {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [subtopic1, setSubtopic1] = useState('');
  const [details1, setDetails1] = useState('');
  const [subtopic2, setSubtopic2] = useState('');
  const [details2, setDetails2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      title,
      img,
      subtopics: [
        { title: subtopic1, details: details1 },
        ...(subtopic2 ? [{ title: subtopic2, details: details2 }] : []),
      ],
    };
    console.log('Article Created:', JSON.stringify(article, null, 2)); // Safely stringify the article object
    // Add logic here to send this article object to a server if needed
  };

  return (
    <>
      <section className="create-article">
        <h1>Create Article</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Subtopic 1</label>
            <input
              type="text"
              value={subtopic1}
              onChange={(e) => setSubtopic1(e.target.value)}
              required
            />
            <label>Content 1</label>
            <textarea
              value={details1}
              onChange={(e) => setDetails1(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Subtopic 2 (Optional)</label>
            <input
              type="text"
              value={subtopic2}
              onChange={(e) => setSubtopic2(e.target.value)}
            />
            <label>Content 2 (Optional)</label>
            <textarea
              value={details2}
              onChange={(e) => setDetails2(e.target.value)}
            />
          </div>
          <button type="submit">Create Article</button>
        </form>
      </section>
      <Footer />
    </>
  );
}
