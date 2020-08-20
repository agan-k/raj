import React from 'react'
import { Link } from 'react-router-dom'


export default function LaniakeaRelease(props) {
   return (
      <div className="release-container">
         <img src={props.pressData[3].img}
            style={{height: '5em'}}
         />
         <h2>{props.pressData[3].title}</h2>
         <h4>{props.pressData[3].subtitle}</h4>
         <h5>{props.pressData[3].subtitle1}</h5>
         <p>{props.pressData[3].body}</p>
         <p>{props.pressData[3].body1}</p>
         <p>{props.pressData[3].body2}</p>
         <p>{props.pressData[3].body3}</p>
         <p>{props.pressData[3].body4}</p>
         
            <p>{props.pressData[3].comment}</p>
         <a href='http://earshift.com'>
            <p>{props.pressData[3].writer}</p>
         </a>
      </div>
   )
}
