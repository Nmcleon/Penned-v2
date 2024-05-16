import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import './Auth.css';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const newUser = {
        firstName,
        lastName,
        email,
        dob,
        password,
        imageUrl,
      };
      const response = await axios.post(
        'http://localhost:8000/api/register',
        newUser
      );
      navigate('/signin');
    } catch (error) {
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
        <button type="submit">
          <Link to="/">Sign In</Link>
        </button>
      </form>
    </div>
  );
}
