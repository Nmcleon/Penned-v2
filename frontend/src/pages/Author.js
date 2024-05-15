import React from 'react';
import './Author.css';
import Footer from '../components/Footer/Footer';

export default function Author() {
  return (
    <>
      <section className="author">
        <div className="author-tag">
          <div className="author-img">
            <img src={'/images/rivian.jpg'} />
          </div>
          <div className="author-details">
            <div className="author-name">
              <h1>Hey, I'm Young King, welcome to my blog</h1>
            </div>
            <div className="author-social"> </div>
          </div>
        </div>

        <div className="my-posts">
          <h2>My Posts</h2>
          <div className="my-posts-content"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
