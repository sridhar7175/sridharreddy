import React from 'react'
import Header from '../../components/home/Header'
import { Footer } from '../../components/home/Footer'
import { Collegetraining } from '../../components/services/Collegetraining'
import { Header1 } from '../../components/home/Header1'



export const collegetrainingpage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <Collegetraining/>
            <Footer/>
        </div>
    )
}
