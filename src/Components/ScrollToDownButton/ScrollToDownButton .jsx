// ScrollToDownButton.js
import React, { useEffect, useState } from 'react';

const ScrollToDownButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        const isAtTop = window.scrollY === 0;
        setIsVisible(isAtTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToDown = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <button onClick={scrollToDown} style={buttonStyle}>
                ↓ Scroll to Bottom
            </button>
        )
    );
};

const buttonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
    zIndex: 1000,
};

export default ScrollToDownButton;
