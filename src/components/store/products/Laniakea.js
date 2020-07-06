import React from 'react'

export default function Laniakea(props) {
   
   return (
      <div className="laniakea">
         <div className="album-detail">
               <img src={props.albumsData[1].cover} />
               <div className="album-info">
                  <p className="album-description">{props.albumsData[1].description}</p>
                  <p className="album-title">{props.albumsData[1].title}</p>
                  {props.albumsData[1].tracks.map(item =>
                  <p className="track-list">{item}</p>
                  )}
                  {props.albumsData[1].personnel.map(item =>
                     <p className="personnel">{item}</p>
                     )}
                  <p className="credits one">{props.albumsData[1].credits1}</p>
                  <p className="credits two">{props.albumsData[1].credits2}</p>
                  <p className="credits three">{props.albumsData[1].credits3}</p>
                  </div>
            </div>
      </div>
   )
}
