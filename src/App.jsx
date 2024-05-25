import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import BackgroundImage from './components/parts/BackgroundImage';
import Body from './components/parts/Body';
import NotFound from './components/parts/NotFound';
import Navbar from './components/parts/Navbar';
import Footer from './components/parts/Footer';

function App() {
  return (
    // <div className='relative z-10'>
    <div>
      <BackgroundImage pauseTime={1000}/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div> 
  )
}

export default App;