import React, { Component } from 'react'
import VideoDetail from './VideoDetail'

import videosData from './videosData'


export default class Videos extends Component {
   constructor(props) {
      super(props)
      this.state = {
         videoThumbSelect: null,
         modalShowing: false
      }
   }

   handleSelect = (item, index) => {
      this.setState({
         videoThumbSelect: item,
         albumSelect: item,
         tracks: item.tracks,
         modalShowing: true,
      })  
   }

   closeModal = () =>  {
      this.setState({
         modalShowing: false
      })
   }

   render() {
      const videos = videosData.map(item => 
         <div
            className="video-thumbnail-container"
            onClick={() => this.handleSelect(item)}>
            <img src={item.thumbnail} />
            <p>{item.caption}</p>
         </div>
      )
      return (
         <div className="videos-container">
            <div className="video-thumb-gallery">
               {videos}
            </div>
            {this.state.modalShowing && (
               <VideoDetail
                  videoDetail={this.state.videoThumbSelect}
                  closeModal={this.closeModal}
               />
            )}
         </div>
      )
   }
}

