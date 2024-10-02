import React from 'react';
import './Hero.css'
import dark_arrow from '../../assets/hci-images/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h3>We specialize in professional</h3>
                <h1>Human Resource Management</h1>
                <p>we provide the best services in human resource management and administration in Sierra Leone.</p>
                <p>Transforming HR in Sierra Leone: embrace local talent, diversity, technology, well-being, and strong culture. Together, we can foster innovation, drive economic growth, and create a resilient workforce for the future!</p>
                <button className='btn set-btn'>Learn more <img src={dark_arrow} alt='' /></button>
                <p>Please <b>Subscribe </b>to our social media channels</p>
            </div>

        </div>
    );
};

export default Hero;