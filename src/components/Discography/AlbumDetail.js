import React from 'react'

class AlbumDetail extends React.Component {
   constructor(props) {
      super(props)
      console.log(props)
   }
   
render() {
      //===================== ON LOAD ===================================
      let personnelOnLoad = this.props.albumsData[0].personnel.map(item => 
         <div >
            <p className="personnel">{item}</p>
         </div>
      )
      let trackListOnLoad = this.props.albumsData[0].tracks.map(item =>
         <div >
            <p className="track-list">{item}</p>
         </div>
      )
      //=================================================================

      return (
   
         <div className="album-detail">
            {this.props.albumDetail ? 
            <>
               <img src={this.props.albumDetail.cover} />
               <div className="album-info">
                 <p className="album-description">{this.props.albumDetail.description}</p>                     
                 <p className="album-title">{this.props.albumDetail.title}</p>                     
                 {this.props.albumDetail.tracks.map(item =>
                     <>
                        <p className="track-list">{item}</p>
                     </>
                     )}
                 {this.props.albumDetail.personnel.map(item =>
                     <>
                        <p className="personnel">{item}</p>
                     </>
                     )}
                  <p className="credits one">{this.props.albumDetail.credits1}</p>
                  <p className="credits two">{this.props.albumDetail.credits2}</p>
                  <p className="credits three">{this.props.albumDetail.credits3}</p>
               </div>
             </> :
        //===================== ON LOAD (display first album)=================================== 
            <div className="album-detail">
               <img src={this.props.albumsData[0].cover} />
               <div className="album-info">
                  <p className="album-description">{this.props.albumsData[0].description}</p>
                  <p className="album-title">{this.props.albumsData[0].title}</p>
                     {trackListOnLoad}
                     {personnelOnLoad}
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
