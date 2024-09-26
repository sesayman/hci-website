import React, {useRef} from 'react';
import './Testimonials.css'
import next_icon from '../../assets/hci-images/next-icon.png'
import back_icon from '../../assets/hci-images/back-icon.png'
import user_1 from '../../assets/hci-images/user-1.png'
import user_2 from '../../assets/hci-images/user-2.png'
import user_3 from '../../assets/hci-images/user-3.png'
import user_4 from '../../assets/hci-images/user-4.png'



const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt=""/>
                                <div className="">
                                    <h3>William Sesay</h3>
                                    <span>Freetown, Sierra Leone</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Human
                                Resource Institute was one of the best decisions I've ever made.
                                The supportive community, state-of-the-art facilities,
                                and commitment to academic excellence have truly exceed my expectations.</p>
                        </div>

                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt=""/>
                                <div className="">
                                    <h3>Amadu Bah</h3>
                                    <span>Freetown, Sierra Leone</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Human
                                Resource Institute was one of the best decisions I've ever made.
                                The supportive community, state-of-the-art facilities,
                                and commitment to academic excellence have truly exceed my expectations.</p>
                        </div>

                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt=""/>
                                <div className="">
                                    <h3>Mary Conteh</h3>
                                    <span>Freetown, Sierra Leone</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Human
                                Resource Institute was one of the best decisions I've ever made.
                                The supportive community, state-of-the-art facilities,
                                and commitment to academic excellence have truly exceed my expectations.</p>
                        </div>

                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt=""/>
                                <div className="">
                                    <h3>Josephine Sankoh</h3>
                                    <span>Freetown, Sierra Leone</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Human
                                Resource Institute was one of the best decisions I've ever made.
                                The supportive community, state-of-the-art facilities,
                                and commitment to academic excellence have truly exceed my expectations.</p>
                        </div>

                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Testimonials;