import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='header'>
    {[false].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" variant="dark">
        <Container fluid className='navBar'>
          <Navbar.Brand href="#"><div className='logoContainer'><img className='navIcon' src='/logo.png'/></div></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggleButton'/>
          <Navbar.Offcanvas 
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
           className="offcanavaContainer">
            <Offcanvas.Header closeButton className='closeButton' closeVariant='white'>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <div className='OffcanvasLogo'><img className='navIcon2' src='/logo.png'/>GPA Calculator</div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <br/>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="Calculator">Calculate GPA</Nav.Link>
                <NavDropdown
                  title="Guides"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  data-bs-theme="dark"
                >
                  <NavDropdown.Item href="GPA_scale">GPA Scale</NavDropdown.Item>
                  <NavDropdown.Item href="How_to_calculate_gpa">
                    How to Calculate GPA
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="FAQ">FAQ</Nav.Link>
                <br/>
                <Nav.Link href="https://www.facebook.com/share.php?u=gcalore.netlify.app/" target='_blank'><img className='fbIcon' src='/fbIcon.png'/></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </div>    
    
  )
}
