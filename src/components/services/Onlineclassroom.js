import React from 'react'
import { Link } from 'react-router-dom'

export const Onlineclassroom = () => {
    return (
        <div>
            <div className="onlineroom">
                <div className="container">
                <div className="onlineroom1">
                        <div className="row">
                            <div className="col-sm-6 mt-2 onlineroom2" style={{float:"left"}}>
                                <h3>Online Class Room</h3>
                            </div>
                            <div className="col-sm-6 mt-2  onlineroom3">
                                <Link to='/' className="text-white" style={{fontSize:"20px"}}>Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
