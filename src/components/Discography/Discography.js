import React from 'react'

import AlbumDetail from './AlbumDetail'

class Discography extends React.Component {
   constructor() {
      super()
      this.state = {
         // albumSelect: null,
      }
   }

   handleSelect = (item, index) => {
      this.setState({
         // albumSelect: item,
         // tracks: item.tracks,
      })  
   }

   render() {
      // const albums = this.props.albumsData.map((item, index) =>
      //    <div
      //       className="albums"
      //       onClick={() => this.handleSelect(item, index)}>
      //       <img src={item.cover} />
      //    </div>
      // )
      
      return (
         <div className="discography">
            
            <div className='album-select'>
                  <AlbumDetail 
                     albumDetail={this.props.albumSelect}
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
