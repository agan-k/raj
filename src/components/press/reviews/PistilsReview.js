import React from 'react'
import pressData from '../pressData'

export default function PistilsReview(props) {
   return (
      <div className="review-container">
         
         <img
            src={pressData[0].publication}
            style={{width: '15em'}}
            />
         <p>{pressData[0].artist}</p>
         <p>{pressData[0].album}</p>
         <img
            src={props.albumsData[0].cover}
            style={{height: '8em'}}
         />
         <p>{pressData[0].label}</p>
         <p>{pressData[0].body}</p>

      </div>
   )
}
