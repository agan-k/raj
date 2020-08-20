import React, { Component } from 'react'
import ReactPlayer from 'react-player'


export default class VideoDetail extends Component {
   constructor(props) {
      super(props)
      // this.state = {
      //    modalShowing: true
      // }
      console.log(props)
   }
   // closeModal = () =>  {
   //    this.setState({
   //       modalShowing: false
   //    })
   // }
   render() {
      return (
      
         <div className='video-detail-container'>
         
            
            <div className='react-player-video'>
               <div className='close-react-player-video' onClick={this.props.closeModal}>
                  &times;
               </div>
               <ReactPlayer
                  url={this.props.videoDetail.video_url}
                  height='90vh'
                  width='80vw'
               />
            </div>
            
       
         </div>
                  
         
            
      )
   }
}
