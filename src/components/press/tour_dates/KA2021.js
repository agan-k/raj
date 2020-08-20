import React from 'react'
import ka2021_poster from '../../../assets/posters/ka2021_poster.jpg'
// import ka2021_poster from '../../../assets/albums/pistils.jpg'

export default function KA2021() {
   return (
      <div  style={{
         width: '80vw',
         margin: 'auto'
   }}>
         <img src={ka2021_poster}
            style={{
               width: '80vw',
               // margin: 'auto'
         }}
         />
      </div>
   )
}
