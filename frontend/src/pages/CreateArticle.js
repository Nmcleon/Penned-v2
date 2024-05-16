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
  const [authorName, setAuthorName] = useState('');
  const [authorImg, setAuthorImg] = useState(null);
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      title,
      image: img,
      tags,
      publishedAt: new Date().toISOString(),
      author: {
        name: authorName,
        image: authorImg,
      },
      sections: [
        { subtopic: subtopic1, details: details1 },
        ...(subtopic2 ? [{ subtopic: subtopic2, details: details2 }] : []),
      ],
    };

    console.log('Article Created:', JSON.stringify(blog, null, 2));

    try {
      const response = await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });

      if (!response.ok) {
        throw new Error('Failed to create article');
      }

      const data = await response.json();
      console.log('Article created successfully:', data);
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  const handleAuthorImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAuthorImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
          <div className="form-group">
            <label>Author Name</label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Author Image</label>
            <input
              type="file"
              onChange={handleAuthorImageUpload}
              accept="image/*"
              required
            />
          </div>

          <button type="submit">Create Article</button>
        </form>
      </section>
      <Footer />
    </>
  );
}
