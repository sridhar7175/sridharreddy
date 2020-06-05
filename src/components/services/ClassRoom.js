import React from 'react'
import { Link } from 'react-router-dom'

export const ClassRoom = () => {
    return (
        <div>
            <div className="classroom">
                <div className="container">
                <div className="classroom1">
                        <div className="row">
                            <div className="col-sm-6 mt-2 classroom2" style={{float:"left"}}>
                                <h3>Class Room</h3>
                            </div>
                            <div className="col-sm-6 mt-2  classroom3">
                                <Link to='/' className="text-white" style={{fontSize:"20px"}}>Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
