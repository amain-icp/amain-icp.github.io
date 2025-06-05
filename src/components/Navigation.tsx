import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/company-logo.png';
import searchIcon from '../assets/search-icon.svg';

const Navigation: React.FC = () => {
  return (
    <nav className="navbar-3part">
      <img src={logo} alt="Ace Tennis Academy Logo" className="company-logo" />
      <div className="nav-section nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/coaches">Coaches</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/search" className="search-link">
          <img src={searchIcon} alt="Search" aria-label="Search" className="search-icon" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation; 