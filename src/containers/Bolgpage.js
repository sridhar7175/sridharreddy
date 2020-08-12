import React from 'react'
import Header from '../components/home/Header'
import { Footer } from '../components/home/Footer';
import { Bolgbanner } from '../components/bolg/Bolgbanner'
import { Header1 } from '../components/home/Header1';

export const Bolgpage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <Bolgbanner/>
            <Footer/>
        </div>
    )
}
