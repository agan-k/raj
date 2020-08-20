import React from 'react'
import { Link } from 'react-router-dom'


export default function PistilsRelease(props) {
   return (
      <div className="release-container">
         <img src={props.pressData[2].img}
            style={{height: '5em'}}
         />
         <h2>{props.pressData[2].title}</h2>
         <h4>{props.pressData[2].subtitle}</h4>
         <h5>{props.pressData[2].subtitle1}</h5>
         <p>{props.pressData[2].body}</p>
         <p>{props.pressData[2].body1}</p>
         <p>{props.pressData[2].body2}</p>
         <p>{props.pressData[2].body3}</p>
         <p>{props.pressData[2].body4}</p>
         <Link to="/bio">
            <p>{props.pressData[2].comment}</p>
         </Link>
         <p>{props.pressData[2].writer}</p>
      </div>
   )
}
