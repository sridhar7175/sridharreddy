import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import { Aboutus } from '../components/Aboutus';
import { Courses } from '../components/Courses';
import { Events } from '../components/Events';
import { OnlineStudent } from '../components/OnlineStudent';
import { OurTeam } from '../components/OurTeam';
import { StudentSay } from '../components/StudentSay';
import { Footer } from '../components/Footer';
import {GetStarted} from '../components/GetStarted';


const Homepage = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Cards />
            <Aboutus/>
            <Courses />
            <Events />
            <OnlineStudent />
            <OurTeam />
            <StudentSay />
            <GetStarted/>
            <Footer />
        </div>
    )
}
export default Homepage;