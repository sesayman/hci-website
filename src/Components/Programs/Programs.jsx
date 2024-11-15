import React from 'react';
import './Programs.css'
import program_1 from '../../assets/hci-images/03.png'
import program_2 from '../../assets/hci-images/02.jpg'
import program_3 from '../../assets/hci-images/06.png'
import program_4 from '../../assets/hci-images/04.jpg'
import program_5 from '../../assets/hci-images/07.jpg'
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
                    <p>Banner Printing</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_2} alt='' />
                <div className='caption'>
                    <img src={program_icon_2} alt='' />
                    <p>Sticker Printing</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_3} alt='' />
                <div className='caption'>
                    <img src={program_icon_3} alt='' />
                    <p>T-Shirt Printing</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_4} alt='' />
                <div className='caption'>
                    <img src={program_icon_3} alt='' />
                    <p>Canvas Printing</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_5} alt='' />
                <div className='caption'>
                    <img src={program_icon_3} alt='' />
                    <p>DTF Printing</p>
                </div>
            </div>
        </div>
    );
};

export default Programs;

