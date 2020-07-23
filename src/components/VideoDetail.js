import React, { Component } from 'react'
import ReactPlayer from 'react-player'


export default class VideoDetail extends Component {
   constructor(props) {
      super(props)
      console.log(props)
   }
   render() {
      return (
         <div className='video-detail-container'>
            <div className='close-react-player-video' onClick={this.props.closeModal}>
               &times;
               <p>close</p> 
            </div>
            <div className='react-player-video'>
               <ReactPlayer
                  url={this.props.videoDetail.url}
                  height='90vh'
                  width='80vw'
               />
            </div>
            
         </div>
      )
   }
}
