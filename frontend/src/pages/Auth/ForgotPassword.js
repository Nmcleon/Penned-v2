import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <div>
      <div className="auth-container">
        <h2>Forgot Passsword</h2>
        <form>
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
          <Button onClick={''}>Send reset password</Button>
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
