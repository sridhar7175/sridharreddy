import React from 'react'
import Header from '../../components/home/Header'
import { Footer } from '../../components/home/Footer'
import {Fullstackweb} from '../../components/courses/Fullstackweb'
import { Header1 } from '../../components/home/Header1'

export const Fullstackwebpage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <Fullstackweb/>
            <Footer/>
        </div>
    )
}
