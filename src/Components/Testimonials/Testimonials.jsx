import React, { useRef, useEffect, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/hci-images/next-icon.png';
import back_icon from '../../assets/hci-images/back-icon.png';
import user_1 from '../../assets/hci-images/user-1.png';
import user_2 from '../../assets/hci-images/user-2.png';
import user_3 from '../../assets/hci-images/user-3.png';
import user_4 from '../../assets/hci-images/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        { user: user_1, name: "William Sesay", location: "Freetown, Sierra Leone", text: "Choosing to pursue my degree at Human Resource Institute was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." },
        { user: user_2, name: "Amadu Bah", location: "Freetown, Sierra Leone", text: "Choosing to pursue my degree at Human Resource Institute was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." },
        { user: user_3, name: "Mary Conteh", location: "Freetown, Sierra Leone", text: "Choosing to pursue my degree at Human Resource Institute was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." },
        { user: user_4, name: "Josephine", location: "Freetown, Sierra Leone", text: "Choosing to pursue my degree at Human Resource Institute was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            slideForward();
        }, 3000); // Change slide every 20 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    const slideForward = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % testimonials.length;
            slider.current.style.transform = `translateX(-${newIndex * 50}%)`; // Update the transform
            return newIndex;
        });
    };

    const slideBackward = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + testimonials.length) % testimonials.length; // Loop to the end
            slider.current.style.transform = `translateX(-${newIndex * 50}%)`; // Update the transform
            return newIndex;
        });
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        slider.current.style.transform = `translateX(-${index * 50}%)`; // Update the transform
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    {testimonials.map((testimonial, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={testimonial.user} alt="" />
                                    <div>
                                        <h3>{testimonial.name}</h3>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                                <p>{testimonial.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
