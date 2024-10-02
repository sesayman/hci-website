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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
    return (
        <div className='services'>
            <h4>We support you to navigate the ever-changing business dynamics while you remain focused on your core functions.</h4>
            <h5>With Africa's economy projected to grow, this is the time for international companies to expand their business into the African continent. However, this in itself is both an exciting and challenging endeavor. Human Capital Institute Sierra Leone will provide you with all the expatriate administrative solutions you need to succeed. We offer every solution you need in one location including but not limited to:</h5>
            <div className="grid">
                <ul className="service-list">
                    <li className="service-item">
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        <h3>HR Administration</h3>
                        <p>Streamline your HR tasks with our comprehensive administration service. From onboarding to compliance, we handle it all, freeing you to focus on growing your business.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faSuitcase} className="icon" />
                        <h3>Immigration Process Support</h3>
                        <p>Simplify immigration procedures with our expert support. From visa applications to residency permits, we guide you through the process smoothly.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faMoneyBill} className="icon" />
                        <h3>Payroll and Tax Administration</h3>
                        <p>Let us take care of your payroll and tax duties. From calculations to filings, we ensure accuracy and compliance, giving you peace of mind.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faBalanceScale} className="icon" />
                        <h3>Business Startup Support</h3>
                        <p>Launch your business with confidence. We offer comprehensive support, from planning to compliance, to help turn your vision into reality.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faHandshake} className="icon" />
                        <h3>Procurement Administration</h3>
                        <p>Optimize your procurement processes with our streamlined administration service. From sourcing to cost control, we handle it all efficiently.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        <h3>Third Party Payments</h3>
                        <p>Simplify vendor payments with our reliable service. We manage the process from start to finish, ensuring timely and accurate payments.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faSpinner} className="icon" />
                        <h3>Temporary Office Space</h3>
                        <p>Need a workspace on short notice? Our flexible solutions provide fully equipped temporary offices, meeting rooms, and coworking spaces to meet your needs.</p>
                    </li>
                    <li className="service-item">
                        <FontAwesomeIcon icon={faProcedures} className="icon" />
                        <h3>Facilitating Accommodation</h3>
                        <p>We facilitate temporary and permanent accommodation, including travel and movement arrangements such as airport meet and greet, and transfer to Freetown.</p>
                    </li>
                </ul>
            </div>
            <div className="new-1">
            <h4>
                What we specialize in</h4>
            <h5>What we do and what can you expect from us</h5>
            <ul>
                <li>Recruitment & Selection</li>
                   <li> Head-hunting & Outplacement</li>
                       <li>  Communication & PR
                    Trainings</li>
                           <li>  Learning & Development Programmes</li>
                               <li> Professional Membership Subscriptions & Licenses</li>
                                   <li>  Organize Conferences and Business Events</li>
                                       <li>  HR Advisory & Consultancy</li>
                                           <li>  HR Management and Maintenance</li>
                                               <li> Interim Projects Management
                    Research, Monitoring & Evaluation-(baseline, mid-line and end line surveys)</li>
                                                   <li>  Online advertisement/Job-boarding and Advertisement</li>
                                                       <li>  New Businesses Registration in Sierra Leone</li>
                                                           <li>  Immigration support services for Expats</li>
                                                               <li>  Travel/Airport Meet and Greet/Accommodation facilitation</li>
                                                                   <li>  Procurement & Logistical Support</li>
                                                                       <li>  Personnel Administration & Maintenance</li>
                                                                           <li> Organizational HR Policies Development</li>
            </ul>
            </div>
        </div>
    );
};

export default Services;
