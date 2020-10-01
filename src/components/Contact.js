import React from 'react'
import email from '../assets/content/email1.jpg'

import BandcampPlayer from 'react-bandcamp'
import { render } from '@testing-library/react'



export default class Contact extends React.Component {
   
   componentDidMount() {
      window.scrollTo(0, 0);
   }

   render(){

      return (
         <div className="contact container">
            <div className='info'>

               <h2>Contact:</h2>
               {/* <p>For booking and other inquiries email: euroraj@gmail.com</p> */}
               <img src={email} style={{ height: '1.5em' }} />
               <br/>
               <br/>
               <h3>US Publicity:</h3>
               <p>
                  <a href='https://www.redcatpublicity.com/contact-us'>Jason Byrne, Red Cat Publicity</a>
               </p>
               <br/>
               <h3>European Publicity:</h3>
      
               <p>
                  <a href='http://stilletto.be/en/#contact'>Inge De Pauw, Stiletto Productions</a>
               </p>
            </div>
         </div>
      )
   }
}
