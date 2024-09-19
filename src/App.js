import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Help from './components/Pages/Help/Help';
import RecentlyViewed from './components/Pages/RecentlyViewed/RecentlyViewed';
import Signup from './components/Pages/Signup/SIgnup';
import Login from './components/Pages/Login/Login';

function App() {
  return (
    
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<Help />} />
      <Route path="/recently-viewed" element={<RecentlyViewed />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    
  </Router>
  );
}

export default App;
