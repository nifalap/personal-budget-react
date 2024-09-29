import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import Homepage from './Homepage/Homepage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';



function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Hero></Hero>

      <Routes>
        
        <Route path ="/" element={<Homepage />} />
        <Route path ="/about" element={<AboutPage />} />
        <Route path ="/login" element={<LoginPage />} />
        


      </Routes>
      <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
