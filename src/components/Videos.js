import React, { Component } from 'react'
import VideoDetail from './VideoDetail'

export default class Videos extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div className="videos-container">
            <div className="video-thumb-gallery">
               {this.props.videos}
            </div>
            {this.props.modalShowing && (
               <VideoDetail
                  videoDetail={this.props.videoDetail}
                  closeModal={this.props.closeModal}
               />
            )}
         </div>
      )
   }
}

