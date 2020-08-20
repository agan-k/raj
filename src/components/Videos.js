import React, { Component } from 'react'
import VideoDetail from './VideoDetail'

import videosData from './videosData'


export default class Videos extends Component {
   constructor(props) {
      super(props)
      // this.state = {
      //    videoThumbSelect: null,
      //    modalShowing: false
      // }
   }

   // handleSelect = (item, index) => {
   //    this.setState({
   //       videoThumbSelect: item,
   //       albumSelect: item,
   //       tracks: item.tracks,
   //       modalShowing: true,
   //    })  
   // }

   // closeModal = () =>  {
   //    this.setState({
   //       modalShowing: false
   //    })
   // }

   render() {
      // const videos = this.props.videosData.map(item => 
      //    <div
      //       className="video-thumbnail-container"
      //       onClick={() => this.handleSelect(item)}>
      //       <p>{item.caption}</p>
      //       <img src={item.thumbnail} />
      //    </div>
      // )
      return (
         <div className="videos">
            <div className="video-thumb-gallery">
               {this.props.videos}
            </div>
            {this.props.modalShowing && (
               <>
               <VideoDetail
               videoDetail={this.props.videoThumbSelect}
               closeModal={this.props.closeModal}
               />
               
                  </>
            )}
            <p></p>
         </div>
      )
   }
}

