import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="https://i.ibb.co/HKMR9F8/maplocally.png" alt="Logo" className="logo" />
      </div>

      <nav className="navbar-nav">
        <ul>
          <li>
            <NavLink to="/help" activeclassname="active">Help</NavLink>
          </li>
          <li>
            <NavLink to="/recently-viewed" activeclassname="active">Recently Viewed</NavLink>
          </li>
          <li>
            <NavLink to="/signup" activeclassname="active">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeclassname="active">
              <button className="login-btn">Log In</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
