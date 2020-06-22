import React from 'react'
import { ClassRoom } from '../../components/services/ClassRoom'
import { Footer } from '../../components/home/Footer'
import Header from '../../components/home/Header'


export const classRoompage = () => {
    return (
        <div>
            <Header/>
            <ClassRoom/>
            <Footer/>
        </div>
    )
}
