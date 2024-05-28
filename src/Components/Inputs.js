import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Inputs.css'
import { Button, CloseButton } from 'react-bootstrap';

export default function Inputs() {
  return (
    <div className='container'>
    <div className='inputContainer'>
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
          <Dropdown.Item href="#">B+</Dropdown.Item>
          <Dropdown.Item href="#">B</Dropdown.Item>
          <Dropdown.Item href="#">B-</Dropdown.Item>
          <Dropdown.Item href="#">C+</Dropdown.Item>
          <Dropdown.Item href="#">C</Dropdown.Item>
          <Dropdown.Item href="#">C-</Dropdown.Item>
          <Dropdown.Item href="#">D+</Dropdown.Item>
          <Dropdown.Item href="#">D</Dropdown.Item>
          <Dropdown.Item href="#">F/E</Dropdown.Item>
        </DropdownButton>
        <CloseButton className='close'></CloseButton>
      </InputGroup>
      <Button size='sm' variant='outline-dark'>+ Add Course</Button>
    </div>
    </div>
    
  )
}
