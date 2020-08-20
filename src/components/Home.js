import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import VideoDetail from './VideoDetail'



export default class Home extends React.Component {
   constructor(props) {
      super(props)
   }
    
   render() {
      

      return (
               <div className="home-container">
                  <div className="item">
                     <Link to="/pistils-review">
                        {this.props.home_cards[0]}
                     </Link>
                  </div>
                  
                  <div className="item">
                     <a href="https://jazztrail.net/blog/rajiv-jayaweera-pistils-album-review">
                        {this.props.home_cards[1]} 
                     </a>
                  </div>
                  
                  <div className="item">
                     <Link to="/pistils-release">
                        {this.props.home_cards[2]}
                     </Link>
                  </div>
                  
                  <div className="item">
                     {/* <div className="video-card"> */}
                        {this.props.home_cards[3]}
                        {this.props.modalShowing && (
                        <VideoDetail
                           videoDetail={this.props.videoThumbSelect}
                           closeModal={this.props.closeModal} />
                        )}
                     {/* </div> */}
                  </div>
                  
                  <div className="item">
                     {/* <div className="video-card"> */}
                        {this.props.home_cards[4]}
                        {this.props.modalShowing && (
                        <VideoDetail
                           videoDetail={this.props.videoThumbSelect}
                           closeModal={this.props.closeModal} />
                        )}
                     {/* </div> */}
                  </div>

                  <div className="item">
               
                     <Link to="/laniakea-release">
                        {this.props.home_cards[5]}
                     </Link>
                  </div>
                  
                  <div className="item">
                     <Link to="/ka2021-tour">
                        {this.props.home_cards[6]}
                     </Link>
                  </div>
            
               </div>
          
      )
   }
}
