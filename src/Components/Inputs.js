import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Inputs.css'
import { Button, CloseButton } from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export default function Inputs() {
  const [courses, setCourses] = useState([{ credits: '', grade: '' }]);

  function addCourse() {
    setCourses([...courses, { credits: '', grade: '' }]);
  }

  function removeCourse(index) {
    if (courses.length > 1) {
      const updatedCourses = [...courses];
      updatedCourses.splice(index, 1);
      setCourses(updatedCourses);
    }
  }

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    courses.forEach(course => {
      const credits = parseFloat(course.credits);
      const grade = convertGradeToGPA(course.grade);

      if (!isNaN(credits) && !isNaN(grade)) {
        totalCredits += credits;
        totalGradePoints += credits * grade;
      }
    });

    return totalCredits !== 0 ? totalGradePoints / totalCredits : 0;
  };

  const convertGradeToGPA = grade => {
    switch (grade) {
      case 'A+':
        return 4.0;
      case 'A':
        return 4.0;
      case 'A-':
        return 3.7;
      case 'B+':
        return 3.3;
      case 'B':
        return 3.0;
      case 'B-':
        return 2.7;
      case 'C+':
        return 2.3;
      case 'C':
        return 2.0;
      case 'C-':
        return 1.7;
      case 'D+':
        return 1.3;
      case 'D':
        return 1.0;
      case 'F/E':
        return 0.0;
      default:
        return 0.0;
    }
  };

  const determineColor = () => {
    const gpaValue = calculateGPA();
    if (gpaValue >= 3.6) {
      return 'green';
    } else if (gpaValue >= 3) {
      return 'gold';
    } else {
      return 'red';
    }
  };

  return (
    <div className='container'>
      <div className='inputContainer'>
        {courses.map((course, index) => (
          <InputGroup className='mb-3 inputRow' key={index}>
            <Form.Control
              className='inputBox'
              aria-label='Text input with dropdown button'
              placeholder='Course Credits'
              value={course.credits}
              onChange={e => {
                const updatedCourses = [...courses];
                updatedCourses[index].credits = e.target.value;
                setCourses(updatedCourses);
              }}
            />
            <DropdownButton
              className='value'
              variant='outline-dark'
              title={course.grade ? course.grade : 'Grade'}
              id={`input-group-dropdown-${index}`}
              onSelect={value => {
                const updatedCourses = [...courses];
                updatedCourses[index].grade = value;
                setCourses(updatedCourses);
              }}
            >
              <Dropdown.Item eventKey='A+'>A+</Dropdown.Item>
              <Dropdown.Item eventKey='A'>A</Dropdown.Item>
              <Dropdown.Item eventKey='A-'>A-</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='B+'>B+</Dropdown.Item>
              <Dropdown.Item eventKey='B'>B</Dropdown.Item>
              <Dropdown.Item eventKey='B-'>B-</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='C+'>C+</Dropdown.Item>
              <Dropdown.Item eventKey='C'>C</Dropdown.Item>
              <Dropdown.Item eventKey='C-'>C-</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='D+'>D+</Dropdown.Item>
              <Dropdown.Item eventKey='D'>D</Dropdown.Item>
              <Dropdown.Item eventKey='F/E'>F/E</Dropdown.Item>
            </DropdownButton>
            <CloseButton
              onClick={() => removeCourse(index)}
              className='close'
            ></CloseButton>
          </InputGroup>
        ))}
        <Button onClick={addCourse} size='sm' variant='outline-dark'>
          + Add Course
        </Button>
        <div className='displayGPAContainer'>
          <CircularProgressbarWithChildren
            value={calculateGPA()}
            maxValue={4.0}
            circleRatio={0.75}
            styles={{
              path: {
                stroke: determineColor(),
              },
              trail: {
                stroke: '#EEEEEE',
              },
            }}  
          >
            <div className='gpaText'>
              <div className='gpaDecimal'>{calculateGPA().toFixed(3)}</div>
              <div className='gpaDesc'>Cumulative GPA</div>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
}
