import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import { Bolgbanner } from '../components/bolg/Bolgbanner'

export const Bolgpage = () => {
    return (
        <div>
            <Header/>
            <Bolgbanner/>
            <Footer/>
        </div>
    )
}
