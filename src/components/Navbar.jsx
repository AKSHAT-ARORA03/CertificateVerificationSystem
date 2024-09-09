import React, { useState, useEffect } from 'react';
import './css/Navbar.css';
import logo from '../assets/Certified.png'; // Ensure image path is correct
import { auth } from '../firebase'; // Adjust path if necessary

export const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        auth.signOut().then(() => {
            window.location.href = '/login'; // Redirect to login page after logout
        });
    };

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Certificate Logo" />
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="/">Admin Home</a></li>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/uploaddata">Upload Data</a></li>
                        <li><a href="/certificate">Certificate</a></li>
                        {!user ? (
                            <>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/register">Register</a></li>
                            </>
                        ) : null}
                    </ul>
                </nav>
                {user && (
                    <div className="user-info">
                        <img src={user.photoURL || 'default-profile.png'} alt="Profile" className="profile-picture" />
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
};
