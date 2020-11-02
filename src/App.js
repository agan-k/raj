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
import Links from './components/Links'
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
         mobileNavShowing: false,
         navigationLinkSelect: null,
         videoThumbSelect: null,
         albumSelect: null,
         pressSelect: null,
         modalShowing: false,
      /** MOBILE @ max-width_375 */
         showMobileDiscographySelect: false,
         showMobilePressDetail: false
      }
      this.baseState = this.state
   }
   resetState = () => {
      this.setState(this.baseState)
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }

/** MOBILE @ max-width_375 */
   handleOpenMobileNav = () => {
      this.setState({
         mobileNavShowing: !this.state.mobileNavShowing
      })
   }
   handleMobileDiscograpySelect = () => {
      this.setState({
         showMobileDiscographySelect: !this.state.showMobileDiscographySelect
      })
      window.scrollTo(0, 0);
   }
/** MOBILE @ max-width_375 -- E N D */
   
   handleSelectNavigationLink = (item, index) => {
      this.setState({
         navigationLinkSelect: item,
         mobileNavShowing: false
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
         albumSelect: item,
         showMobileDiscographySelect: false
      })
      window.scrollTo(0, 0);
   }
   
   handleSelectPress = (item) => {
      this.setState({
         pressSelect: item,
         showMobilePressDetail: true
      })
   }
   closeModal = () =>  {
      this.setState({
         modalShowing: false,
         videoThumbSelect: null,
         albumSelect: null
      })
   }
   closeMobilePressDetail = () => {
      this.setState({
         showMobilePressDetail: false
      })
   }
   
   render() {
      const navigation_link = navigationData.map(item => 
         !item.external_link ?
            <li className={this.state} onClick={this.resetState}>
               <NavLink exact to={item.navigation_route} activeClassName='active-link'>
                  {item.navigation_description}&nbsp;
               <i className="fa fa-angle-right fa-1x nav-link-arrow" aria-hidden="true"></i>
               </NavLink>
            </li>
            :
            <li className='outside-link'>
               <a onClick={this.resetState} href={item.url}>{item.external_link}&nbsp;
                  <i className="fa fa-angle-right fa-1x nav-link-arrow" aria-hidden="true"></i>
               </a>
            </li>
      )
      const albums = albumsData.map((item, index) =>
         <div
            className="albums"
            onClick={() => this.handleSelectAlbums(item, index)}>
            <img src={item.cover}/>
         </div>
      )
      const press_quotes = pressData.filter(item => item.quote).map(item =>
         <div>
            <p>
               <em>
                  <span style={{opacity: '.3', fontSize: '1.6em', verticalAlign: 'text-bottom', color: 'black3', padding: '.5em'}}>&#x275E;</span>
                     {item.quote}
                  <span style={{ opacity: '.3', fontSize: '1.6em', verticalAlign: 'text-top', color: 'black3', padding: '.5em'}}>&#x275E;</span>
               </em>
            </p>
            <div className='writer-publication' style={{ display: 'flex', justifyContent: 'flex-end'}}>
               <h4 style={{ margin: '0', fontWeight: '100'}}>{`${item.writer}`}</h4> &nbsp; &nbsp;
               <h4 style={{ margin: '0'}}><em>{item.publication}</em></h4>
            </div>
         </div>
      )
      const press_releases = pressData.filter(item => item.press_release === true).map(item =>
         <div className="press-list"
           onClick={() => this.handleSelectPress(item)}>
           <li>
               {`${item.publication} - ${item.description}`}&nbsp;  
               <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
           </li>
         </div>
      )
      const press_reviews = pressData.filter(item => item.review === true).map(item =>
         <div className="press-list"
            onClick={() => this.handleSelectPress(item)}>
            <li>
               {`${item.publication} - ${item.description}`}&nbsp; 
               <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
            </li>
         </div>
      )
      const press_interviews = pressData.filter(item => item.interview === true).map(item =>
         <div className="press-list"
            onClick={() => this.handleSelectPress(item)}>
            <li>
               {`${item.publication}`}&nbsp; 
               <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
            </li>
         </div>
      )
      const press_feature = pressData.filter(item => item.feature === true).map(item =>
         <div className="press-list"
            onClick={() => this.handleSelectPress(item)}>
            <li>
               {item.publication}&nbsp; 
               <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
            </li>
         </div>
      )
      const press_link = pressData.map(item =>
         <Link className='link' to='/press'
            onClick={() => this.handleSelectPress(item)}>
         </Link>
      )
      const video_link = videosData.map(item =>
         <div className='link'
            onClick={() => this.handleSelectVideos(item)}>
         </div>
      )
      const albums_link = albumsData.map(item =>
         <Link className='link' to='/discography'
            onClick={() => this.handleSelectAlbums(item)}>
         </Link>
      )

      return (
         <div className="App">

            <div className='layout'>
               <Header
                  navigation_link={navigation_link}
                  openMobileNav={this.handleOpenMobileNav}
                  mobileNavShowing={this.state.mobileNavShowing}

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
                        press_quotes={press_quotes}
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
                        modalShowing={this.state.modalShowing}
                        videoThumbSelect={this.state.videoThumbSelect}
                     />
                  </Route>
                  <Route path='/discography'>
                     <Discography
                        albumsData={albumsData}
                        albumSelect={this.state.albumSelect}
                        albums={albums}
                        showMobileDiscographySelect={this.state.showMobileDiscographySelect}
                        handleMobileDiscograpySelect={this.handleMobileDiscograpySelect}
                     />
                  </Route>
                  <Route path='/shows'>
                     <Shows
                        albums_link={albums_link}
                     />
                  </Route>
                  <Route path='/press'>
                     <Press
                        pressData={pressData}
                        press_quotes={press_quotes}
                        pressSelect={this.state.pressSelect}
                        press_releases={press_releases}
                        press_reviews={press_reviews}
                        press_interviews={press_interviews}
                        press_feature={press_feature}
                        resetState={this.resetState}
                        showMobilePressDetail={this.state.showMobilePressDetail}
                        closeMobilePressDetail={this.closeMobilePressDetail}
                     />
                  </Route>
                  <Route path='/contact'>
                     <Contact />
                  </Route>
                  <Route path='/links'>
                     <Links />
                  </Route>
               </Switch>
               <Footer/>
            </div>
        </div>
      )
   }
}
export default App
