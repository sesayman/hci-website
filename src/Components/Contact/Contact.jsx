import React from 'react';
import './Contact.css'
import msg_icon from '../../assets/hci-images/msg-icon.png'
import mail_icon from '../../assets/hci-images/mail-icon.png'
import phone_icon from '../../assets/hci-images/phone-icon.png'
import location_icon from '../../assets/hci-images/location-icon.png'
import white_arrow from '../../assets/hci-images/white-arrow.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt=""/></h3>
                <p>Feel free to reach out through contact form or find our contact information below.
                Your feedback, questions, and suggestions are important to us as we
                    strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt=""/> conta`ct</li>
                    <li><img src={phone_icon} alt=""/> +23278764563</li>
                    <li><img src={location_icon} alt=""/> 12 Upper Brook Street, Freetown <br/>Sierra Leone</li>
                </ul>
            </div>
            <div className="contact-col">
                <form action="">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label htmlFor="">Phone Number</label>
                    <input type="text" name='name' placeholder='Enter your Phone Number' required />
                    <label htmlFor="">Write your Message here</label>
                    <textarea name="message"  rows="6" placeholder='Enter your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
                </form>
            </div>

        </div>
    );
};

export default Contact;