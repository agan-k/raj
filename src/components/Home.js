import React from 'react'
import ReactPlayer from 'react-player'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import VideoDetail from './VideoDetail'



export default class Home extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         modalShowing: false
      }
   }

   handleSelect = (index) => {
      this.setState({
         modalShowing: true
      })
   }

   closeModal = () =>  {
      this.setState({
         modalShowing: false
      })
   }
    
   render() {

      return (
               <div class="home-container">
                  <div class="item">
                     <div
                        className="mask"
                        style={{
                           height: '9em',
                           overflow: 'hidden'
                        }}>
                        <Link to="/pistils"><img src={this.props.albumsData[0].cover} /></Link>
                     </div>
                     <Link to="/pistils">
                     <h2>1 Lorem ipsum dolor sit amet, consectetur!</h2>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </p>
                     </Link>
                  </div>
                  <div class="item">
                     <div className="video">
                        <img
                           src={this.props.videosData[0].thumbnail}
                           onClick={this.handleSelect} />
                  
                        {this.state.modalShowing && (
                        <VideoDetail
                           videoDetail={this.props.videosData[0]}
                           closeModal={this.closeModal} />
                        )}
                     </div>
                  
                    
                     <h2>2 Lorem ipsum dolor sit amet, consectetur!!</h2>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        
                     </p>
                  </div>

                  
                  <div class="item">
                     <div
                        className="mask"
                        style={{ height: '9em', overflow: 'hidden'
                     }}>
                        <Link to="/laniakea"><img src={this.props.albumsData[1].cover} /></Link>
                     </div>
                     <Link to="/laniakea">
                        <h2>3 Duis aute irure dolor!</h2>
                        <p>
                           Excepteur sint occaecat cupidatat 
                           non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           <br/><br/>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                           voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                           non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                     </Link>
                  </div>
                  
                  <div class="item">
                     <div
                        className="mask"
                        style={{
                           height: '10em',
                           overflow: 'hidden'
                     }}>
                        <img
                        src={this.props.albumsData[4].cover} />
                     </div>
                    
                     <h2>4 Lorem ipsum dolor sit amet, consectetur</h2>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </p>
                  </div>
            
                  <div class="item">
                     <div
                        className="mask"
                        style={{
                           height: '14em',
                           overflow: 'hidden'
                      }}>
                        <img
                        style={{marginTop: '-6em'}}
                        src={this.props.albumsData[7].cover} />
                      </div>
               
                     <h2>5  Ut enim ad minim veniam!</h2>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        
                     </p>
                  </div>
                  <div class="item">
                     <div
                        className="mask"
                        style={{
                           height: '20em',
                           overflow: 'hidden'
                        }}
                     >
                        <img src={this.props.albumsData[3].cover} />
                     </div>
                     <h2> 6 Lorem ipsum dolor sit amet, consectetur!</h2>
                     <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </p>
                    
                  </div>
                  <div class="item">
                     <div
                        className="mask"
                        style={{
                           height: '15em',
                           background: 'url(./assets/backgrounds/1a.jpg)',
                           overflow: 'hidden'
                        }}>
                        <img src={this.props.photosData[1].image} />
                     </div>
                     <h2>7 Excepteur sint occaecat cupidatat</h2>
                     <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                     </p>
                  </div>
                  <div class="item">
                  <div className="video">
                        <img
                           src={this.props.videosData[2].thumbnail}
                           onClick={this.handleSelect} />
                  
                     {this.state.modalShowing && (
                     <VideoDetail
                        videoDetail={this.props.videosData[0]}
                        closeModal={this.closeModal} />
                     )}
                     </div>
                     <h2>8 Ut enim ad minim veniam!</h2>
                     <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                     </p>
                  </div>
                  <div class="item">
                     <div
                        className="mask"
                        style={{
                           height: '9em',
                           background: 'url(./assets/backgrounds/1a.jpg)',
                           overflow: 'hidden'
                        }}
                     >
                        <img src={this.props.albumsData[0].cover} />
                     </div>
                     <h2>9 New album "Pistils" out now!</h2>
                     <p>Rajiv Jayaweera will release his debut album, Pistils on June 5, 2020. Featuring Chris Cheek,
                     Aaron Parks, Lara Bello, Hugh Stuckey and Sam Anning, it will come out on Outside in Music (USA)
                     and Earshift Music (Australia).
                <br />
                        <br />
                To pre-order a CD, vinyl LP or digital copy, you can visit pistils.bandcamp.com
                <br />
                        <br />
                Unfortunately, Rajiv’s scheduled New York album release show at Birdland Jazz Club on May 3rd
                was cancelled due to the current situation.
               </p>
                  </div>
                  <div class="item">
                     <div
                        className="mask"
                        style={{
                           height: '9em',
                           background: 'url(./assets/backgrounds/1a.jpg)',
                           overflow: 'hidden'
                        }}
                     >
                        <img src={this.props.albumsData[1].cover} />
                     </div>
                     <h2>10 New Trio Kleine Ahnung album "Laniakea" out now!</h2>
                     <p>Laniakea is the new album from Trio Kleine Ahnung, a collaboration between guitarist Carl Morgan,
                     bassist Sam Anning and drummer Raj Jayaweera. Spawned from a week off from a busy European tour
                     schedule, the members contribute stand-out compositions and performances that draw on inspiration
                     from indie-rock, Radiohead and German folk-song.
                     </p>
                  </div>
               </div>
          
      )
   }
}
