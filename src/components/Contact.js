import React from 'react'
import email from '../assets/content/email.jpg'

import BandcampPlayer from 'react-bandcamp'



export default function Contact() {
   return (
      <div className="contact container">
         <h1>Contact</h1>
         <img src={email} style={{height: '2em'}}/>
      </div>
   )
}
