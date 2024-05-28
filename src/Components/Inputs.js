import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Inputs.css'
import { Button, CloseButton } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export default function Inputs() {
  const [courses,setCourses]=useState(1);
  function addCourse(){
    setCourses(courses+1);
  }
  function removeCourse(){
    if(courses>1)
      setCourses(courses-1);
  }
  const gpaValue = 3; //gpa here

  const determineColor=()=> {
    if (gpaValue>=3.6) {
      return 'green';
    } else if (gpaValue>=3) {
      return 'gold';
    } else {
      return 'red';
    }
  };

  return (
    <div className='container'>
    <div className='inputContainer'>
    {[...Array(courses)].map((_, index) => (
    <InputGroup className="mb-3 inputRow">    
        <Form.Control aria-label="Text input with dropdown button" placeholder='Course Credits' />
        <DropdownButton className='value' 
          variant="outline-secondary"
          title="Grade"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">A+</Dropdown.Item>
          <Dropdown.Item href="#">A</Dropdown.Item>
          <Dropdown.Item href="#">A-</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">B+</Dropdown.Item>
          <Dropdown.Item href="#">B</Dropdown.Item>
          <Dropdown.Item href="#">B-</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">C+</Dropdown.Item>
          <Dropdown.Item href="#">C</Dropdown.Item>
          <Dropdown.Item href="#">C-</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">D+</Dropdown.Item>
          <Dropdown.Item href="#">D</Dropdown.Item>
          <Dropdown.Item href="#">F/E</Dropdown.Item>
        </DropdownButton>
        <CloseButton onClick={removeCourse} className='close'></CloseButton>
      </InputGroup>
    ))}
      <Button onClick={addCourse} size='sm' variant='outline-dark'>+ Add Course</Button>  
    <div className='endBar'>
        <Button variant="dark">Calculate</Button>
    </div> 
    <div className='displayGPAContainer'>
      <CircularProgressbarWithChildren value={gpaValue} maxValue={4.0}
      styles={{path: {stroke: determineColor()}}}
      >
    <div className='gpaText'>
      <div className='gpaDecimal'>{gpaValue}</div>
      <div className='gpaDesc'>Cumulative GPA</div>
    </div>
      </CircularProgressbarWithChildren>    
    </div>

  </div>
  </div>
    
  )
}
