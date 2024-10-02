import React from 'react';
import './Footer.css';
import CurrentYear from "../CurrentYear/CurrentYear.jsx";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton.jsx";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                {/* Left Section */}
                <div className='footer-left'>
                    <p>Copyright ©<CurrentYear />All Rights Reserved. </p>
                    <p>HUMAN CAPITAL INSTITUTE SIERRA LEONE.</p>
                </div>

                {/* Center Section */}
                <div className='footer-center'>
                    <p>We assist Businesses transform using our professional techniques and long-term experience; you only need to trust us.</p>
                    <h3>18 Upper Brook Street,Freetown <br/>
                        Sierra Leone</h3>
                    <h4>(+232) 76 863 157 / 77 576 187</h4>
                    <h5>enquiries@hcisl.net</h5>
                </div>

                {/* Right Section */}
                <div className='footer-right'>
                    <ScrollToTopButton />
                    <div className="footer-icons">
                        <ul>
                            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                            <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
