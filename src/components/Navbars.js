import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'


const Navbars = () => {

  return (
   <div className='nav'>
    <Navbar expand="lg" className="bg-body-tertiary w-100">
    <Container>
      <Navbar.Brand href="#home" style={{fontSize:'25px', fontWeight:'bolder', color:' rgb(5, 76, 176)'}}>HireVac</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='links'>Home</Nav.Link>
          <Nav.Link className='links'>How It Works</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='links'>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='links'>Jobs</Nav.Link>
          <Nav.Link className='links'>Achievers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  );
}


export default Navbars