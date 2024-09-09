import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './css-login/Register.css';  // Import the Register CSS

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Register with email and password
  const registerWithEmail = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  // Register with Google
  const registerWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
      .then(result => {
        console.log('Google sign-in successful:', result.user);
        navigate('/');
      })
      .catch(error => console.error('Google sign-in error:', error));
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        <form onSubmit={registerWithEmail}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <button onClick={registerWithGoogle} className="google-login">
          Register with Google
        </button>
      </div>
    </div>
  );
};
