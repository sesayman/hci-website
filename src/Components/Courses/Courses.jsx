import React from 'react';
import './Courses.css';

const Courses = () => {
    return (
        <div className="courses-container">
            <div className="courses">
                <h4>WHAT WE OFFER</h4>
                <p>These are the various Graphics Design we offer:</p>
                <ul>
                    {[
                        "Banner Printing",
                        "Sticker Printing",
                        "T-Shirt and Cap Printing",
                        "DTF Printing",
                        "Canvas Printing",
                        " Wooden Frame",
                        "Typing and Printing",
                        "Customized Birthday Cards",
                        "Banners Design",
                        " Logo Design",
                        "Letter Heads",
                        "Wedding Souvenir ",
                        "Complimentary Cards ",
                        "Menus ",
                        "Receipt Book",
                        "Picture Printings",
                        "Tickets",
                        "Application Forms",
                        "Cups and Mugs Printing ",
                        "Laminating",
                        "Personalised Pillow case ",
                        "Customised Accessories Designs ",
                        "Responsive Website Designs ",
                        "Add QR Codes Video on your Canvas Frame ",
                        "University Online Application for all Universities and Colleges ",
                        "We sells Scratch Cards and Check Results for NPSE, BECE and WASSCE Examinations ",
                        "We do Private Wassce Entries",
                        "We do All Money transfers Ria, BnB, Western Union, Afro, MoneyGram, World Remit, EDSA Credits, OrangeMoney, AfriMoney, Qmoney"
                    ].map((course, index) => (
                        <li key={index}>{index + 1}. {course}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Courses;
