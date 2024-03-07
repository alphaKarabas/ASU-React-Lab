import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Lab_2 from './Labs/Lab_2';
import NavigationComponent from './NavigationBar';

const App = () => {
  return (
    <>
      <NavigationComponent />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Lab_2" element={<Lab_2 />} />
      </Routes>
    </>
  );
};

export default App;
