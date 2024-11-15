import React, {useState} from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import CurrentYear from "./Components/CurrentYear/CurrentYear.jsx";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer.jsx";
import Courses from "./Components/Courses/Courses.jsx";
import Services from "./Components/Services/Services.jsx";

const App = () => {
    const [playState, setPlayState] = useState(false);

    return (
        <div>
            <Navbar />
            <Hero />
            <div className='container'>
                <Title subTitle='OUR WORKS' title='WHAT WE OFFER'/>
                <Programs />
                <Courses />
                <About setPlayState={setPlayState}/>
                <Title subTitle='Gallery' title=' Canvas Frames different sizes available'/>
                <Campus />
                <Title subTitle='Our Services' title='These are the Services we support' />
                <Services />
                <Title subTitle='TESTIMONIALS' title='What our Customers says'/>
                <Testimonials />
                <Title subTitle='Contact us' title='Set an appointment'/>
                <Contact />
                <Footer />

            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState}/>
        </div>
    );
};

export default App;