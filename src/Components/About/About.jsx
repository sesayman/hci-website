import React from 'react';
import './About.css'
import about_img from '../../assets/hci-images/pic-8.jpg'
import play_icon from '../../assets/hci-images/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img'/>
                <img src={play_icon} alt="" className='play-icon' onClick={()=>
                {setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <hr/>
                <h2>Our Vision Statement</h2>

                   <p> To train young people in both formal and informal sectors including women, to realize their professional aspirations by providing linking opportunities with potential employers who value their skills, knowledge and competence. We will achieve this by using cutting edge technology, passionate personnel and remaining resourceful to our beneficiaries and customers. We are driven by integrity, commitment, hard work, rewards and the zeal to excel.

                    In short, Human Capital Institute SL Ltd want to be known by its proposed guiding motto: “We’ve got a job to do, and we do it every day – for you!”</p>
                <h2>Our Mission Statement</h2>

                    <p>HCI-SL commits to meet and exceed beneficiaries/customer satisfaction by providing comprehensive world class business and individual development support services including, but not limited to human resources management consulting services & solutions. Dedicate ourselves to meet every client’s requirements and deadlines effectively. To achieve the status of being the most preferred partner in Sierra Leone for business/individual development support services including but not limited to outsource payroll administration, human resources management & organizational development solutions etc.</p>
                <h2>Our Strengths</h2>

                   <p> In-depth knowledge of its client’s industry and job<br/>
                    Outsourcing through our industries specialist<br/>
                    One contact through our Account Management Approach.<br/>
                    Competency Based Interviewing (through a competency design framework for all HCI-SL outsourced recruitment and selection process).<br/>
                    Ability to provide service in dynamic fast paced environment, excellent turnaround time for turn- key<br/>
                    A robust HRMIS infrastructure to back up all our
                    Thorough understanding of the local labor market and laws for various
                    One stop-shop solutions for all your HR pains and needs</p>
            </div>
        </div>
    );
};

export default About;