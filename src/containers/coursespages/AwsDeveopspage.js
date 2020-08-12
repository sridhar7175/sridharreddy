import React from 'react'
import Header from '../../components/home/Header'
import { Awsdevops } from '../../components/courses/Awsdevops'
import { Footer } from '../../components/home/Footer'
import { Header1 } from '../../components/home/Header1'

export const AwsDeveopspage = () => {
    return (
        <div>
            <Header/>
            <Header1/>
           <Awsdevops/>
            <Footer/>
        </div>
    )
}
