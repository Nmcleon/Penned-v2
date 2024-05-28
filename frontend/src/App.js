import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/Contact/Contact';
import Blogs from './pages/blogs/Blogs';
import Author from './pages/author/Author';
import Article from './pages/article/Article';
import CreateArticle from './pages/blogs/CreateArticle';
import SignIn from './pages/Auth/Signin';
import SignUp from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
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
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
