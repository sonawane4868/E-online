import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import './Header.css'
const Header = () => {
  

  return (
    <Navbar expand="lg" className="nav-custom py-4">
      <Container>
        <Navbar.Brand href="#home"><img src="./logo.png" alt="logo" className='img-logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='nav-custom-item' href="#home">Home</Nav.Link>
            <Nav.Link className='nav-custom-item' href="#link">About</Nav.Link>
            <Nav.Link className='nav-custom-item' href="#link">Courses</Nav.Link>
            <Nav.Link className='nav-custom-item' href="#link">Blog</Nav.Link>
            <Nav.Link className='nav-custom-item' href="#link">Contact</Nav.Link>
            <div className='text-end'>
            <Button className='btn-nav text-end btn-m'>Get Started</Button>
            </div>

            
          </Nav>
        </Navbar.Collapse>
        <Button className='btn-nav btn-d'>Get Started</Button>
      </Container>
    </Navbar>
  )
}

export default Header
