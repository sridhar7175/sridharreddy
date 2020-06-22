import React from 'react'
import Header from '../components/home/Header'
import { Footer } from '../components/home/Footer';
import { Galleryone } from '../components/gallery/Galleryone'
import { GetStarted } from '../components/home/GetStarted';

export const Gallerypage = () => {
    return (
        <div>
            <Header/>
            <Galleryone/>
            <GetStarted/>
            <Footer/>
        </div>
    )
}
