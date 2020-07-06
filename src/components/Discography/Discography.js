import React from 'react'

import AlbumDetail from './AlbumDetail'
class Discography extends React.Component {
   constructor() {
      super()
      this.state = {
         // albumSelect: null,
         // albumsData: albumsData
      }
   }

   render() {
      
      return (
         <div className="discography">
            
            <div className='album-select'>
                  <AlbumDetail 
                     albumDetail={this.props.albumDetail}
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
