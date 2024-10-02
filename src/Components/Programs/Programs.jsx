import React from 'react';
import './Programs.css'
import program_1 from '../../assets/hci-images/pic-11.jpg'
import program_2 from '../../assets/hci-images/pic-6.jpg'
import program_3 from '../../assets/hci-images/pic-14.jpg'
import program_4 from '../../assets/hci-images/pic-4.jpg'
import program_icon_1 from '../../assets/hci-images/program-icon-1.png'
import program_icon_2 from '../../assets/hci-images/program-icon-2.png'
import program_icon_3 from '../../assets/hci-images/program-icon-3.png'


const Programs = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src={program_1} alt='' />
                <div className='caption'>
                    <img src={program_icon_1} alt='' />
                    <p>Certificate Courses</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_2} alt='' />
                <div className='caption'>
                    <img src={program_icon_2} alt='' />
                    <p>Diploma</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_3} alt='' />
                <div className='caption'>
                    <img src={program_icon_3} alt='' />
                    <p>Higher National Diploma</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_4} alt='' />
                <div className='caption'>
                    <img src={program_icon_3} alt='' />
                    <p>Short-Term Courses</p>
                </div>
            </div>
        </div>
    );
};

export default Programs;

