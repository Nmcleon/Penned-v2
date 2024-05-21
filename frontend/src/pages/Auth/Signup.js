import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../../firebase/firebase';
import './Auth.css';
import { Button } from '../../components/Button/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await db.collection('users').doc(user.uid).set({
        firstName,
        lastName,
        email,
        dob,
        imageUrl,
      });

      navigate('/');
      toast.success('Sign up successful!');
    } catch (error) {
      setError('Error signing up: ' + error.message);
      console.error('Error signing up:', error);
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
            onChange={(e) => setFirstName(e.target.value)}
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
            onChange={(e) => setLastName(e.target.value)}
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
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
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
            onChange={(e) =>
              setImageUrl(URL.createObjectURL(e.target.files[0]))
            }
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="button-container">
          <Button onClick={handleSignUp}>Sign up</Button>
        </div>
      </form>
      <p className="signin-message">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
      <ToastContainer />
    </div>
  );
}
