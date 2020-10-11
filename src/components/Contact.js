import React from 'react'
import contact_email from '../assets/content/contact_email.jpg'

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
               {/* <p><a href='#'>For booking and other inquiries email:<br/> euroraj@gmail.com</a></p> */}
               <img src={contact_email} style={{ height: '2.7em' }} />
               <br/>
               <br/>
               <h3>US Publicity:</h3>
               <p>
                  <a href='https://www.redcatpublicity.com/contact-us'>Jason Byrne, Red Cat Publicity</a>
                  &nbsp; 
                  <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
               </p>
               <br/>
               <h3>European Publicity:</h3>
               <p>
                  <a href='http://stilletto.be/en/#contact'>Inge De Pauw, Stiletto Productions</a>
                  &nbsp; 
                  <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>  
               </p>
            </div>
         </div>
      )
   }
}
