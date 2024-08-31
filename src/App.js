import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/CustomerPortal/Login/LoginPage'; 
import SignUpPage from './components/CustomerPortal/SignUpPage/SignUpPage'; 
import HomePage from './components/CustomerPortal/HomePage/HomePage';
import MenuCard from './components/CustomerPortal/MyOrder/MenuCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<MenuCard />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
