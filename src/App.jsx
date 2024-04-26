import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, Container, Box } from '@mui/material';
import MainPage from './components/MainPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Lab_4 from './Labs/Lab_4';
import Lab_5_6 from './Labs/Lab_5-6';
import NavigationComponent from './components/NavigationBar';
import CustomThemeProvider from './components/CustomThemeProvider';
import Footer from './components/Footer';

const App = () => {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh' // Установите минимальную высоту вьюпорта
      }}>
        <NavigationComponent />
        <Container component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/Lab_4" element={<Lab_4 />} />
            <Route path="/Lab_5-6" element={<Lab_5_6 />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </CustomThemeProvider>
  );
};

export default App;
