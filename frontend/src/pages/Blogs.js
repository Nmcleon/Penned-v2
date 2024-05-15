import React from 'react';
import Card from '../components/CardSection/Card';
import Prompt from '../components/Prompt/Prompt';
import Search from '../components/Search/Search';
import Footer from '../components/Footer/Footer';

export default function Blog() {
  return (
    <>
      <section className="blog">
        <Search />
        <div className="trending">
          <h2>Trending</h2>
          <div className="content">
            <Card />
            <Card />
          </div>
        </div>

        <div className="new">
          <h2>All Posts</h2>
          <div className="content">
            <Card />
            <Card />
          </div>
        </div>
        <Prompt />
        <Footer />
      </section>
    </>
  );
}
