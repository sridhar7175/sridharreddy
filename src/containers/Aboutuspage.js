import React from 'react'
import Header from '../components/home/Header'
import { Footer } from '../components/home/Footer';
import { Aboutus } from '../components/home/Aboutus'
import { OurTeam } from '../components/home/OurTeam'


export const Aboutuspage = () => {
    return (
        <div>
            <Header/>
            <Aboutus/>
            <OurTeam/>
            <Footer/>
        </div>
    )
}
