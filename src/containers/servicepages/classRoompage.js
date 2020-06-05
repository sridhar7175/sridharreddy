import React from 'react'
import Header from '../../components/Header'
import { ClassRoom } from '../../components/services/ClassRoom'
import { Footer } from '../../components/Footer'

export const classRoompage = () => {
    return (
        <div>
            <Header/>
            <ClassRoom/>
            <Footer/>
        </div>
    )
}
