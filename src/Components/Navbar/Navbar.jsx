import React, {useEffect, useState} from 'react';
import "./Navbar.css"
import logo from '../../assets/hci-images/Logo-HCI.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
            window.addEventListener('scroll', () => {
                window.scrollY > 50 ? setSticky(true) : setSticky(false)
            })
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
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