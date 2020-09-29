import React, { Component } from 'react'
import ReactPlayer from 'react-player'


export default class VideoDetail extends Component {
   constructor(props) {
      super()
      this.state = {
         // videoPlayerSelect: null,
         fullScreenVideo: false

      }
   }

   // handleVideoPlayerSelect = () => {
   //    this.setState({
   //       videoPlayerSelect: item
   //    })
   // }

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
      const showcase_videos = this.props.videosData.map(item =>
         <ReactPlayer
            url={item.video_url}
            height='90vh'
            width='80vw'
         />
      )
      const showcaseVideoPlayer = showcase_videos.map(item =>
         <div>
            {this}
         </div>
         )
     
         
      return (
         <div className={`${this.state.fullScreenVideo ? "view-full-screen" : ""} video-detail`}>
            {/* {showcase_videos} */}
         </div>
      )



      // if (this.props.videoDetail) {
      //    return (
      //       <div className='video-detail view-full-screen'>

      //           <div className='react-player-video'>
      //              <i class="material-icons close" onClick={this.props.closeModal}>&#xe14c;</i>   
      //              <ReactPlayer
      //                 url={this.props.videoDetail.video_url}
      //                 height='90vh'
      //                 width='80vw'
                     
      //              />
      //           </div>

      //        </div>

      //    )
      // } else if (this.props.showcaseVideoDetail) {
      //    return (
      //       <div className={`${this.state.fullScreenVideo ? "view-full-screen" : ""} video-detail`}>
               
      //           <div className='react-player-video' >
      //              <i className='material-icons full' onClick={this.handleSelectFullScreen}>&#xe5d0;</i>
      //              <i class="material-icons close" onClick={this.exitFullScreen}>&#xe14c;</i>
                  
      //              {this.props.showcaseVideoDetail.id == 1 ?
                      
      //                 <ReactPlayer
      //                    url={this.props.showcaseVideoDetail.video_url}
      //                    height='100%'
      //                    width='100%'
      //                    light={this.props.showcaseVideoDetail.thumbnail}
      //             /> 
      //                : 

      //                <ReactPlayer
      //                    url={this.props.showcaseVideoDetail.video_url}
      //                    height='100%'
      //                    width='100%'
      //                    light={this.props.showcaseVideoDetail.thumbnail}
      //                   />
      //              }
                
      //           </div> 
      //        </div>
      //    )
      // } else {
      //    return (
      //       <div className={`${this.state.fullScreenVideo ? "view-full-screen" : ""} video-detail`}>
               
      //           <div className='react-player-video' >
      //              <i className='material-icons full' onClick={this.handleSelectFullScreen}>&#xe5d0;</i>
      //              <i class="material-icons close" onClick={this.exitFullScreen}>&#xe14c;</i>
                  
      //              <ReactPlayer
      //                 url={this.props.videosData[0].video_url}
      //                 height='100%'
      //                 width='100%'
      //                 light={this.props.videosData[0].thumbnail}
      //               /> 
                
      //           </div> 
      //        </div>
      //    )
      // }
      // return (
         
      //    <div className='video-detail-container'>
      //    {this.props.videoDetail ?
      //       <div className='video-detail view-full-screen'>

      //          <div className='react-player-video'>
      //             <i class="material-icons close" onClick={this.props.closeModal}>&#xe14c;</i>   
      //             <ReactPlayer
      //                url={this.props.videoDetail.video_url}
      //                height='90vh'
      //                width='80vw'
      //                light={this.props.videoDetail.thumbnail}
      //             />
      //          </div>

      //       </div> :

      //       <div className={`${this.state.fullScreenVideo ? "view-full-screen" : ""} video-detail-container`}>
               
      //          <div className='react-player-video' >
      //             <i className='material-icons full' onClick={this.handleSelectFullScreen}>&#xe5d0;</i>
      //             <i class="material-icons close" onClick={this.exitFullScreen}>&#xe14c;</i>
                  
      //             <ReactPlayer
      //                url={this.props.showcaseVideoDetail.video_url}
      //                height='100%'
      //                width='100%'
      //                light={this.props.showcaseVideoDetail.thumbnail}
      //              /> 
                
      //          </div> 
      //       </div>
      //    }
      //    </div>
      // )
   }
}
