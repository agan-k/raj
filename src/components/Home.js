import React from 'react'
import ReactPlayer from 'react-player'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import Laniakea from './store/products/Laniakea'

import pistils from '../assets/albums/pistils.jpg'
import sikame from '../assets/albums/sikame.jpg'
import laniakea from '../assets/albums/laniakea.jpg'
import four from '../assets/gig_shots/4.jpg'
import two from '../assets/gig_shots/2.jpg'



export default class Home extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         showLaniakea: false
      }
   }
   handleClick = () => {
      this.setState({
         showLaniakea: true
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
                        }}
                     >
                        <Link to="/pistils"><img src={pistils} /></Link>
                     </div>
                     <Link to="/pistils">
                     <h2>1 New album "Pistils" out now!</h2>
                     <p>
                        Rajiv Jayaweera will release his debut album, Pistils on June 5, 2020. Featuring Chris Cheek,
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
                     </Link>
                  </div>
                  <div class="item">
                     <div className="video">
                        <ReactPlayer url='https://youtu.be/n1lvfw0MWMo' width="100%" height="15em" />
                     </div>
                     <h2>2 Ellstandissa single released!!</h2>
   
                     <p>
                        Description of the video here.Description of the video here.Description of the video here.
                        Description of the video here.Description of the video here.
                     </p>
                  </div>

                  
                  <div class="item">
                     <div
                        className="mask"
                        style={{
                           height: '9em',
                           overflow: 'hidden'
                        }}
                     >
                        <Link to="/laniakea"><img src={laniakea} /></Link>
                     </div>
                     <Link to="/laniakea">
                     <h2>3 New Trio Kleine Ahnung album "Laniakea" out now!</h2>
                     <p>
                        Laniakea is the new album from Trio Kleine Ahnung, a collaboration between guitarist Carl Morgan,
                        bassist Sam Anning and drummer Raj Jayaweera. 
                        <br/><br/>
                        Spawned from a week off from a busy European tour
                        schedule, the members contribute stand-out compositions and performances that draw on inspiration
                        from indie-rock, Radiohead and German folk-song.
                     </p>
                     </Link>
                  </div>
                  
                  <div class="item">
                     <div
                        className="mask"
                        style={{
                           height: '20em',
                           overflow: 'hidden'
                        }}
                     >
                     <img
                        // style={{marginTop: '-3em'}}
                        src={two} />
                     </div>
                    
                     <h2>4 Something about this post here</h2>
                     <p>
                        Something about this post here, about this post here about this post here. about this post here
                        about this post here. 3 Something about this post here.
                        <br/><br/>
                        Spawned from a week off from a busy European tour
                        schedule, the members contribute stand-out compositions and performances that draw on inspiration
                        from indie-rock, Radiohead and German folk-song.
                     </p>
                     
                  </div>
            <div class="item">
                     <div
                        className="mask"
                        style={{
                           height: '9em',
                           overflow: 'hidden'
                        }}
                     >
                     <img
                     style={{marginTop: '-6em'}}
                     src={four} />
                     </div>
                     <h2>5 New album "Pistils" out now!</h2>
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
                           height: '20em',
                           overflow: 'hidden'
                        }}
                     >
                        <img src={sikame} />
                     </div>
                     
                     <h2> 6 Something here announced!</h2>
                     <p>
                        Something about this post here, about this post here about this post here. about this post here
                        about this post here. 3 Something about this post here.
                        
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
                        <img src={laniakea} />
                     </div>
                     <h2>7 New album "Pistils" out now!</h2>
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
                     <div className="video">
                        <ReactPlayer url='https://youtu.be/n1lvfw0MWMo' width="100%" height="15em" />
                     </div>
                     <h2>8 Ellstandissa single released!!</h2>
                     <p>Description of the video here.Description of the video here.Description of the video here.
                     Description of the video here.Description of the video here.Description of the video here.
                     Description of the video here.Description of the video here.Description of the video here.
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
                        <img src={pistils} />
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
                        <img src={laniakea} />
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
