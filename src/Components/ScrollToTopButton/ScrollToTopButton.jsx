// ScrollToTopButton.js
import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
        setIsVisible(isAtBottom);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <button onClick={scrollToTop} style={buttonStyle}>
                ↑ Scroll to Top
            </button>
        )
    );
};

const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
    zIndex: 1000,
};
// Add media queries in a separate CSS file or in a style tag
const mediaQueryStyle = `
    @media (max-width: 600px) {
        button {
            padding: 3px;
            font-size: 10px; // Smaller font size for small screens
        }
    }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyle;
document.head.appendChild(styleSheet);

export default ScrollToTopButton;
