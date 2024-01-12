import React from 'react';
import Logo from './Logo.png'; // Ensure this is the correct path to your logo file

function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-menu">
        <a href="#home">Home</a>
        <a href="#about-us">About us</a>
        <a href="#services">Services we offer</a>
        <a href="#Testimonials">Testimonials</a>
        <a href="#contactus">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
