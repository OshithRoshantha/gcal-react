import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

export default function Footer() {
  return (
    <div>
    <Navbar fixed="bottom" expand="lg" className="bg-body-tertiary">
      <Container className='footer'>
        <Navbar.Brand href="#" className='footerText'>© [2024] GCAL. All Rights Reserved. Project by Oshith Roshantha &#x1F607;</Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}
