import React from 'react'
import './GPA_scale.css'
import GpaTable from '../Components/GpaTable'


export default function GPA_scale() {
  return (
    <div className='gpaContainer'>
        <div className='upperGC'>
          <h1 className='header2'>GPA Scale</h1>
          <h8 className='description2'>The GPA (Grade Point Average) scale is a standardized way of measuring academic achievement in the United States and other countries.<br/> It converts letter grades into a numerical value to provide a summary measure of academic performance.<br/> Each grade carries a Grade Point Value (GPV) as specified in the table below.</h8>
        </div>
        <div className='lowerGC'>
            <GpaTable/>
        </div>
    </div>
  )
}
