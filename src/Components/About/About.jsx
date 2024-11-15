import React from 'react';
import './About.css'
import about_img from '../../assets/hci-images/01.jpg'
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
                <h2>Graphics Design Makes Everything Beautiful...</h2>
                <hr/>
                <h2>Our Vision Statement</h2>

                   <p> To design and print the most beautiful graphical images for any occasion.

                    In short, Access Global Graphic Design want to be known by its proposed guiding motto: “We’ve got a job to do, and we do it every day – for you!”</p>
                <h2>Our Mission Statement</h2>

                    <p>We have the most beautiful graphical printing machines that is capable to print your everyday desire why won't you give it a try now visit <b>Access Global Graphic Design</b> <i>Head Office 555 Corner Kick Waterloo</i> and <i>Branch 8 Lunsar Road Makeni City</i></p>
                <h2>Our Strengths</h2>

                   <p> Professional handling of all printing and design graphics<br/>
                    Outsourcing through our industries specialist<br/>
                    Easy experience that is convenient and simple.<br/>
                  Broader landscape design and we print all types of design for your occasion.<br/>
                    Ability to provide service in dynamic fast paced environment, excellent turnaround time for your need<br/>
                    Easy and clear graphics that shows how beautiful your event will be and it brings long lasting memories
                    One stop-shop solutions for all your PRINTING problems and needs</p>
            </div>
        </div>
    );
};

export default About;