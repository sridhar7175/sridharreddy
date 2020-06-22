import React from 'react'
import Header from '../../components/home/Header'
import { Footer } from '../../components/home/Footer'
import {Fullstackweb} from '../../components/courses/Fullstackweb'

export const Fullstackwebpage = () => {
    return (
        <div>
            <Header/>
            <Fullstackweb/>
            <Footer/>
        </div>
    )
}
