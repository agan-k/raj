import React from 'react'
import Albums from './Albums'
import AlbumDetail from './AlbumDetail'

class Discography extends React.Component {
   constructor() {
      super()
   }
   render() {

      return (
         <div className="discography">
            <AlbumDetail />
            <Albums />
         </div>
      )
   }
}
export default Discography
