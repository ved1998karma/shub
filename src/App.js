import './App.css';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Canvas from './components/Pages/Canvas';
import Apple from './components/Pages/Apple';
import MagicScroll from './components/Pages/MagicScroll';
import API from './components/Pages/API';
import Array from './components/Pages/ArrayMethods';
import HorizontalSlider from './components/Pages/HorizontalSlider';
import GsapSlider from './components/Pages/GsapSlider';
import ScrollAnimation from './components/Pages/ScrollAnimation';
import CustomSlider from './components/Pages/CustomSlider';
import HorizontalPage from './components/Pages/HorizontalPage';

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Canvas />} />
          <Route path="apple" element={<Apple />} />
          <Route path="mag" element={<MagicScroll />} />
          <Route path="api" element={<API />} />
          <Route path="arr" element={<Array />} />
          <Route path="slider" element={<HorizontalSlider />} />
          <Route path="gsap" element={<GsapSlider />} />
          <Route path="scrollani" element={<ScrollAnimation />} />
          <Route path="slidercustom" element={<CustomSlider />} />
          <Route path="horizontalPage" element={<HorizontalPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
