import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

            <div>
                <div className="navbarheader" color="light">
                    <div className="container">
                        <Navbar light expand="md">
                            <NavbarBrand href="/" style={{fontSize:"30px"}}>Deva</NavbarBrand>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Courses
                                </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                LongTerm Courses
                                                
                                    </DropdownItem>
                                            <DropdownItem>
                                                ShortTerm Courses
                                     </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Services
                            </DropdownToggle>
                                        <DropdownMenu right>
                                        <DropdownItem>
                                        Class Room Training
                         </DropdownItem>
                                        
                                            <DropdownItem>
                                                Online Room Training
                                 </DropdownItem>
                                            <DropdownItem>
                                                Corporate Training
                                                 </DropdownItem>

                                            <DropdownItem>
                                                College Training
                                                </DropdownItem>
                                            <DropdownItem>
                                                Online Room Training
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem>
                                        <NavLink href="/components/">Bolg</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/gallery">Gallery</NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink href="/gallery">Contact</NavLink>
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