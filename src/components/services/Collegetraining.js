import React from 'react'
import {Link } from 'react-router-dom';

export const Collegetraining = () => {
    return (
        <div>
        <div className="collegetraining">
        <div className="container">
        <div className="collegetraining1">
                <div className="row">
                    <div className="col-sm-6 mt-2 collegetraining2" style={{float:"left"}}>
                        <h3>College Training</h3>
                    </div>
                    <div className="col-sm-6 mt-2  collegetraining3">
                        <Link to='/' className="text-white" style={{fontSize:"20px"}}>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        </div>
    )
}
