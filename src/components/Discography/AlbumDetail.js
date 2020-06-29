import React from 'react'

import albumsData from './albumsData'

class AlbumDetail extends React.Component {
   constructor(props) {
      super(props)
      console.log(props)
   }
   
  

   render() {

      // let trackList = this.props.albumDetail.tracks.map(album => 
      //    <div >
      //       <p>{album}</p><br/>
      //    </div>
     
      //    )
      
      let trackListOnLoad = this.props.albumsData[0].tracks.map(item =>
         <div >
            <p className="track-list">{item}</p>
         </div>
      )



      return (
   
         <div className="album-detail">
            {this.props.albumDetail ? 
            <>
               <img src={this.props.albumDetail.cover} />
               <div className="album-info">
                 <p className="album-title">{this.props.albumDetail.title}</p>                     
                 {this.props.albumDetail.tracks.map(item =>
                     <>
                        <p className="track-list">{item}</p>
                     </>
                     )}
                  <p className="credits one">{this.props.albumDetail.credits1}</p>
                  <p className="credits two">{this.props.albumDetail.credits2}</p>
                  <p className="credits three">{this.props.albumDetail.credits3}</p>
               </div>
             </> :
               
            <div className="album-detail">
               <img src={this.props.albumsData[0].cover} />
               <div className="album-info">
                  <p className="album-title">{this.props.albumsData[0].title}</p>
                  {trackListOnLoad}
                  <p className="credits one">{this.props.albumsData[0].credits1}</p>
                  <p className="credits two">{this.props.albumsData[0].credits2}</p>
                  <p className="credits three">{this.props.albumsData[0].credits3}</p>
                  </div>
            </div>
            
         }
            
         </div>
      )
   }
   
}
export default AlbumDetail
