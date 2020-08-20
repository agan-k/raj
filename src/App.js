import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import Home from './components/Home'
import Laniakea from './components/store/products/Laniakea'
import Pistils from './components/store/products/Pistils'

import PistilsReview from './components/press/reviews/PistilsReview'
import PistilsRelease from './components/press/releases/PistilsRelease'
import LaniakeaRelease from './components/press/releases/LaniakeaRelease'
import KA2021 from './components/press/tour_dates/KA2021'

import Bio from './components/Bio'
import Photos from './components/Photos'
import Videos from './components/Videos'
import Discography from './components/discography/Discography'
import Shows from './components/Shows'
import Press from './components/press/Press'
import Store from './components/Store'
import Contact from './components/Contact'
import Audio from './Audio'
import Header from './Header'
import Footer from './Footer'

import './SharedStyle.css'
import albumsData from './components/discography/albumsData'
import photosData from './components/photosData'
import videosData from './components/videosData'
import pressData from './components/press/pressData'
import home_cardsData from './components/home_cardsData'


class App extends React.Component {
   constructor() {
      super()
      this.state = {
         // showLanding: true,
         home_cardImageSelect: null,
         videoThumbSelect: null,
         albumSelect: null,
         modalShowing: false
      }
   }

   closeLanding = () => {
      this.setState({
         showLanding: false
      })
   }
   
   handleSelectHomeCard = (item, index) => {
      this.setState({
         home_cardImageSelect: item,
         videoThumbSelect: item,
         // modalShowing: true
      })
   }

   handleSelectVideos = (item, index) => {
      this.setState({
         videoThumbSelect: item,
         modalShowing: true
      })
   }

   handleSelectAlbums = (item, index) => {
      this.setState({
         albumSelect: item,
         tracks: item.tracks
         
      })
   }

   closeModal = () =>  {
      this.setState({
         modalShowing: false,
         videoThumbSelect: null,
         albumSelect: null
      })
   }

   render() {
      const home_cards = home_cardsData.map(item => 
         <div
            className="home-card"
            onClick={() => this.handleSelectHomeCard(item)}>
            <div
               className="mask"
               style={{ maxHeight: '16em', overflow: 'hidden'
            }}>
               <img src={item.img}
               />
               <img src={item.thumbnail}
                  onClick={() => this.handleSelectVideos(item)}
               />
            </div>
            <h2>{item.date}</h2>
            <h2>{item.card_subject}</h2>
            <p>{item.card_blurb}</p>
         </div>
      )
      const videos = videosData.map(item => 
         <div
            className="video-thumbnail-container"
            onClick={() => this.handleSelectVideos(item)}>
            <p>{item.caption}</p>
            <img
               src={item.thumbnail}
               // style={{width: '100%'}}
            />
            {/* <h2>{item.caption}</h2> */}
            
         </div>
      )

      const albums = albumsData.map((item, index) =>
         <div
            className="albums"
            onClick={() => this.handleSelectAlbums(item, index)}>
            <img
               src={item.cover}
            />
         </div>
      )

      return (
         <div className="App">
{/* ======================= LANDING PAGE =========================== */}
            <div className={`${this.state.showLanding ? "" : "hide"} landing`}>
               <div className="album-container">
                  <img src={albumsData[0].cover} />
                  <div className="out-now">
                     <p>PISTILS</p>
                     <br></br>
                     <p>
                        featuring <br></br>
                        Chris Cheek,<br></br>
                        Aaron Goldberg,<br></br> 
                        Lara Bello and<br></br>
                        Sam Aning
                     </p>
                     <button onClick={this.closeLanding}>
                        <Link to='/discography'>Listen/Buy</Link>
                     </button>
                     <br/>
                      <h3 id="enter" onClick={this.closeLanding}>
                        {/* enter site >> */}
                     </h3>
                   </div>
               </div>
            </div>
{/* ======================= LANDING PAGE  end ======================== */}
            
            <div className={`${this.state.showLanding ? "" : "view"} layout`}>
               <Header />
               
               <Switch>
                  <Route exact path='/'>
                     <Home
                        albumsData={albumsData}
                        photosData={photosData}
                        videosData={videosData}
                        videos={videos}
                        pressData={pressData}
                        home_cardsData={home_cardsData}
                        home_cards={home_cards}
                        modalShowing={this.state.modalShowing}
                        closeModal={this.closeModal}
                        videoThumbSelect={this.state.videoThumbSelect}
                        albums={albums}
                     />
                  </Route>
                  <Route path='/laniakea'>
                     <Laniakea
                        albumsData={albumsData}
                        />
                  </Route>
                  <Route path='/pistils'>
                     <Pistils
                        albumsData={albumsData}
                        />
                  </Route>
                  <Route path='/pistils-review'>
                     <PistilsReview
                        albumsData={albumsData}
                        />
                  </Route>
                  <Route path='/pistils-release'>
                     <PistilsRelease
                        pressData={pressData}
                        />
                  </Route>
                  <Route path='/laniakea-release'>
                     <LaniakeaRelease
                        pressData={pressData}
                        />
                  </Route>
                  <Route path='/ka2021-tour'>
                     <KA2021
                        />
                  </Route>
                  <Route path='/bio'>
                     <Bio />
                  </Route>
                  <Route path='/photos'>
                     <Photos
                        albumsData={albumsData}
                     />
                  </Route>
                  <Route path='/videos'>
                     <Videos
                        albumsData={albumsData}
                        videosData={videosData}
                        videoThumbSelect={this.state.videoThumbSelect}
                        videos={videos}
                        modalShowing={this.state.modalShowing}
                        closeModal={this.closeModal}
                     />
                  </Route>
                  <Route path='/discography'>
                     <Discography
                        albumsData={albumsData}
                        albumSelect={this.state.albumSelect}
                        albums={albums}
                     />
                  </Route>
                  <Route path='/shows'>
                     <Shows />
                  </Route>
                  <Route path='/press'>
                     <Press />
                  </Route>
                  <Route path='/store'>
                     <Store />
                  </Route>
                  <Route path='/contact'>
                     <Contact />
                  </Route>
                  <Route path='/audio'>
                     <Audio />
                  </Route>
               </Switch>
               
               <Footer/>
            </div>
        </div>
      )
   }
}

export default App
