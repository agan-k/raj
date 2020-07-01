import React from 'react'
// import ReactSoundcloud from 'react-soundcloud-embed'
import ReactPlayer from 'react-player'
import Iframe from 'react-iframe'

import albumsData from './albumsData'

class AlbumDetail extends React.Component {
   constructor(props) {
      super(props)
      console.log(props)
   }
   
  

   render() {

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
                     {/* <div className="sc_player">
                       <ReactPlayer url={this.props.albumDetail.sound_cloud} />
                     </div>  */}
                     {/* React.render(<ReactSoundcloud url="https://soundcloud.com/icebound/dusty-breaks-at-the-bottom-of-the-random-crates"/>, document.getElementById('ReactSoundcloud')); */}

                     {/* <ReactSoundcloud url="https://soundcloud.com/euroraj/vocie-of-memory"/> */}

               </div>
             </> :
               
            <div className="album-detail">
               <img src={this.props.albumsData[0].cover} />
               <div className="album-info">
                  <p className="album-description">{this.props.albumsData[0].description}</p>
                  <p className="album-title">{this.props.albumsData[0].title}</p>
                     {trackListOnLoad}
                     
                     {/* <Iframe url='{this.props.albumsData[0].sound_cloud}'
                        width="450px"
                        height="450px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative" /> */}
                     {/* <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132120906&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/euroraj" title="euroraj" target="_blank" style="color: #cccccc; text-decoration: none;">euroraj</a> · <a href="https://soundcloud.com/euroraj/vocie-of-memory" title="Vocie Of Memory" target="_blank" style="color: #cccccc; text-decoration: none;">Vocie Of Memory</a></div> */}
                        
                     {/* <div className="sc_player">
                        <ReactPlayer url={this.props.albumsData[0].sound_cloud} style={{width: '300px'}}/>
                     </div>  */}
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
