import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Components/DesktopNavBar.css'

export default function DesktopNavBar() {
  return (
    <div >
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
      <Container className='desktopNavBar'>
        <Navbar.Brand href="#home"><img className='fbIconDesk' src='/logo.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Calculator">Calculate GPA</Nav.Link>
            <NavDropdown title="Guides" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="GPA_scale">GPA Scale</NavDropdown.Item>
              <NavDropdown.Item href="How_to_calculate_gpa">
              How to Calculate GPA
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='navI'>
            <Nav.Link href="FAQ">FAQ</Nav.Link>
            <Nav.Link eventKey={2} href="https://www.facebook.com/share.php?u=gcalore.netlify.app/" target='_blank'>
                  <img className='fbIconDesk' src='/fbIcon.png'/>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}
