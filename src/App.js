import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import WelcomePage from './components/WelcomePage'; // Ensure this is imported from the correct path

function App() {
  return (
    <Router>
      <Routes>
        {/* Static route for the home page */}
        <Route path="/" element={<Home />} />
        
        {/* Static route for the menu page */}
        <Route path="/menu" element={<Menu />} />
        
        {/* Static route for the welcome page */}
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
