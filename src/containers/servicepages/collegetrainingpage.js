import React from 'react'
import Header from '../../components/Header'
import { Collegetraining } from '../../components/services/Collegetraining'
import { Footer } from '../../components/Footer'

export const collegetrainingpage = () => {
    return (
        <div>
            <Header/>
            <Collegetraining/>
            <Footer/>
        </div>
    )
}
