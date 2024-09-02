// Sidebar.js
import { FaUpload, FaTable, FaBell } from 'react-icons/fa'; // Icons from react-icons
import './css/Sidebar.css'; // Import the CSS file
import React, { useState } from "react";

const Sidebar = () => {


   // State to manage the sidebar visibility
   const [isSidebarOpen, setSidebarOpen] = useState(false);

   // Function to toggle the sidebar visibility
   const toggleSidebar = () => {
       setSidebarOpen(!isSidebarOpen);
   };





  return (

          <>
        <div className="app-container">
            {/* Button to toggle sidebar visibility */}
            <button className="toggle-btn" onClick={toggleSidebar}>
                ☰
            </button>
            
            {/* Sidebar with conditional class for active state */}
            <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li className="nav-item"><a href="/uploaddata" className="nav-link"><FaUpload className="icon" />Upload Data</a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><FaTable className="icon" />View Data</a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><FaBell className="icon" />Logs/Notifications</a></li>
                </ul>
            </div>
            
        </div>

      <div className="sidebar">
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/uploaddata" className="nav-link">
            <FaUpload className="icon" />
            Upload Data
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaTable className="icon" />
            View Data
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaBell className="icon" />
            Logs/Notifications
          </a>
        </li>
      </ul>
    </div>
        </>
  );
};

export default Sidebar;
