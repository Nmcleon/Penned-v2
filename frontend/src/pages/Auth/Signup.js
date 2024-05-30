import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../../firebase/firebase';
import './Auth.css';
import { Button } from '../../components/Button/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { uploadImage } from '../../firebase/firebaseUtils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      let imageUrl = '';
      if (file) {
        imageUrl = await uploadImage(file, user.uid);
      }

      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
        imageUrl,
        username: username || `${firstName} ${lastName}`,
      });

      navigate('/');
      toast.success('Sign up successful!');
    } catch (error) {
      toast.error('Error signing up:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            placeholder="e.g. Mike"
            pattern="[A-Za-zÀ-ž\s]{3,}"
            maxLength="35"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setUsername(e.target.value + ' ');
            }}
            required
          />
          <p className="form-help">
            First name should be at least 3 characters and only contains letters
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            placeholder="e.g. Smith"
            pattern="[A-Za-zÀ-ž\s]{3,}"
            maxLength="40"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setUsername(firstName + ' ' + e.target.value);
            }}
            required
          />
          <p className="form-help">
            Last name should be at least 3 characters and only contains letters
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="e.g. youremail@gmail.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            maxLength="55"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="upload-image">Upload Image</label>
          <input
            type="file"
            id="upload-image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Combined First and Last Name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
      <Button onClick={handleSignUp} type="submit">
        Sign Up
      </Button>
      <div className="secondary-links">
        <p className="signup-message">
          Don't have an account? <Link to="/Signin">Sign in</Link>
        </p>
        <p className="forgot-password">
          <Link to="/ForgotPassword">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}
