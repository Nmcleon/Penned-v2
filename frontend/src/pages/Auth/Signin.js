import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import './Auth.css';
import { Button } from '../../components/Button/Button';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(username, password);
      navigate('/');
    } catch (error) {
      setError('Invalid username or password');
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        {error && <p className="error-message">{error}</p>}
        <div className="button-container">
          <Button type="submit">Sign in</Button>
        </div>
      </form>
      <p className="signup-message">
        Don't have an account? <Link to="/Signup">Sign Up</Link>
      </p>
    </div>
  );
}
