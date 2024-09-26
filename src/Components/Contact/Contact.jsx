import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/hci-images/msg-icon.png'
import mail_icon from '../../assets/hci-images/mail-icon.png'
import phone_icon from '../../assets/hci-images/phone-icon.png'
import location_icon from '../../assets/hci-images/location-icon.png'
import white_arrow from '../../assets/hci-images/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "66181034-42e6-4ad2-9378-0834d672b856");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt=""/></h3>
                <p>Feel free to reach out through contact form or find our contact information below.
                    Your feedback, questions, and suggestions are important to us as we
                    strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt=""/> contact</li>
                    <li><img src={phone_icon} alt=""/> +23278764563</li>
                    <li><img src={location_icon} alt=""/> 12 Upper Brook Street, Freetown <br/>Sierra Leone</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your Phone Number' required/>
                    <label htmlFor="">Write your Message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    );
};

export default Contact;