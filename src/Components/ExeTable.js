import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import './ExeTable.css'

export default function ExeTable() {
  return (
    <div className='exeContainer'>
    <Table striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>Course</th>
          <th>Credit Hours</th>
          <th>Grade Points</th>
          <th>Quality Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AA</td>
          <td>3</td>
          <td>4.0</td>
          <td>4.0*3=12.0</td>
        </tr>
        <tr>
          <td>AB</td>
          <td>4</td>
          <td>3.3</td>
          <td>3.3*4=13.2</td>
        </tr>
        <tr>
          <td>AC</td>
          <td>3</td>
          <td>3.0</td>
          <td>3.0*3=9.0</td>
        </tr>
      </tbody>
    </Table>
    <h6 className='usingFormula'>Using the formula:</h6>
    <div className='exCard'>
      <Card size='sm'>
      <Card.Header className='exHeader'>Cumulative GPA = Total Quality Points / Total Credit Hours</Card.Header>
      <Card.Body className='exBody'>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}(12.0+13.2+9.0)/(3+4+3)
            {' '}
          </p>
          <footer className="blockquote-footer exBody">
            Your GPA would be 3.42
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
    </div>
    
  )
}
