import React from 'react'
import './How_to_calculate_gpa.css'
import ExeTable from '../Components/ExeTable'

export default function How_to_calculate_gpa() {
  return (
    <div className='howToContainer'>
    <h1 className='howtoHeader'>How to Calculate</h1>
      <div className='howToDiv1'>

        <div className='howText'>
      To calculate your cumulative GPA, list all your courses, noting the credit hours and grades.<br/>Convert each grade to numerical values (e.g., A = 4.0, B = 3.0).<br/>Multiply each grade point by its credit hours to get quality points. Sum the total quality points and total credit hours.<br/> Finally, divide the total quality points by the total credit hours to get your cumulative GPA.
        </div>
      </div>
      <div className='howToDiv2'>
        <div className='howText'>
        <h4>Example Calculation:</h4>
        <h6>Let's say you have completed the following courses:</h6>
        </div>
      </div>
      <div className='tableC'>
          <ExeTable/>
      </div>
    </div>
  )
}
