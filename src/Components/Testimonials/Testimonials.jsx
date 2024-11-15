import React, { useRef, useEffect, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/hci-images/next-icon.png';
import back_icon from '../../assets/hci-images/back-icon.png';
import user_1 from '../../assets/hci-images/test-1.jpg';
import user_2 from '../../assets/hci-images/test-2.jpg';
import user_3 from '../../assets/hci-images/test-3.jpg';
import user_4 from '../../assets/hci-images/test-4.jpg';
import user_5 from '../../assets/hci-images/test-5.jpg';
import user_6 from '../../assets/hci-images/test-6.jpg';
import user_7 from '../../assets/hci-images/test-7.jpg';

const Testimonials = () => {
    const slider = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        { user: user_1, name: "William Sesay", location: "Makeni, Sierra Leone", text: "Choosing to work with Access Global Graphic Design was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to professional graphics have truly exceeded my expectations." },
        { user: user_2, name: "Amadu Bah", location: "Freetown, Sierra Leone", text: "One of the best decisions I've ever made was choosing Access Global Graphic Design. The state-of-the-art facilities, supportive community, and commitment to professional graphics  have truly exceeded my expectations." },
        { user: user_3, name: "Mary Conteh", location: "Waterloo, Sierra Leone", text: "I can confidently say that pursuing my customised design with Access Global Graphic Design was one of the best decisions I've ever made. The supportive community, commitment to professional graphics , and state-of-the-art facilities have truly exceeded my expectations." },
        { user: user_4, name: "Josephine", location: "Freetown, Sierra Leone", text: "Pursuing my desires at Access Global Graphic Design was undoubtedly one of the best decisions I've made. The state-of-the-art facilities, commitment to professional graphics , and supportive community have truly exceeded my expectations." },
        { user: user_5, name: "Abdulai Sesay", location: "Makeni, Sierra Leone", text: "One of my best decisions has been choosing to choose to work with Access Global Graphic Design. The commitment to professional graphics , state-of-the-art facilities, and supportive community have truly exceeded my expectations." },
        { user: user_6, name: "Josephine", location: "Makeni, Sierra Leone", text: "Choosing Access Global Graphic Design stands out as one of my best decisions. The supportive community, state-of-the-art facilities, and commitment to professional graphics  have truly exceeded my expectations." },
        { user: user_7, name: "Josephine", location: "Waterloo, Sierra Leone", text: "I choose Access Global Graphic Design for my graphic design was one of the best decisions I've ever made. The commitment to professional graphics , state-of-the-art facilities, and supportive community have truly exceeded my expectations." },
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
            slider.current.style.transform = `translateX(-${newIndex * 17}%)`; // Update the transform
            return newIndex;
        });
    };

    const slideBackward = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + testimonials.length) % testimonials.length; // Loop to the end
            slider.current.style.transform = `translateX(-${newIndex * 17}%)`; // Update the transform
            return newIndex;
        });
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        slider.current.style.transform = `translateX(-${index * 17}%)`; // Update the transform
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
