import React from 'react'

export default function AlbumDetail(props) {
   return (
      <div className="album-detail">
         <img src={props.albumDetail}/>
      </div>
   )
}
