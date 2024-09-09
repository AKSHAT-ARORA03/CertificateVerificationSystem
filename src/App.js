import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/pages/Home';
import { AdminHome } from './components/pages/AdminHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UploadData } from './components/pages/UploadData';
import { Certificate } from './components/pages/Certificate';
import { Login } from './components/auth/Login';
import { Profile } from './components/auth/Profile'; // Import Profile component
import { Register } from './components/auth/Register';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AdminHome />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/uploaddata" element={<UploadData />} />
          <Route exact path="/certificate" element={<Certificate />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
