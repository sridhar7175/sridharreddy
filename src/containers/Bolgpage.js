import React from 'react'
import Header from '../components/home/Header'
import { Footer } from '../components/home/Footer';
import { Bolgbanner } from '../components/bolg/Bolgbanner'

export const Bolgpage = () => {
    return (
        <div>
            <Header/>
            <Bolgbanner/>
            <Footer/>
        </div>
    )
}
