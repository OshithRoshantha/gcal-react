import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../Components/DesktopFooter.css'

export default function DesktopFooter() {
  return (
    <div>
        <Navbar fixed="bottom" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='desktopfooterText'>© [2024] GCAL. All Rights Reserved. Project by Oshith Roshantha &#x1F607;</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
