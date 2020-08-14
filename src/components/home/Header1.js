import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "reactstrap";
export const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const OPentoggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className=" " color="light">
        <div className="container">
          <Navbar light expand="md">
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavbarBrand style={{ fontSize: "30px" }}>Deva</NavbarBrand>
            </Link>
            <NavbarToggler onClick={OPentoggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Courses
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Link
                      to="/fullstackdeveloper"
                      style={{ textDecoration: "none" }}
                    >
                      <DropdownItem>Full Stack Web Development</DropdownItem>
                    </Link>
                    <Link
                      to="/fullstackwebapp"
                      style={{ textDecoration: "none" }}
                    >
                      <DropdownItem>
                        Full Stack Mobile App Development
                      </DropdownItem>
                    </Link>
                    <Link to="/datascience" style={{ textDecoration: "none" }}>
                      <DropdownItem>Data Science </DropdownItem>
                    </Link>
                    <Link to="/awsdevops" style={{ textDecoration: "none" }}>
                      <DropdownItem>AWS & DevOps Cloud Architect </DropdownItem>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <DropdownItem>Summer Internship Training </DropdownItem>
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link
                    to="/workshops"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <NavLink>Workshops</NavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link
                    to="/career"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <NavLink>Career</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/corporate"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <NavLink>Corporate</NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none" }}
                  >
                    <DropdownItem>About</DropdownItem>
                  </Link>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none" }}
                  >
                    <DropdownItem>
                      Contact
                    </DropdownItem>
                  </Link>
                  <Link to="/gallery" style={{ textDecoration: "none" }}>
                    <DropdownItem>Gallery </DropdownItem>
                  </Link>
                  <Link to="/bolg" style={{ textDecoration: "none" }}>
                    <DropdownItem>Bolg </DropdownItem>
                  </Link>
                  <Link to="/faq" style={{ textDecoration: "none" }}>
                    <DropdownItem>FAQ </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
