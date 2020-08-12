import React from 'react'
import Header from '../components/home/Header'
import { Footer } from '../components/home/Footer';
import { Galleryone } from '../components/gallery/Galleryone'
import { GetStarted } from '../components/home/GetStarted';
import { Header1 } from '../components/home/Header1';

export const Gallerypage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <Galleryone/>
            <GetStarted/>
            <Footer/>
        </div>
    )
}
