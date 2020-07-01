import React from 'react'
// import ReactSoundcloud from 'react-soundcloud-embed'

import AlbumDetail from './AlbumDetail'

import albumsData from './albumsData'

class Discography extends React.Component {
   constructor() {
      super()
      this.state = {
         albumSelect: null,
         // albumsData: albumsData
      }
      
   }

   // componentDidMount(album) {
   //    this.setState({
   //       albumSelect: firstDetail
   //    })
   // }

   handleSelect = (item, index) =>{
      this.setState({
         albumSelect: item,
         tracks: item.tracks
      })
   }

   render() {
      let firstDetail = albumsData.filter(album => album.id == 1) 
      // console.log(firstDetail[0].cover)
   
      let albums = albumsData.map((item, index) =>
         <div
            className="albums"
            onClick={() => this.handleSelect(item, index)}
            >
            <img src={item.cover} />
         </div>
      )
      let trackList = albums.map((item, index) =>
         <div>
            <p>{item.tracks}</p><br/>
         </div>
         )

      return (
         <div className="discography">
            
            <div className='album-select'>
{/* 
               {this.state.albumSelect ?  */}
                  <AlbumDetail
                     albumDetail={this.state.albumSelect}
                     albumsData={albumsData}
                     albums={albums}
                     trackList={trackList }
               /> 
                  {/* :
                  
                     <div className="album-detail">
                     <img
                        // style={{height: '15em'}}
                        src={albumsData[0].cover} />
                        <div className="album-info">
                           <p className="album-title">{albumsData[0].title}</p>
                           <p className="track-list">{trackList}</p>
                           <p className="credits one">{albumsData[0].credits1}</p>
                           <p className="credits two">{albumsData[0].credits2}</p>
                           <p className="credits three">{albumsData[0].credits3}</p>
                       </div>
                     </div>
                     
                  
               } */}
               {/* {this.state.albumSelect && (
                  <AlbumDetail
                     albumDetail={this.state.albumSelect}
                  />
               )} */}
               
            
            </div>
                  
            <div className='albums-container'>
               {albums}
            </div>
            
         </div>
      )
   }
}
export default Discography
