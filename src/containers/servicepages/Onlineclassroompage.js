import React from 'react'
import Header from '../../components/Header';
import {Onlineclassroom} from '../../components/services/Onlineclassroom'
import { Footer } from '../../components/Footer'

export const Onlineclassroompage = () => {
    return (
        <div>
            <Header/>
            <Onlineclassroom/>
            <Footer/>
        </div>
    )
}
