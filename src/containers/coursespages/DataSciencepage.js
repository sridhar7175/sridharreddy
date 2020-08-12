import React from 'react'
import Header from '../../components/home/Header'
import { DataScience } from '../../components/courses/DataScience'
import { Footer} from '../../components/home/Footer';
import { Header1 } from '../../components/home/Header1';

export const DataSciencepage = () => {
    return (
        <div>
          <Header/>
          <Header1/>
          <DataScience/>
          <Footer/>  
        </div>
    )
}
