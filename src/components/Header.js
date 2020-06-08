import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin, AiFillGoogleCircle } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { Modal, Button } from 'react-bootstrap';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonDropdown,
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const OPentoggle = () => setIsOpen(!isOpen);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <div className="header1">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4 text-white mt-2" >
                            <div className="text-center">

                                <Link to="/"> <FaMobileAlt /> +91 7337213134 </Link>
                                &nbsp;

                                    <a href="mailto:info@codingsastra.com"> <AiOutlineMail /> info@deva.com </a>
                            </div>

                        </div>
                        <div className="col-md-4 mt-2">
                            <div className="text-center" style={{ fontSize: "20px" }}>
                                <a href="https://www.facebook.com/codingsastra/" target="_blank"><FaFacebook /></a> &nbsp;&nbsp;
                                <a href="https://twitter.com/codingsastra?lang=en" target="_blank"><AiFillTwitterCircle />
                                </a> &nbsp;&nbsp;
                                <a href="https://www.codingsastra.com/" target="_blank"><AiFillGoogleCircle /></a>
                                &nbsp;&nbsp;
                             </div>
                        </div>
                        <div className="col-md-4 mt-2">
                            <div className="text-center">
                                <Link to="/applynow">ApplyNow</Link>&nbsp; &nbsp; &nbsp; &nbsp;
                            <Link onClick={handleShow}>Login </Link>


                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <h3>Login</h3>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="login2">
                                            <form>

                                                <input type="text" className="mt-3"

                                                    placeholder="Email.." />
                                                <input type="text" className="mt-3"

                                                    id="fname" name="firstname" placeholder="Password.." />
                                                <br />

                                                <input type="checkbox" className="mt-3" /> &nbsp;&nbsp;
                                     <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                                <button type="button" style={{ width: "400px", height: "40px" }}
                                                    className="btn btn-danger mt-3">Submit</button>
                                            </form>
                                        </div>
                                    </Modal.Body>

                                </Modal>

                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <Link onClick={handleShow}>Register </Link>


                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <h3>Register</h3>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="login2">
                                            <form>
                                                <input type="text" className="mt-3"

                                                    placeholder="UserName*" />


                                                <input type="text" className="mt-3"

                                                    placeholder="Email*" />
                                                <input type="text" className="mt-3"

                                                    id="fname" name="firstname" placeholder="Password*" />
                                                <br />

                                                <input type="checkbox" className="mt-3" /> &nbsp;&nbsp;
                                     <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                                <button type="button" style={{ width: "400px", height: "40px" }}
                                                    className="btn btn-danger mt-3">Submit</button>
                                            </form>
                                        </div>
                                    </Modal.Body>

                                </Modal>

                            </div>
                            <div className="mb-2"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="navbarheader" color="light">
                    <div className="container">
                        <Navbar light expand="md">
                            <Link to='/' style={{ textDecoration: "none" }}>
                                <NavbarBrand style={{ fontSize: "30px" }}>Deva</NavbarBrand></Link>
                            <NavbarToggler onClick={OPentoggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Courses
                                </DropdownToggle>
                                        <DropdownMenu right>
                                            <Link to='/' style={{ textDecoration: "none" }}>
                                                <DropdownItem>
                                                    Full Stack Web Development
                                            </DropdownItem>
                                            </Link>
                                            <Link to='/' style={{ textDecoration: "none" }}>
                                                <DropdownItem>
                                                    Full Stack Mobile App Development
                                     </DropdownItem>
                                            </Link>
                                            <Link to='/' style={{ textDecoration: "none" }}>
                                                <DropdownItem>
                                                    Data Science </DropdownItem>
                                            </Link>
                                            <Link to='/' style={{ textDecoration: "none" }}>
                                                <DropdownItem>
                                                    AWS & DevOps Cloud Architect  </DropdownItem>
                                            </Link>
                                            <Link to='/' style={{ textDecoration: "none" }}>
                                                <DropdownItem>
                                                    Summer Internship Training  </DropdownItem>
                                            </Link>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Services
                            </DropdownToggle>
                                        <DropdownMenu right>
                                            <Link to="/classroom" style={{ textDecoration: "none" }}>
                                                <DropdownItem>Class Room Training
                                        </DropdownItem>
                                            </Link>
                                            <Link to='/onlineclassroom' style={{ textDecoration: "none",color:"black" }}>
                                                <DropdownItem>
                                                    Online Room Training
                                 </DropdownItem>
                                            </Link>
                                           
                                                <DropdownItem>
                                                <Link to="/Corporatetraining" style={{ textDecoration: "none",color:"black" }}>
                                                    Corporate Training
                                                    </Link>
                                                 </DropdownItem>
                                         

                                            <DropdownItem>
                                            <Link to="/collegetraining" style={{ textDecoration: "none",color:"black" }}>
                                    
                                      
                                                College Training
                                                </Link>
                                                </DropdownItem>

                                           
                                                <DropdownItem >
                                                <Link to='/placement' style={{ textDecoration: "none",color:"black" }}>
                                                    Placement Assitance </Link>
                                            </DropdownItem>
                                           
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem>
                                        <Link to='/bolg' style={{ textDecoration: "none",color:"black" }}>
                                            <NavLink>Bolg</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/gallery' style={{ textDecoration: "none",color:"black" }}>
                                            <NavLink>Gallery</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/contact' style={{ textDecoration: "none",color:"black" }}>
                                            <NavLink>Contact</NavLink></Link>
                                    </NavItem>

                                </Nav>

                            </Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;