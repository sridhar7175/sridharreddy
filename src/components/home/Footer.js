import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin, AiFillGoogleCircle } from 'react-icons/ai'

export const Footer = () => {
    return (
        <div>
            <div className="footer1">
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md-3 footer2 text-left">
                            <h3 className="text-white"><a href="/" className="text-white">Deva</a></h3>
                            <a to="/"> <h5 className="text-white mt-3"><i className="fa fa-map-marker text-white"
                                aria-hidden="true" ></i>&nbsp;
                        &nbsp;Hyderabad</h5></a>
                            <p className="text-white text-left">MIG 27/1, Road #6, Dharma  Reddy Colony, Phase 1
                            Behind VRK Silks, KPHB
                        Colony  Hyderabad TS-500085 +91 9951013133, +91 9951013134</p>
                            <a href="/"> <h5 className="text-white mt-3"><i className="fa fa-map-marker text-white"
                                aria-hidden="true" ></i>&nbsp;
                &nbsp;Vizag</h5></a>
                            <p className="text-white text-left mt-1">MIG 27/1, Road #6, Dharma  Reddy Colony, Phase 1
                            Behind VRK Silks, KPHB
                        Colony  Hyderabad TS-500085 +91 9951013133, +91 9951013134</p>
                            <h5 className="text-white mt-2">
                                <a href="/" className="text-white"><i class="fa fa-envelope text-white" aria-hidden="true"></i>
                        &nbsp;deva@gmail.com</a></h5>
                            <a href="/"> <h5 className="text-white mt-3"><i class="fa fa-mobile" aria-hidden="true"></i>
                        &nbsp; &nbsp;9491908107</h5></a>
                        </div>
                        <div className="col-md-3 footer2 text-left">
                            <h5 className="text-white">Useful Links</h5>
                            <h5 className="mt-3"></h5>
                            <Link to="/about" className="mt-5"><h6 className="text-white">About us</h6></Link>
                            <Link to="/courses" className="mt-3"><h6 className="text-white">Courses</h6></Link>
                            <Link to="/bolg" className="mt-3"><h6 className="text-white">Bolg</h6></Link>
                            <Link to="/contact" className="mt-3"><h6 className="text-white">Contact</h6></Link>
                        </div>
                        <div className="col-md-3 footer2 text-left">
                            <h5 className="text-white">Recent Posts</h5>
                            <div className="" style={{ display: "flex" }}>
                            <img src="images/python.webp" alt="Beach Resort" width="60px" height="50px" />
    
                            <h6 className="mt-1 text-white" style={{ paddingLeft: "10px" }}>
                            Python Batch Starts Soon.
                            </h6>
                          
                          </div>
                          <p className="text-white" style={{ paddingLeft: "70px" }}>jun, 2019</p>
                          <div className="" style={{ display: "flex" }}>
                          <img src="images/web1.png" alt="Beach Resort" width="60px" height="50px" />
  
                          <h6 className="mt-1 text-white" style={{ paddingLeft: "10px" }}>
                          Web & Mobile Technologies
                          </h6>
                        
                        </div>
                        <p className="text-white" style={{ paddingLeft: "70px" }}>May, 2019</p>
                        <div className="" style={{ display: "flex" }}>
                        <img src="images/mobile.gif" alt="Beach Resort" width="60px" height="50px" />

                        <h6 className="mt-1 text-white" style={{ paddingLeft: "10px" }}>
                        Andriod App Development (Advanced)
                        </h6>
                      
                      </div>
                      <p className="text-white" style={{ paddingLeft: "70px" }}>April, 2019</p>
                        </div>
                        <div className="col-md-3 footer2 text-left">
                            <h5 className="text-white">Subscribe Newsletter</h5>

                            <p className="text-white mt-4">Contrary to popular belief of
                        lorem Ipsm Latin amet ltin from consectetur industry.</p>
                            <div className="newsletter_form form_style2 mb-4">
                                <form>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder="Email Address"
                                    />
                                    <button
                                        type="submit"
                                        title="Subscribe"
                                        className="btn btn-default btn-sm rounded-0"
                                        name="submit"
                                        value="Submit"
                                    > Subscribe</button>
                                </form>
                            </div>
                            <h3 className="mt-3 text-white">Follow Us</h3>
                            <span className="text-white" style={{ fontSize: "20px" }}><FaFacebook /></span>&nbsp;&nbsp;
                            <span className="text-white" style={{ fontSize: "20px" }}><AiFillTwitterCircle /></span>&nbsp;&nbsp;
                            <span className="text-white" style={{ fontSize: "20px" }}><AiFillLinkedin /></span>
                            &nbsp;&nbsp;
                            <span className="text-white" style={{ fontSize: "20px" }}><AiFillGoogleCircle /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h6>© 2019 All Rights Reserved by Deva.</h6>
                        </div>
                        <div className="col-md-6 text-right">
                            <Link to="/privacypolicy" className="text-white pp">Privacy Policy</Link>&nbsp;&nbsp;
                            <Link to='/termsconditions' className="text-white pp">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
