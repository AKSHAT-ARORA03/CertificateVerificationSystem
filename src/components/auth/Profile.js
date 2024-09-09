import React from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './css-login/Profile.css';

export const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigate('/login'); // Redirect to login page after logout
      })
      .catch(error => console.error(error));
  };

  const user = auth.currentUser;

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h1>Profile</h1>
        {user ? (
          <div>
            <img src={user.photoURL || '/default-avatar.png'} alt="Profile" className="profile-picture" />
            <p>{user.displayName || 'User'}</p>
            <p>{user.email}</p>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
        ) : (
          <p>No user logged in</p>
        )}
      </div>
    </div>
  );
};
