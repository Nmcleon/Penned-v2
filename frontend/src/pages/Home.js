import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import './Home.css';
import Search from '../components/Search/Search';
import Card from '../components/CardSection/Card';
import Prompt from '../components/Prompt/Prompt';
import Footer from '../components/Footer/Footer';

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
