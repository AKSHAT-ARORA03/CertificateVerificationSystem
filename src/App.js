
import './App.css';
import { Navbar  } from './components/Navbar';
import { Home } from './components/pages/Home';
import { AdminHome } from './components/pages/AdminHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UploadData } from './components/pages/UploadData';
import { Certificate } from './components/pages/Certificate';

function App() {
  return (

    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AdminHome/>} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/uploaddata" element={<UploadData />} />
        <Route exact path="/certificate" element={<Certificate />} />

        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
