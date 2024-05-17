import React from 'react';
import "../Styles/Footer.css";
import CustomerImg1 from "../Resources/1.jpg"
import CustomerImg2 from "../Resources/2.jpg"
import CustomerImg3 from "../Resources/3.jpg"
import CustomerImg4 from "../Resources/4.jpg"
import CustomerImg5 from "../Resources/5.jpg"
import CustomerImg6 from "../Resources/6.jpg"
import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiGlobe,
    FiYoutube,
  } from "react-icons/fi";
  
  const socialLinks = [
    {
      id: 1,
      icon: <FiGlobe />,
      url: "https://www.stoman.me/",
    },
    {
      id: 2,
      icon: <FiGithub />,
      url: "https://github.com/",
    },
    {
      id: 3,
      icon: <FiTwitter />,
      url: "https://twitter.com/",
    },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/",
    },
    {
      id: 5,
      icon: <FiYoutube />,
      url: "https://www.youtube.com/c/",
    },
  ];

const Footer = () => {
  return (
    <footer className='Footer'>
        <div className="container">
            <div className='column'>
                <div className="section">
                    <h1>Subscribe to Our Newsletter</h1>
                </div>
            </div>
            <div className='column'>
                <div className="section">
                    <input type="email" placeholder="Enter Your Mail" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <br />
        <div className="container">
            <div className="column">
                <div className="section">
                    <h3>About Us</h3>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <br/>
                    <img src="https://images.rawpixel.com/dark_image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdHAyNDktMDcta3p4bHVsMzkucG5n.png" style={{width:"16px",height:"16px",margin:"3px"}}/>
                    <a href="tel:+94114347575">  (+94) 11 434 7575</a>
                    <br />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtbdwk5X7pYM9AtTkEX04JUTW82C7SSemCIDi7wPUmw&s" style={{width:"16px",height:"16px",margin:"5px"}}/>
                    <a href="mailto:support@example.com">  support@example.com</a>
                </div>
            </div>
            <div className="column">
                <div className="section">
                    <h3>Latest News</h3>
                    <hr/>
                    <ul>
                        <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a><br/><p style={{color:"orange"}}>5 minutes ago.</p></li>
                        <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a><br/><p style={{color:"orange"}}>5 minutes ago.</p></li>
                    </ul>
                </div>
            </div>
            <div className="column">
                <div className="section">
                    <h3>Customer Service</h3>
                    <hr/>
                    <ul>
                        <li><a href="">Support Fourums</a></li>
                        <li><a href="">Communiction</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Rules & Conditions</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="column">
                <div className="section">
                    <h3>Customer Service</h3>
                    <hr/>
                    <div class="row"> 
                        <div class="column1">
                            <img src={CustomerImg1} />
                            <img src={CustomerImg2} />
                            <img src={CustomerImg3} />
                            <img src={CustomerImg4} />
                            <img src={CustomerImg5} />
                            <img src={CustomerImg6} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className='copyright'>
                <p>
                    Copyright © 2021 All Rights Reserved. Site By Xiteb
                    <br />
                    <a href="#">Privacy Policy</a> | <a href="#">Rules & Condition</a>
                </p>
            </div>
            <div className='social-links'>
                <ul>
                    {socialLinks.map((link) => (
                        <a
                            href={link.url}
                            target="__blank"
                            key={link.id}
                        >
                            <i>{link.icon}</i>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
