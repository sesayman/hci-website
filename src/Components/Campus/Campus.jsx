import React from 'react';
import './Campus.css'
import gallery_1 from '../../assets/hci-images/test-5.jpg'
import gallery_2 from '../../assets/hci-images/test-2.jpg'
import gallery_3 from '../../assets/hci-images/test-4.jpg'
import gallery_4 from '../../assets/hci-images/test-1.jpg'
import white_arrow from '../../assets/hci-images/white-arrow.png'

const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={gallery_1} alt=""/>
                <img src={gallery_2} alt=""/>
                <img src={gallery_3} alt=""/>
                <img src={gallery_4} alt=""/>
            </div>
            <button className='btn dark-btn'>See more here <img src={white_arrow} alt=""/></button>

        </div>
    );
};

export default Campus;