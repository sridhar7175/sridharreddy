import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin, AiFillGoogleCircle } from 'react-icons/ai'

export const Footer = () => {
    return (
        <div>
            <div className="footer1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer2 text-center">
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
                        <div className="col-md-3 footer2 text-center">
                            <h5 className="text-white">Useful Links</h5>
                            <h5 className="mt-3"></h5>
                            <Link to="/about" className="mt-5"><h6 className="text-white">About us</h6></Link>
                            <Link to="/courses" className="mt-3"><h6 className="text-white">Courses</h6></Link>
                            <Link to="/bolg" className="mt-3"><h6 className="text-white">Bolg</h6></Link>
                            <Link to="/contact" className="mt-3"><h6 className="text-white">Contact</h6></Link>
                        </div>
                        <div className="col-md-3 footer2 text-center">
                            <h5 className="text-white">Recent Posts</h5>
                            <ul className="recent_post border_bottom_dash list_none mt-3">
                                <li>
                                    <div className="post_footer">
                                        <div className="post_img">
                                            <a href="/">
                                                <img
                                                    src="https://www.valuecoders.com/blog/wp-content/uploads/2018/05/pythonfeatured.jpg"
                                                    alt="letest_post1"
                                                    width="50px" height="50px"
                                                />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <h6>
                                                <a className="text-white"
                                                    href="https://docs.google.com/forms/d/e/1FAIpQLSds9Lhf8gwCJslxHRJ8ert0IWshl09tQHHX2qHFRsGi0tc7iQ/viewform">
                                                    Python Batch Starts Soon.
                                    </a>
                                            </h6>
                                            <span className="post_date text-white">jun, 2019</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="post_footer mt-2">
                                        <div className="post_img">
                                            <a href="/">
                                                <img
                                                    src="https://www.oclocksoftware.com/blog/wp-content/uploads/2017/08/difference-between-mobile-app-and-website-development.png"
                                                    alt="letest_post1" width="60px" height="50px"
                                                />
                                            </a>
                                        </div>
                                        <div className="post_content mt-2">
                                            <h6>
                                                <a
                                                    className="text-white"
                                                    href="https://docs.google.com/forms/d/e/1FAIpQLSds9Lhf8gwCJslxHRJ8ert0IWshl09tQHHX2qHFRsGi0tc7iQ/viewform">
                                                    Web & Mobile Technologies
                                    </a>
                                            </h6>
                                            <span className="post_date text-white">May, 2019</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="post_footer mt-2">
                                        <div className="post_img">
                                            <a href="/">
                                                <img
                                                    src="https://cdn-images-1.medium.com/max/1600/0*Cxz7JQpSXRzgf-en"
                                                    alt="letest_post1" width="60px" height="50px"
                                                />
                                            </a>
                                        </div>
                                        <div className="post_content">
                                            <h6>
                                                <a className="text-white"
                                                    href="https://docs.google.com/forms/d/e/1FAIpQLSds9Lhf8gwCJslxHRJ8ert0IWshl09tQHHX2qHFRsGi0tc7iQ/viewform">
                                                    Andriod App Development (Advanced)
                                    </a>
                                            </h6>
                                            <span className="post_date text-white">April, 2019</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-3 footer2 text-center">
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
