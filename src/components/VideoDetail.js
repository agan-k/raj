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

      if (this.props.videoDetail) {
         return (
            <div className='video-detail view-full-screen'>
                <div className='react-player-video'>
                   <i class="material-icons close-video" onClick={this.props.closeModal}>&#xe14c;</i>   
                   <ReactPlayer
                      url={this.props.videoDetail.video_url}
                      height='100%'
                     width='100%' 
                     controls='true'
                   />
                </div>
             </div>
         )
      } else if (this.props.showcaseVideoDetail) {
         return (
            <div className={`${this.state.fullScreenVideo ? "view-full-screen" : ""} video-detail`}>
               
                <div className='react-player-video' >
                     <ReactPlayer
                         url={this.props.showcaseVideoDetail.video_url}
                         height='100%'
                         width='100%'
                         playing='true'
                         controls='true'
                        />
               </div>
               <div className="controls">
                   <i className='material-icons expand' onClick={this.handleSelectFullScreen}>&#xe5d0;</i>
                   <i class="material-icons reduce" onClick={this.exitFullScreen}>&#xe5d1;</i>
               </div>
             </div>
         )
      } else {
         return (
            <div className={`${this.state.fullScreenVideo ? "view-full-screen" : ""} video-detail`}>
               
               <div className='react-player-video' >
                   <ReactPlayer
                      url={this.props.videosData[0].video_url}
                      height='100%'
                      width='100%'
                      controls='true'
                     
                    /> 
               </div> 
               <div className="controls">
                   <i className='material-icons expand' onClick={this.handleSelectFullScreen}>&#xe5d0;</i>
                   <i class="material-icons reduce" onClick={this.exitFullScreen}>&#xe5d1;</i>
               </div>
            </div>
         )
      }
   }
}
