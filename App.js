import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/404';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/blogs/:id" element={<BlogDetails />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
