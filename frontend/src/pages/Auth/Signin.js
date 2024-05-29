import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import './Auth.css';
import { Button } from '../../components/Button/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      toast.error('Invalid email or password');
      console.error('Error signing in:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignIn(e);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
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
            onKeyPress={handleKeyPress}
            required
          />
        </div>
      </form>
      <div> {error && <p className="error-message">{error}</p>}</div>
      <div className="button-container">
        <Button onClick={handleSignIn}>Sign in</Button>
      </div>
      <div className="secondary-links">
        <p className="signup-message">
          Don't have an account? <Link to="/Signup">Sign Up</Link>
        </p>
        <p className="forgot-password">
          <Link to="/ForgotPassword">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}
