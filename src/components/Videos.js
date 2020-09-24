import React, { Component } from 'react'
import VideoDetail from './VideoDetail'


export default class Videos extends Component {
   constructor(props) {
      super(props)
      this.state = {
         showcaseThumbSelect: null,
         modalShowing: false
      }
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   handleSelectShowcase = (item, index) => {
      this.setState({
         showcaseThumbSelect: item,
         modalShowing: true,
      })
   }
   closeModal = () =>  {
      this.setState({
         modalShowing: false
      })
   }

   render() {
      const showcase = this.props.videosData.filter(item =>
         item.videos_showcase !== 'no').map(item =>
         <div className="video-thumbnail-container"
            onClick={() => this.handleSelectShowcase(item)}>
            <p>{item.caption}</p>
            <img src={item.thumbnail}/>
         </div>
      )

      return (
         <div className="videos container">

            <div className="video-thumb-gallery">
               {showcase}
            </div>

            {this.state.modalShowing && (
                  <VideoDetail
                     showcaseDetail={this.state.showcaseThumbSelect}
                     closeModal={this.closeModal}
               />
            )}
            <p></p>
         </div>
      )
   }
}

