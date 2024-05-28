import React from 'react'
import './Calculator.css'
import Inputs from '../Components/Inputs'

export default function Calculator() {
  return (
    <div className='calculatorContainer'>
      <div className='calculatorHeading'>
        <h1 className='heading'>Cumulative GPA Calculator</h1>
        <hr/>
        <h9 className='description'>Calculate your cumulative GPA, and see how your current (and future) grades will affect your performance.</h9>
      </div>
       <Inputs/> 
    </div>
  )
}
