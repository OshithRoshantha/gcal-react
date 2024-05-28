import React from 'react'
import './CalculateCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CalculateCard() {
  return (
    <div className='cardContainer'>
    <Card style={{ width: '18rem' }} className='card' data-bs-theme="dark">
      <Card.Img className='cardImg' variant="top" src="./cardIcon.png" />
      <Card.Body className='cardBody'>
        <Card.Title className='cardHead'>Calculate GPA</Card.Title>
        <Card.Text className='cardText'>
          Figure out your overall GPA, and how you stack up against the national average.
        </Card.Text>
        <Button href="Calculator" className='goBtn'><img src='./go.png' className='goImg'/></Button>
      </Card.Body>
    </Card>
    </div>
  )
}
