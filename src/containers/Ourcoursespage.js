import React from 'react'
import Header from '../components/home/Header'
import { Footer } from '../components/home/Footer';
import { Courses } from '../components/home/Courses';
import { Header1 } from '../components/home/Header1';


export const Ourcoursespage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <Courses/>
            <Footer/>
        </div>
    )
}
