import React from 'react'
import Header from '../../components/home/Header'
import { Footer } from '../../components/home/Footer'
import { Placement } from '../../components/services/Placement'
import { Header1 } from '../../components/home/Header1'


export const Placementpage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <Placement/>
            <Footer/>
        </div>
    )
}
