import React from 'react'
// import Albums from './Albums'
import AlbumDetail from './AlbumDetail'

import pistils from '../../assets/albums/pistils.jpg'
import first from '../../assets/albums/1.jpg'
import second from '../../assets/albums/2.jpg'
import third from '../../assets/albums/3.jpg'
import fourth from '../../assets/albums/4.jpg'
import fifth from '../../assets/albums/5.png'
import sixth from '../../assets/albums/1.jpg'
import seventh from '../../assets/albums/2.jpg'
import eight from '../../assets/albums/3.jpg'
import ninth from '../../assets/albums/4.jpg'
import tenth from '../../assets/albums/5.png'

class Discography extends React.Component {
   constructor() {
      super()
      this.state = {
         albumSelect: null
      }
      
   }

   handleSelect = (item, index) =>{
      this.setState({
         albumSelect: item
      })
   }

   render() {
      let albumsArr = [pistils, first, second, third, fourth, fifth, sixth, seventh,
      eight, ninth, tenth]
   let albums = albumsArr.map((item, index) =>
      <div
         className="albums"
         onClick={() => this.handleSelect(item, index)}
         >
         <img src={item} />
      </div>
   )

      return (
         <div className="discography">
            <div className='album-select'>
               {this.state.albumSelect && (
                
                  <AlbumDetail
                     albumDetail={this.state.albumSelect}
                  />
               )}
            </div>
            <div className='albums-container'>
               {albums}
            </div>
            
         </div>
      )
   }
}
export default Discography
