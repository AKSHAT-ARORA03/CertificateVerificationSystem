import React from "react";
import Sidebar from "../Sidebar";
import '../css/AdminHome.css'; // Import the CSS file for styling

export const AdminHome = () => {
    return (
        <>
            <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flex: 1 }}>
                    <Sidebar />
                    <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                        {/* Main content goes here */}
                        <h1>Welcome to the Admin Page</h1>
                    </div>
                </div>
                <footer className="footer">
                    <p>Zidio Development Pvt Ltd</p>
                    <p>Made by Akshat Arora,Upal Noni,Goldy Kala</p>
                </footer>
            </div>
        </>
    );
};
