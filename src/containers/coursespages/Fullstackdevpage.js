import React from 'react'
import Header from '../../components/home/Header'
import { Fullstackdeveloper } from '../../components/courses/Fullstackdeveloper'
import { Footer } from '../../components/home/Footer'

export const Fullstackdevpage = () => {
    return (
        <div>
            <Header/>
            <Fullstackdeveloper/>
            <Footer/>
        </div>
    )
}
