import React from 'react'
import pistils from '../../assets/albums/pistils.jpg'
import first from '../../assets/albums/1.jpg'
import second from '../../assets/albums/2.jpg'
import third from '../../assets/albums/3.jpg'
import fourth from '../../assets/albums/4.jpg'
import fifth from '../../assets/albums/5.png'

export default function Albums() {
   let albums = [pistils, first, second, third, fourth, fifth]
   let album = albums.map(item =>
      <div className="albums">
         <img src={item} />
      </div>
   )
   return (
      <div className="albums-container">
         {/* {album}
         {album} */}
      </div>
   )
}
