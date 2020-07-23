import React, { Component } from 'react'
import videosData from './videosData'
import VideoDetail from './VideoDetail'

export default class Videos extends Component {
   constructor(props) {
      super(props)
      this.state = {
         modalShowing: false
      }
   }

   handleSelect = () => {
      this.setState({
         modalShowing: true
      })
      // alert('clck')
   }

   render() {
      // const videos = videosData.map(item => 
      //    <div
      //       className="video-thumbnail-container"
      //       onClick={this.props.handleSelect}
      //    >
      //       <img
               
      //          src={item.thumbnail} />
      //       <p>{item.caption}</p>
      //    </div>
      //    )
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

