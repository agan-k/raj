import React, { Component } from 'react'
import ReactPlayer from 'react-player'


export default class VideoDetail extends Component {
   constructor(props) {
      super()
      this.state = {
         fullScreenVideo: false
      }
   }

   handleSelectFullScreen = () => {
      this.setState({
         fullScreenVideo: true
      })
   }
   exitFullScreen = () => {
      this.setState({
         fullScreenVideo: false
      })
   }
   render() {
      return (
         <>
         {this.props.videoDetail ?
            <div className='video-detail-container view-full-screen'>

               <div className='react-player-video'>
                  {/* <div className='close-react-player-video' onClick={this.props.closeModal}>
                     &times;
                  </div> */}
                  <i class="material-icons close" onClick={this.props.closeModal}>&#xe14c;</i>   
                  <ReactPlayer
                     url={this.props.videoDetail.video_url}
                     height='90vh'
                     width='80vw'
                     light={this.props.videoDetail.thumbnail}
                  />
               </div>

            </div> :

            <div className={`${this.state.fullScreenVideo ? "view-full-screen" : ""} video-detail-container`}>
               
               <div className='react-player-video' >
                  <i className='material-icons full' onClick={this.handleSelectFullScreen}>&#xe5d0;</i>
                  <i class="material-icons close" onClick={this.exitFullScreen}>&#xe14c;</i>
                  
                  <ReactPlayer
                     url={this.props.showcaseVideoDetail.video_url}
                     height='100%'
                     width='100%'
                     light={this.props.showcaseVideoDetail.thumbnail}
                   /> 
                
               </div> 
            </div>
         }
         </>
      )
   }
}
