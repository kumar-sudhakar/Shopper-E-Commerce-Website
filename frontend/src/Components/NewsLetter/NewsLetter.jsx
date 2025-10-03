import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer In Your Email</h1>
        <p>Subscribe To Our Newsletter And Updated</p>
        <div>
            <input type="email" placeholder='Your Mail Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter