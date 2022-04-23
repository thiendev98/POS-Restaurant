import React from 'react';
import image from "./default.jpg"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar bg="secondary sticky-top">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
          <NavDropdown title={
            <div className="d-inline">
              <img src={image} alt="img" width="32" height="32" className="rounded-circle" /> Admin
            </div>}
            id="navbarScrollingDropdown"
          >
              <NavDropdown.Item href="/home">Đăng xuất</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
  
export default Header