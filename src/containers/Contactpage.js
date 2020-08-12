import React from 'react'
import Header from '../components/home/Header'
import { Footer } from '../components/home/Footer';
import {Contact} from '../components/Contact';
import { Header1 } from '../components/home/Header1';


export const Contactpage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <Contact/>
            <Footer/>
        </div>
    )
}
