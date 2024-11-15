import React from 'react';
import './Services.css'
import {
    faBalanceScale,
    faHandshake,
    faHome,
    faMoneyBill,
    faProcedures,
    faSpinner,
    faSuitcase,
    faUsers
} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Services = () => {
    return (
        <div className='services'>
            <h4>We support you with all your printings and graphics designs.</h4>
            <h5> Visit us at our Head Office at <b>555 Corner Kick, Waterloo</b> and our branch at <b>8 Lunsar Road,
                Makeni City</b></h5>
            <div className="grid">
                <ul className="service-list">
                    <li className="service-item">
                        <FontAwesomeIcon icon={faUsers} className="icon"/>
                        <h3>Banner Printing</h3>
                        <p>Our services focus on growing your business so we offer the best Banner Printing
                            Solutions.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faSuitcase} className="icon"/>
                        <h3>Sticker Printing</h3>
                        <p> we cater for you through our various printing solutions in the process of handling them
                            smoothly.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faMoneyBill} className="icon"/>
                        <h3>T-Shirt and Cap Printing</h3>
                        <p>Let us take care of your T-Shirt and Caps printing, we ensure accuracy and neatness, giving
                            you best of expectations.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faBalanceScale} className="icon"/>
                        <h3>DTF Printing</h3>
                        <p>We offer comprehensive support with your DTF Printing Solutions, from designing to printing,
                            to help turn your vision into reality.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faHandshake} className="icon"/>
                        <h3>Canvas Printing </h3>
                            <p>Optimize your canvas printing with our streamlined administration service.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faHome} className="icon"/>
                        <h3>Wooden Frames</h3>
                        <p>Simplify your wooden easy made frames with our reliable service. We manage the process from
                            start to finish, ensuring timely and accurate delivery.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faSpinner} className="icon"/>
                        <h3>ID Card Printing</h3>
                        <p>Need a perfect ID Card for your Organisation? Our flexible solutions provide fully equipped
                            temporary and permanent ID Cards, School Prefect Badges, and coworkers passes to meet your
                            needs.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faProcedures} className="icon"/>
                        <h3>We Build and Host Websites</h3>
                        <p>We facilitate excellent and scalable single page website for a minimum fee, including hosting
                            and design business brands.</p>
                    </li>
                </ul>
            </div>
            <div className="new-1">
                <h4>
                    What we specialize in</h4>
                <h5>""What you expect from us is what we do""</h5>
                <ul>
                    <li>Banner Printing </li>
                    <li> Sticker Printing </li>
                    <li> T-Shirt and Cap Printing </li>
                    <li> DTF Printing </li>
                    <li> Canvas Printing </li>
                    <li> Wooden Frame </li>
                    <li> Typing and Printing </li>
                    <li> Customized Birthday Cards </li>
                    <li> Banners </li>
                    <li> Photocopy and Scanning </li>
                    <li> Logo Design </li>
                    <li> Letter Heads </li>
                    <li> Wedding Souvenir </li>
                    <li> Complimentary Cards </li>
                    <li> Menus </li>
                    <li> Receipt Book </li>
                    <li> Picture Printings </li>
                    <li> Tickets </li>
                    <li> Application Forms </li>
                    <li> Cups and Mugs Printing </li>
                    <li> Personalised Pillow case </li>
                    <li>Customised Accessories Designs </li>
                    <li>University Online Application for all Universities and Colleges </li>
                    <li>We sells Scratch Cards and Check Results for NPSE, BECE and WASSCE Examinations  </li>
                    <li>We do Private Wassce Entries</li>
                    <li>We do All Money transfers Ria, BnB, Western Union, Afro, MoneyGram, World Remit, EDSA Credits, OrangeMoney, AfriMoney, Qmoney </li>
                    <li>Top Up Voucher  Available for Orange, Africell and Qcell </li>
                </ul>
            </div>
        </div>
);
};

export default Services;
