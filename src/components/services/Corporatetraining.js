import React from 'react'
import {Link} from 'react-router-dom';

export const Corporatetraining = () => {
    return (
        <div>
        <div className="Corporatetraining">
        <div className="container">
        <div className="Corporatetraining1">
                <div className="row">
                    <div className="col-sm-6 mt-2 Corporatetraining2" style={{float:"left"}}>
                        <h3>Corporatetraining</h3>
                    </div>
                    <div className="col-sm-6 mt-2  Corporatetraining3">
                        <Link to='/' className="text-white" style={{fontSize:"20px"}}>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        </div>
    )
}
