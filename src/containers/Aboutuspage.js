import React from 'react'
import Header from '../components/Header'
import { Aboutus } from '../components/Aboutus'
import { OurTeam } from '../components/OurTeam'
import { Footer } from '../components/Footer'

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
