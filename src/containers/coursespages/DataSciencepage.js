import React from 'react'
import Header from '../../components/home/Header'
import { DataScience } from '../../components/courses/DataScience'
import { Footer} from '../../components/home/Footer';

export const DataSciencepage = () => {
    return (
        <div>
          <Header/>
          <DataScience/>
          <Footer/>  
        </div>
    )
}
