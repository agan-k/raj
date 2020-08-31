import React from 'react'

import AlbumDetail from './AlbumDetail'

class Discography extends React.Component {
   constructor() {
      super()
   }

   render() {
      return (
         <div className="discography">

            <div className='album-select'>
                  <AlbumDetail
                     albumSelect={this.props.albumSelect}
                     albumsData={this.props.albumsData}
                  />
            </div>

            <div className='albums-container'>
               {this.props.albums}
            </div>

         </div>
      )
   }
}
export default Discography
