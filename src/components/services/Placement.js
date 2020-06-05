import React from 'react';
import {Link} from 'react-router-dom';

export const Placement = () => {
    return (
        <div>
        <div className="placement">
        <div className="container">
        <div className="placement1">
                <div className="row">
                    <div className="col-sm-6 mt-2 placement2" style={{float:"left"}}>
                        <h3>Placement</h3>
                    </div>
                    <div className="col-sm-6 mt-2  placement3">
                        <Link to='/' className="text-white" style={{fontSize:"20px"}}>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        </div>
    )
}
