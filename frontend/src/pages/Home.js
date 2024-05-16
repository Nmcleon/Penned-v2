import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import './Home.css';
import Search from '../components/Search/Search';
import Prompt from '../components/Prompt/Prompt';
import Footer from '../components/Footer/Footer';
import CardElement from '../customHook/cardElement';

function Home() {
  return (
    <>
      <HeroSection />
      <Search />
      <div className="trending">
        <h2>Trending</h2>
        <div className="content">
          <CardElement />
        </div>
      </div>

      <div className="new">
        <h2>New</h2>
        <div className="content">
          <CardElement />
        </div>
      </div>
      <Prompt />
      <Footer />
    </>
  );
}

export default Home;
