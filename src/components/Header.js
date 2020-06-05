import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin, AiFillGoogleCircle } from 'react-icons/ai'

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
    const [dropdownOpen, setDropdownopen] = useState(false)

    const toggle = () => setIsOpen(!isOpen);

    const Opentoggle = () => setDropdownopen(!dropdownOpen)

    return (
        <div>
            <div className="header1">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4 text-white mt-2" >
                            <div className="text-center">

                                <Link to="/"> <FaMobileAlt /> +91 7337213134 </Link>
                                &nbsp;

                                    <Link to="/"> <FaMobileAlt /> info@deva.com </Link>
                            </div>

                        </div>
                        <div className="col-md-4 mt-2">
                            <div className="text-center" style={{ fontSize: "20px" }}>
                                <Link to="/"><FaFacebook /></Link> &nbsp;&nbsp;
                                <Link to="/"><AiFillTwitterCircle /> </Link> &nbsp;&nbsp;
                                <Link to="/"><AiFillGoogleCircle /></Link>
                                &nbsp;&nbsp;
                             </div>
                        </div>
                        <div className="col-md-4 mt-2">
                            <div className="text-center">
                                <Link to="/applynow">ApplyNow</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/login">Login </Link>
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
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Courses
                                </DropdownToggle>
                                        <DropdownMenu right>
                                            <Link to='/' style={{ textDecoration: "none" }}>
                                                <DropdownItem>
                                                    LongTerm Courses
                                            </DropdownItem>
                                            </Link>
                                            <Link to='/' style={{ textDecoration: "none" }}>
                                                <DropdownItem>
                                                    Short Term Courses
                                     </DropdownItem>
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
                                            <Link to='/onlineclassroom' style={{ textDecoration: "none" }}>
                                                <DropdownItem>
                                                    Online Room Training
                                 </DropdownItem>
                                            </Link>
                                            <Link to="/Corporatetraining" style={{ textDecoration: "none" }}>
                                                <DropdownItem>
                                                    Corporate Training
                                                 </DropdownItem>
                                            </Link>
                                            <Link to="/collegetraining" style={{ textDecoration: "none" }}>
                                                <DropdownItem>
                                                    College Training
                                                </DropdownItem>
                                            </Link>
                                            <Link to='/placement' style={{ textDecoration: "none" }}>
                                                <DropdownItem >
                                                    Placement Assitance
                                            </DropdownItem>
                                            </Link>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem>
                                        <Link to='/bolg' style={{ textDecoration: "none" }}>
                                            <NavLink>Bolg</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/gallery' style={{ textDecoration: "none" }}>
                                            <NavLink>Gallery</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/contact' style={{ textDecoration: "none" }}>
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