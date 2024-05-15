import React, { useState } from 'react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [subtitle1, setSubtitle1] = useState('');
  const [content1, setContent1] = useState('');
  const [subtitle2, setSubtitle2] = useState('');
  const [content2, setContent2] = useState('');

  const handlePublish = () => {
    // Logic to publish the post goes here
    console.log('Post published!');
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Image URL:</label>
      <input
        type="text"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <br />
      <label>Subtitle 1:</label>
      <input
        type="text"
        value={subtitle1}
        onChange={(e) => setSubtitle1(e.target.value)}
      />
      <br />
      <label>Content 1:</label>
      <textarea
        value={content1}
        onChange={(e) => setContent1(e.target.value)}
      ></textarea>
      <br />
      <label>Subtitle 2 (Optional):</label>
      <input
        type="text"
        value={subtitle2}
        onChange={(e) => setSubtitle2(e.target.value)}
      />
      <br />
      <label>Content 2 (Optional):</label>
      <textarea
        value={content2}
        onChange={(e) => setContent2(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
}
