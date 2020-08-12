import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai'
import {  AiFillGoogleCircle } from 'react-icons/ai'
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
} from 'reactstrap';
export const Header1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const OPentoggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <div className=" " color="light">
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
                                <Link to='/fullstackdeveloper' style={{ textDecoration: "none" }}>
                                    <DropdownItem>
                                        Full Stack Web Development
                                </DropdownItem>
                                </Link>
                                <Link to='/fullstackwebapp' style={{ textDecoration: "none" }}>
                                    <DropdownItem>
                                        Full Stack Mobile App Development
                         </DropdownItem>
                                </Link>
                                <Link to='/datascience' style={{ textDecoration: "none" }}>
                                    <DropdownItem>
                                        Data Science </DropdownItem>
                                </Link>
                                <Link to='/awsdevops' style={{ textDecoration: "none" }}>
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
    )
}
