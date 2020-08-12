import React from 'react'
import { ClassRoom } from '../../components/services/ClassRoom'
import { Footer } from '../../components/home/Footer'
import Header from '../../components/home/Header'
import { Header1 } from '../../components/home/Header1'


export const classRoompage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
            <ClassRoom/>
            <Footer/>
        </div>
    )
}
