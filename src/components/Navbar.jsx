import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        
      </div>
      <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/event">Event</Link>
            <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;