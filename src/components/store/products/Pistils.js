import React from 'react'

export default function Pistils(props) {
   return (
      <div className="product">
         <div className="album-detail">
               <img src={props.albumsData[0].cover} />
               <div className="album-info">
                  <p className="album-description">{props.albumsData[0].description}</p>
                  <p className="album-title">{props.albumsData[0].title}</p>
                  {props.albumsData[0].tracks.map(item =>
                  <p className="track-list">{item}</p>
                  )}
                  {props.albumsData[0].personnel.map(item =>
                     <p className="personnel">{item}</p>
                     )}
                  <p className="credits one">{props.albumsData[0].credits1}</p>
                  <p className="credits two">{props.albumsData[0].credits2}</p>
                  <p className="credits three">{props.albumsData[0].credits3}</p>
                  </div>
            </div>
      </div>
   )
}
