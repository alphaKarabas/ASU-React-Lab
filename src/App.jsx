import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, Container, Box } from '@mui/material';
import NavigationComponent from './components/NavigationBar';
import CustomThemeProvider from './components/CustomThemeProvider';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Lab_4 from './Labs/HooksExamples';
import Lab_5_6 from './Labs/FormsExamples';
import TableExamples from './Labs/TableExamples';
import { auth } from './store/UserSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(auth());
  }, [dispatch]);
  return (
    <CustomThemeProvider>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <NavigationComponent />
        <Container component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/Lab_4" element={<Lab_4 />} />
            <Route path="/Lab_5-6" element={<Lab_5_6 />} />
            <Route path="/Lab_8" element={<TableExamples />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </CustomThemeProvider>
  );
};

export default App;
