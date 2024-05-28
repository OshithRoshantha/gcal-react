import React from 'react'
import './FAQ.css'
import AccordanceFAQ from '../Components/AccordFAQ'
import Contact from '../Components/Contact'

export default function FAQ() {
  return (
    <div className='faqContainer'>
        <div className='div1'>
          <h1 className='faqHeader'>FAQ</h1>
          <h8 className='faqHeadertag'>Got questions? We've got answers.</h8>
        </div>
        <div className='div2'>
            <h6 className='div2Header'>Get answers to common GPA questions</h6>
            <br/>
            <AccordanceFAQ/>
        </div>
        <div className='div3'>
            <h6 className='div3Header'>We'd Love to Hear from You...</h6>
            <br/>
            <Contact/>           
        </div>
    </div>
  )
}
