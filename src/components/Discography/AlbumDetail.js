import React from 'react'

export default function AlbumDetail(props) {

   let trackList = props.albumDetail.tracks.map(item =>
      <div >
         <p>{item}</p><br/>
      </div>
   )
   
   return (
      <div className="album-detail">
         {/* <p >{props.albumDetail.description}</p> */}
         <img src={props.albumDetail.cover} />
         <div className="album-info">
            <p className="album-title">{props.albumDetail.title}</p>
            <p className="track-list">{trackList}</p>
            <p className="credits one">{props.albumDetail.credits1}</p>
            <p className="credits two">{props.albumDetail.credits2}</p>
            <p className="credits three">{props.albumDetail.credits3}</p>
         </div>
         
      </div>
   )
}
