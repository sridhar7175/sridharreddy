import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <div className="header1">
        <div className="container ">
            <div className="row">
                <div className="col-md-4 text-white mt-2" >
                    <ul className="">
                        <li>
                            <Link to="#"> +91 7337213134 </Link>
                        </li>
                        <li>
                            <Link to="#">info@deva.com </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 mt-2">
                    <ul className="">
                        <li>
                            <Link to="#">Facebook</Link>
                        </li>
                        <li>
                            <Link to="#">Twitter </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 mt-2">
                <ul className="">
                    <li>
                        <Link to="#">ApplyNow</Link>
                    </li>
                    <li>
                        <Link to="#">Login </Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" style={{color:" rgb(35, 156, 35)",fontSize:"40px"}} 
                     href="/">DEva</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item home">
                                <Link className="nav-link active" to="/">Home </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/about">About </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/blog">Blog </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/gallery">Gallery </Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link active" to="/contact">Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Header;