import React from "react";
import { FaSearch } from 'react-icons/fa';
import '../css/Home.css';

export const Home = () =>{
    return (

        <>
        <div className="writeup">
            <p>Get your certificate</p>
        </div>
        <div className="search-bar-container">
            <input 
                type="text" 
                className="search-input" 
                placeholder="Write your unique id..."
            />
            <button className="search-button">
                <FaSearch /> {/* Search icon inside the button */}
            </button>
        </div>
        </>
    );
}