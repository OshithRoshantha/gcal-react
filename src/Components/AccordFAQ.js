import React from 'react'
import './AccordFAQ.css'
import Accordion from 'react-bootstrap/Accordion';

export default function AccordanceFAQ() {
  return (
  <div>
  <Accordion defaultActiveKey="0" className='accordContainer' data-bs-theme="dark">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        <div className='accordHeader'>
        <div className='accordH1'>Answer</div>
        <div className='accordH2'>What is Cumulative GPA?</div>
        </div>          
        </Accordion.Header>
        <Accordion.Body>
        Cumulative GPA, or Grade Point Average, is a measure used to indicate a student's overall academic performance across all their courses over a period of time, typically throughout their entire academic career at an institution. It is calculated by taking the average of the grade points earned for each course, weighted by the number of credit hours each course is worth.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
        <div className='accordHeader'>
        <div className='accordH1'>Answer</div>
        <div className='accordH2'>What is the Highest GPA?</div>
        </div>        
      </Accordion.Header>
        <Accordion.Body>
        The highest possible GPA (Grade Point Average) typically depends on the grading scale used by the educational institution. In most high schools and colleges, the highest GPA on the traditional 4.0 scale is a 4.0, which corresponds to an "A+ or A" in every course.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>    
    </div>
  )
}
