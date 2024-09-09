import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './css-login/Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // State to store user info
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        navigate('/profile'); // Redirect to profile page if logged in
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [navigate]);

  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
      .then(result => {
        setUser(result.user);
        navigate('/profile');
      })
      .catch(error => console.error(error));
  };

  const signInWithEmail = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        setUser(result.user);
        navigate('/profile');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        {!user ? (
          <>
            <form onSubmit={signInWithEmail}>
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
              <button type="submit">Login with Email</button>
            </form>
            <button onClick={signInWithGoogle}>Login with Google</button>
          </>
        ) : (
          <div>
            <p>Already logged in</p>
            <img src={user.photoURL || '/default-avatar.png'} alt="Profile" className="profile-picture" />
          </div>
        )}
      </div>
    </div>
  );
};
