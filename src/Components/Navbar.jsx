import React from "react";
import { useState } from "react";
import './Navbar.css';

function Navbar() {
	const [open, setOpen] = useState(false);

	return (
<nav className="nav">
  <div className="nav-container">
    {/* <a href="" className="logo">CFT<span>Hub</span></a> */}
    <a href="#" className="logo"> 
      <img src="./logo.png" alt="" />
    </a>

    <ul className={`nav-links ${open ? "open" : ""}`}>
      <li><a href="#learn-more">Features</a></li>
      {/* <li><a href="#">Pricing</a></li> */}
      <li><a href="#about_us">About Us</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>


    <div className="hamburger" onClick={() => setOpen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</nav>

	);
}

export default Navbar;
