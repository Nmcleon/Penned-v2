import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import './Home.css';
import Search from '../components/Search/Search';
import Prompt from '../components/Prompt/Prompt';
import Footer from '../components/Footer/Footer';
import { cardElement } from '../customHook/cardElement';
import useFetch from '../customHook/useFetch';

function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');
  return (
    <>
      <HeroSection />
      <Search />
      <div className="trending">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        <h2>Trending</h2>
        <div className="content">{cardElement}</div>
      </div>

      <div className="new">
        <h2>New</h2>
        <div className="content">{cardElement}</div>
      </div>
      <Prompt />
      <Footer />
    </>
  );
}

export default Home;
