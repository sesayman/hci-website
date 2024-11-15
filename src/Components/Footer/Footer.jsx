import React from 'react';
import './Footer.css';
import CurrentYear from "../CurrentYear/CurrentYear.jsx";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton.jsx";
import {  FaWhatsapp, FaMailBulk } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                {/* Left Section */}
                <div className='footer-left'>
                    <p>Copyright ©<CurrentYear /> All Rights Reserved. </p>
                    <p>ACCESS GLOBAL GRAPHIC DESIGN</p>
                </div>

                {/* Center Section */}
                <div className='footer-center'>
                    <p>We assist Businesses, Organisations, Schools, Institutions, Communities to transform their ideas using our professional services and long-term experience; you only need to trust us.</p>
                    <h3><b>Head Office</b> 555 Corner Kick, Waterloo <br/>
                    <b>Branch Office</b> 8 Lunsar Road, Makeni <br/>
                        Sierra Leone</h3>
                    <h4>(+232) 33152434</h4>
                    <h4>(+232) 99750186</h4>
                    <h4>(+232) 88497135</h4>
                    <h5>accessglobalgraphicdesign@gmail.com</h5>
                </div>

                {/* Right Section */}
                <div className='footer-right'>
                    <ScrollToTopButton />
                    <div className="footer-icons">
                        <ul>
                            <li><a className="email-link"
                                   href=
                                       "mailto:info.accessglobalgraphicdesign@gmail.com?subject=Inquiry&body=Hello, I would like to know more about your printing business Email
                                Us" target="_blank" rel="noopener noreferrer"><FaMailBulk /></a></li>
                            <li><a href="https://wa.me/232 33 152434" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
