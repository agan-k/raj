import React from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"

import Home from './components/Home'
import Bio from './components/Bio'
import Photos from './components/Photos'
import Videos from './components/Videos'
import Discography from './components/discography/Discography'
import Shows from './components/Shows'
import Press from './components/press/Press'
import Contact from './components/Contact'
import Header from './Header'
import Footer from './Footer'

import './SharedStyle.css'
import albumsData from './components/discography/albumsData'
import videosData from './components/videosData'
import pressData from './components/press/pressData'
import home_cardsData from './components/home_cardsData'
import navigationData from './headerNavData'

class App extends React.Component {
   constructor() {
      super()
      this.state = {
         // showLanding: true,
         navigationLinkSelect: null,
         videoThumbSelect: null,
         albumSelect: null,
         pressSelect: null,
         modalShowing: false
      }
      this.baseState = this.state
   }
   resetState = () => {
      this.setState(this.baseState)
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   // closeLanding = () => {
   //    this.setState({
   //       showLanding: false
   //    })
   // }
   handleSelectNavigationLink = (item, index) => {
      this.setState({
         navigationLinkSelect: item
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
      const navigation_link = navigationData.map((item, index) =>
         <li className={this.state} onClick={this.resetState}>
            <NavLink exact to={item.navigation_route} activeClassName='active-link'>
               {item.navigation_description}
            </NavLink>
            <li className='outside-link'>
               <a onClick={this.resetState} href={item.url}>{item.external_link}</a>
            </li>
         </li> 
      )
      const albums = albumsData.map((item, index) =>
         <div
            className="albums"
            onClick={() => this.handleSelectAlbums(item, index)}>
            <img src={item.cover} />
         </div>
      )
      const press_quotes = pressData.filter(item => item.quote).map(item =>
         <div className="press-quote">
               <p style={{padding: '.1em', margin: '0'}}><em>
               <span style={{opacity: '.7', fontSize: '2.2em', verticalAlign: 'text-bottom', color: 'grey', padding: '.5em'}}>&#x275E;</span>
                  {item.quote}
               <span style={{ opacity: '.7', fontSize: '2.2em', verticalAlign: 'text-top', color: 'grey', padding: '.5em'}}>&#x275D;</span>
               </em></p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
               <p >{`${item.writer}`}</p> &nbsp; &nbsp;
               <p ><strong><em>{item.publication}</em></strong></p>
            </div>
         </div>
         )
      const press_releases = pressData.filter(item => item.press_release === true).map(item =>
         <div className="press-list"
           onClick={() => this.handleSelectPress(item)}>
           <li>
             {`${item.publication} - ${item.description}`}
           </li>
         </div>
      )
      const press_reviews = pressData.filter(item => item.review === true).map(item =>
         <div className="press-list"
            onClick={() => this.handleSelectPress(item)}>
            <li>
              {`${item.publication} - ${item.description}`}
            </li>
         </div>
      )
      const press_feature = pressData.filter(item => item.feature === true).map(item =>
         <div className="press-list"
            onClick={() => this.handleSelectPress(item)}>
            <li>
            {item.publication}
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
               <Header
                  navigation_link={navigation_link}
               />

               <Switch>
                  <Route exact path='/'>
                     <Home
                        home_cardsData={home_cardsData}
                        press_link={press_link}
                        video_link={video_link}
                        albums_link={albums_link}
                        modalShowing={this.state.modalShowing}
                        closeModal={this.closeModal}
                        videoThumbSelect={this.state.videoThumbSelect}
                     />
                  </Route>
                  <Route path='/bio'>
                     <Bio
                        press_quotes={press_quotes}
                     />
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
                        press_quotes={press_quotes}
                        pressSelect={this.state.pressSelect}
                        press_releases={press_releases}
                        press_reviews={press_reviews}
                        press_feature={press_feature}
                        resetState={this.resetState}
                     />
                  </Route>
                  <Route path='/contact'>
                     <Contact />
                  </Route>
               </Switch>
               <Footer/>
            </div>
        </div>
      )
   }
}
export default App
