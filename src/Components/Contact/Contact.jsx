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

        formData.append("access_key", "72461052-b773-4077-8e20-571286b1c444");

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
                    strive to provide exceptional service to our universal community.</p>
                <ul>
                    <li><img src={mail_icon} alt=""/> accessglobalgraphicdesign@gmail.com</li>
                    <li><img src={phone_icon} alt=""/>  +232 33152434</li>
                    <li><img src={phone_icon} alt=""/>  +232 99750186</li>
                    <li><img src={phone_icon} alt=""/>  +232 88497135</li>
                    <li><img src={location_icon} alt=""/> 555 Corner Kick, Waterloo, Head Office <br/>Sierra Leone</li>
                    <li><img src={location_icon} alt=""/> 8 Lunsar Road, Makeni, Branch Office <br/>Sierra Leone</li>
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