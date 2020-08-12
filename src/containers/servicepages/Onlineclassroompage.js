import React from 'react'
import Header from '../../components/home/Header'
import { Footer } from '../../components/home/Footer'
import {Onlineclassroom} from '../../components/services/Onlineclassroom'
import { Header1 } from '../../components/home/Header1'

export const Onlineclassroompage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <Onlineclassroom/>
            <Footer/>
        </div>
    )
}
