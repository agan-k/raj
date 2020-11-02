import React, { Component } from 'react'
import VideoDetail from './VideoDetail'
import ReactPlayer from 'react-player'
import videosData from './videosData'


export default class Videos extends Component {
   constructor(props) {
      super()
      this.state = {
         showcaseVideoThumbSelect: null,
         modalShowing: false
      }
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   handleSelectShowcase = (item, index) => {
      this.setState({
         showcaseVideoThumbSelect: item,
         modalShowing: true,
      })
   }
   closeModal = () =>  {
      this.setState({
         modalShowing: false
      })
   }

   render() {
      const showcase_thumbnails = this.props.videosData.filter(item =>
         item.videos_showcase !== 'no').map(item => {
            return (
               <div className="video-thumbnail-container"
                  onClick={() => this.handleSelectShowcase(item)}>
                  <p>{item.caption}</p>
                  <img src={item.video_thumbnail}/>
               </div>
         )}
      )
      return (
         <div className="videos container">

            

            
            {/* {this.state.modalShowing && ( */}
                  <VideoDetail
                     showcaseVideoDetail={this.state.showcaseVideoThumbSelect}
                     closeModal={this.closeModal}
                     videosData={this.props.videosData}
                  />
             {/* )}  */}
            
            <div className="video-thumb-gallery">
               {showcase_thumbnails}
            </div>
         </div>
      )
   }
}

