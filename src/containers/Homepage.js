import React from 'react';
import Header from '../components/home/Header';
import Slider from '../components/home/Slider';
import Cards from '../components/home/Cards';
import { Aboutus } from '../components/home/Aboutus';
import { Courses } from '../components/home/Courses';
import { Events } from '../components/home/Events';
import { OnlineStudent } from '../components/home/OnlineStudent';
import { OurTeam } from '../components/home/OurTeam';
import { StudentSay } from '../components/home/StudentSay';
import { Footer } from '../components/home/Footer';
import {GetStarted} from '../components/home/GetStarted';
import { Header1 } from '../components/home/Header1';


const Homepage = () => {
    return (
        <div>
            <Header />
             <Header1/>
            <Slider/>
            <Cards/>
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