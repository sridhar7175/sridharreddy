import React from 'react'
import Header from '../components/Header'
import { Galleryone } from '../components/gallery/Galleryone'
import { Footer } from '../components/Footer';
import { GetStarted } from '../components/GetStarted';

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
