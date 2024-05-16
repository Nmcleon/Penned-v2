import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Author from './pages/Author';
import Article from './pages/Article';
import CreateArticle from './pages/CreateArticle';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Blogs" element={<Blogs />} />
          <Route exact path="/Author" element={<Author />} />
          <Route exact path="/Author/:id" element={<Author />} />
          <Route exact path="/Article" element={<Article />} />
          <Route exact path="/Article/:id" element={<Article />} />
          <Route exact path="/Create" element={<CreateArticle />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
