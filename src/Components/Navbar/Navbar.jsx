import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from '../../assets/hci-images/Logo-HCI.png';
import { Link } from "react-scroll";
import menu_icon from '../../assets/hci-images/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const handleMenuClick = () => {
        setMobileMenu(false);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <Link to="hero" smooth={true} offset={0} duration={500}>
                <img src={logo} alt="Logo" className='logo' />
            </Link>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li>
                    <Link to='hero' smooth={true} offset={0} duration={500} onClick={handleMenuClick}>HOME</Link>
                </li>
                <li>
                    <Link to='program' smooth={true} offset={-273} duration={500} onClick={handleMenuClick}>PROGRAMS</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} offset={-150} duration={500} onClick={handleMenuClick}>ABOUT</Link>
                </li>
                <li>
                    <Link to='campus' smooth={true} offset={-260} duration={500} onClick={handleMenuClick}>HCI INSTITUTION</Link>
                </li>
                <li>
                    <Link to='services' smooth={true} offset={-260} duration={500} onClick={handleMenuClick}>OUR SERVICES</Link>
                </li>
                <li>
                    <Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={handleMenuClick}>TESTIMONIALS</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={handleMenuClick}>CONTACT</Link>
                </li>
            </ul>
            <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
