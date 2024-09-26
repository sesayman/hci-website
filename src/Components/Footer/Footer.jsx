import React from 'react';
import './Footer.css'
import CurrentYear from "../CurrentYear/CurrentYear.jsx";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton.jsx";



const Footer = () => {
    return (
        <div className='footer'>
            <p>Copyright ©<CurrentYear /></p>
                  <p>HUMAN CAPITAL INSTITUTE SIERRA LEONE.</p>
                  <p>All rights reserved</p>
            <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
                <ScrollToTopButton />
                {/*<ScrollToDownButton />*/}
            </ul>
        </div>
    );
};


export default Footer;