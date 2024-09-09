import { FaUpload, FaTable, FaBell } from 'react-icons/fa'; // Icons from react-icons
import './css/Sidebar.css'; // Import the CSS file
import React, { useState } from "react";
import { Link } from 'react-router-dom'; // For navigation

const Sidebar = () => {
  // State to manage the sidebar visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Button to toggle sidebar visibility */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? '✕' : '☰'}
      </button>
      
      {/* Sidebar with conditional class for active state */}
      <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/uploaddata" className="nav-link">
              <FaUpload className="icon" /> Upload Data
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewdata" className="nav-link">
              <FaTable className="icon" /> View Data
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logs" className="nav-link">
              <FaBell className="icon" /> Logs/Notifications
            </Link>
          </li>
        </ul>
      </aside>
      
      {/* Main content area */}
      <main className="main-content">
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;
