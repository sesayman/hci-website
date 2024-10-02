import React from 'react';
import './Courses.css';

const Courses = () => {
    return (
        <div className="courses-container">
            <div className="courses">
                <h4>CERTIFICATE COURSES</h4>
                <p>These are the Certificate Courses we offer:</p>
                <ul>
                    {[
                        "Business Administration and Management",
                        "Secretariat Studies",
                        "Building and Construction",
                        "Wood Work and Technology",
                        "Painting and Decoration",
                        "Human Resource Management",
                        "Community Development Studies",
                        "Purchasing and Supply Chain Management",
                        "Logistics and Transportation Management",
                        "Warehousing and Stores Management",
                        "Accounting and Finance",
                        "Information Communication and Technology",
                        "Entrepreneurship, Creativity and Innovation",
                        "Electrical Installation Work",
                        "Cooling and Lightening",
                        "Mechanical Maintenance Engineering"
                    ].map((course, index) => (
                        <li key={index}>{index + 1}. {course}</li>
                    ))}
                </ul>

                <h4>DIPLOMA COURSES</h4>
                <p>These are the Diploma Courses we offer:</p>
                <ul>
                    {[
                        "Business Administration and Management",
                        "Secretariat Studies",
                        "Building and Construction",
                        "Wood Work and Technology",
                        "Painting and Decoration",
                        "Human Resource Management",
                        "Community Development Studies",
                        "Purchasing and Supply Chain Management",
                        "Logistics and Transportation Management",
                        "Warehousing and Stores Management",
                        "Accounting and Finance",
                        "Information Communication and Technology",
                        "Entrepreneurship, Creativity and Innovation",
                        "Electrical Installation Work",
                        "Cooling and Lightening",
                        "Mechanical Maintenance Engineering"
                    ].map((course, index) => (
                        <li key={index}>{index + 1}. {course}</li>
                    ))}
                </ul>

                <h4>HIGHER NATIONAL DIPLOMA COURSES</h4>
                <p>These are the Higher National Diploma Courses we offer:</p>
                <ul>
                    {[
                        "Business Administration and Management",
                        "Secretariat Studies",
                        "Building and Construction",
                        "Wood Work and Technology",
                        "Painting and Decoration",
                        "Human Resource Management",
                        "Community Development Studies",
                        "Purchasing and Supply Chain Management",
                        "Logistics and Transportation Management",
                        "Warehousing and Stores Management",
                        "Accounting and Finance",
                        "Information Communication and Technology",
                        "Entrepreneurship, Creativity and Innovation",
                        "Electrical Installation Work",
                        "Cooling and Lightening",
                        "Mechanical Maintenance Engineering"
                    ].map((course, index) => (
                        <li key={index}>{index + 1}. {course}</li>
                    ))}
                </ul>

                <h4>SHORT COURSES</h4>
                <p>Short Courses Programmes:</p>
                <ul>
                    <li>Professional Development Courses: Leadership, Communication, and Technology.</li>
                    <li>Entrepreneurship Programs: Empower individuals to become entrepreneurs.</li>
                    <li>Community Outreach: Literacy Programs and Vocational Training for underserved populations.</li>
                </ul>
            </div>
        </div>
    );
};

export default Courses;
