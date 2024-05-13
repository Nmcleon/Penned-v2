import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import './Home.css';
import Search from '../Search/Search';
import Card from '../CardSection/Card';
import Prompt from '../Prompt/Prompt';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Search />
      <div className="trending">
        <h2>Trending</h2>
        <div className="content">
          <Card />
          <Card />
        </div>
      </div>

      <div className="new">
        <h2>New</h2>
        <div className="content">
          <Card />
          <Card />
        </div>
      </div>
      <Prompt />
      <Footer />
    </>
  );
}

export default Home;
