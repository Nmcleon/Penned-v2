import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  async function handleFrogot(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email successfully sent');
    } catch (error) {
      toast.error(`Couldn't send reset password`);
    }
  }

  return (
    <div>
      <div className="auth-container">
        <h2>Forgot Passsword</h2>
        <form onSubmit={handleFrogot}>
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
        </form>
        <div className="button-container">
          <Button onClick={handleFrogot}>Send reset password</Button>
        </div>
        <div className="secondary-links">
          <p className="signup-message">
            Don't have an account? <Link to="/Signup">Sign Up</Link>
          </p>
          <p className="forgot-password">
            <Link to="/Signin">Sign in instead?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
