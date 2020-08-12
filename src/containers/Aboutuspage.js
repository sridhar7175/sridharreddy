import React from 'react'
import Header from '../components/home/Header'
import { Footer } from '../components/home/Footer';
import { Aboutus } from '../components/home/Aboutus'
import { OurTeam } from '../components/home/OurTeam'
import { Header1 } from '../components/home/Header1';


export const Aboutuspage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <Aboutus/>
            <OurTeam/>
            <Footer/>
        </div>
    )
}
