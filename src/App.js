import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage'; 
import SignUpPage from './components/CustomerPortal/SignUpPage/SignUpPage'; 
import HomePage from './components/CustomerPortal/HomePage/HomePage';
import MenuCard from './components/CustomerPortal/MenuCard/MenuCard';
import ContactPage from './components/CustomerPortal/ContactPage/ContactPage'; // Import the ContactPage
import TestimonialsPage from './components/CustomerPortal/Testimonials/Testimonials'; // Correct import path and name

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<MenuCard />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} /> {/* Route for ContactPage */}
        <Route path="/testimonials" element={<TestimonialsPage />} /> {/* Route for TestimonialsPage */}
      </Routes>
    </Router>
  );
}

export default App;
