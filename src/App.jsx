import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import MainPage from './components/MainPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Lab_2 from './Labs/Lab_2';
import Lab_4 from './Labs/Lab_4';
import NavigationComponent from './components/NavigationBar';
import CustomThemeProvider from './components/CustomThemeProvider';

const App = () => {
  return (
    <>
      <CustomThemeProvider>
        <CssBaseline />
        <NavigationComponent />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Lab_2" element={<Lab_2 />} />
          <Route path="/Lab_4" element={<Lab_4 />} />
        </Routes>
      </CustomThemeProvider>
    </>
  );
};

export default App;
