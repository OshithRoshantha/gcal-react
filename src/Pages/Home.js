import React from 'react'
import './Home.css'
import CalculateCard from '../Components/CalculateCard'


export default function Home() {
  return (
    <div className='homeContainer'>
    <div className='homeLeft'>
      <div className='homeHeading'>
        <img src='logo.png' className='homeIcon'/>
      </div> 
      <div className='homeHeading2'>
          <br/>Calculate your Cumulative GPA, check your grades and understand how the GPA scale works.
      </div>
      <div className='homeImgContainer'>
        <br/>
          <img src='homeImg.png' className='homeImg'/>
      </div>
    </div>
      <br/>
      <CalculateCard/> 
    </div>
  )
}
