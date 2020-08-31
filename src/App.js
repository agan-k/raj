import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"


import KA2021 from './components/press/tour_dates/KA2021'

import Home from './components/Home'
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
         videoThumbSelect: null,
         albumSelect: null,
         pressSelect: null,
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
         albumSelect: item
      })

   }
   handleSelectPress = (item) => {
      this.setState({
         pressSelect: item
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
      const albums = albumsData.map((item, index) =>
         <div
            className="albums"
            onClick={() => this.handleSelectAlbums(item, index)}>
            <img src={item.cover} />
         </div>
      )
      const press_releases = pressData.filter(item => item.publication === "Press Release").map(item =>
         <div className="press-list"
           onClick={() => this.handleSelectPress(item)}>
           <li>
             {`${item.publication} - ${item.album}`}
           </li>
         </div>
      )
      const press_reviews = pressData.filter(item => item.publication !== "Press Release").map(item =>
         <div className="press-list"
            onClick={() => this.handleSelectPress(item)}>
            <li>
              {`${item.publication} - ${item.album}`}
            </li>
         </div>
      )
      const press_link = pressData.map(item =>
        <Link to='/press'>
            <div className="home-card-link"
               onClick={() => this.handleSelectPress(item)}>
               {/* &#8599; */}
            </div>
         </Link>
      )
      const video_link = videosData.map(item =>

         <div className="home-card-link"
            onClick={() => this.handleSelectVideos(item)}>
            {/* &#8599; */}
         </div>
      )
      const albums_link = albumsData.map(item =>
         <Link to='/discography'>
            <div className="home-card-link"
               onClick={() => this.handleSelectAlbums(item)}>
               {/* &#8599; */}
            </div>
         </Link>
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
                        pressData={pressData}
                        home_cardsData={home_cardsData}
                        modalShowing={this.state.modalShowing}
                        closeModal={this.closeModal}
                        videoThumbSelect={this.state.videoThumbSelect}
                        albums={albums}
                        press_reviews={press_reviews}
                        press_releases={press_releases}
                        handleSelectHomeCard={this.handleSelectHomeCard}
                        handleSelectVideos={this.handleSelectVideos}
                        handleSelectPress={this.handleSelectPress}
                        press_link={press_link}
                        video_link={video_link}
                        albums_link={albums_link}
                     />
                  </Route>
                  <Route path='/ka2021-tour'>
                     <KA2021 />
                  </Route>
                  <Route path='/bio'>
                     <Bio />
                  </Route>
                  <Route path='/photos'>
                     <Photos />
                  </Route>
                  <Route path='/videos'>
                     <Videos
                        videosData={videosData}
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
                     <Press
                        pressData={pressData}
                        pressSelect={this.state.pressSelect}
                        press_releases={press_releases}
                        press_reviews={press_reviews}
                     />
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
