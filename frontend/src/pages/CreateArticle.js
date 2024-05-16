import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import './CreateArticle.css';

export default function CreateArticle() {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [subtopic1, setSubtopic1] = useState('');
  const [details1, setDetails1] = useState('');
  const [subtopic2, setSubtopic2] = useState('');
  const [details2, setDetails2] = useState('');
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      title,
      image: img,
      tags,
      date: new Date().toLocaleDateString(), // Get current date
      sections: [
        { subtopic: subtopic1, details: details1 },
        ...(subtopic2 ? [{ subtopic: subtopic2, details: details2 }] : []),
      ],
    };
    console.log('Article Created:', JSON.stringify(article, null, 2));
    // Logic to send the article data to the server
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
          <div className="form-group">
            <label>Tags</label>
            <input
              type="text"
              value={tags.join(',')}
              onChange={(e) => setTags(e.target.value.split(','))}
            />
          </div>

          <button type="submit">Create Article</button>
        </form>
      </section>
      <Footer />
    </>
  );
}
