import React from 'react'
import Header from '../../components/home/Header'
import { Fullstackdeveloper } from '../../components/courses/Fullstackdeveloper'
import { Footer } from '../../components/home/Footer'
import { Header1 } from '../../components/home/Header1'

export const Fullstackdevpage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <Fullstackdeveloper/>
            <Footer/>
        </div>
    )
}
