import React from 'react';
import "../Styles/Header.css";
import { Box, Paper } from '@mui/material';
import logo from "../Resources/logo.png";


function Hero() {
  return (
    <>
    <header className="hero">
        <div className="hero-content">
            <div className="hero-logo">
                <img 
                    src={logo}
                    alt="companyLogo"
                    style={{ width: '150px', height: '120px' }}>
                </img>
            </div>
            <div className="nav">
            <nav className="hero-nav">
                <ul className="hero-nav-list">
                    <li className="hero-nav-item">
                        <a href="#" className="hero-nav-link">
                            Home
                        </a>
                    </li>
                    <li className="hero-nav-item">
                        <a href="#" className="hero-nav-link">
                            Pages
                        </a>
                    </li>
                    <li className="hero-nav-item">
                        <a href="#" className="hero-nav-link">
                            Tracking
                        </a>
                    </li>
                    <li className="hero-nav-item">
                        <a href="#" className="hero-nav-link">
                            Services
                        </a>
                    </li>
                    <li className="hero-nav-item">
                        <a href="#" className="hero-nav-link">
                            Blog
                         </a>
                    </li>
                    <li className="hero-nav-item">
                        <button className="hero-button">Get a Quote</button>
                    </li>
                    <li className="hero-nav-item">
                        <button className="hero-button1">Sign In</button>
                    </li>
                </ul>
            </nav>
            </div>   
        </div>
    </header>
    </>
  );
}

export default Hero;
