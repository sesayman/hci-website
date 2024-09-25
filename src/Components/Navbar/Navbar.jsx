import React from 'react';
import "./Navbar.css"
import logo from '../../assets/hci-images/Logo-HCI.png'

const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt='' />
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>HCI INSTITUTION</li>
                <li>PROGRAMS</li>
                <li>OUR SERVICES</li>
                <li>TESTIMONIES</li>
                <li> <button className='btn'>CONTACT US</button></li>
            </ul>

        </nav>
    );
};

export default Navbar;