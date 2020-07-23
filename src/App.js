import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import Home from './components/Home'
import Laniakea from './components/store/products/Laniakea'
import Pistils from './components/store/products/Pistils'

import Bio from './components/Bio'
import Photos from './components/Photos'
import Videos from './components/Videos'
import Discography from './components/Discography/Discography'
import Shows from './components/Shows'
import Press from './components/Press'
import Store from './components/Store'
import Contact from './components/Contact'
import Audio from './Audio'
import Header from './Header'
import Footer from './Footer'

import './SharedStyle.css'
import albumsData from './components/Discography/albumsData'
import videosData from './components/videosData'
import pistils from './assets/albums/pistils.jpg'


class App extends React.Component {
   constructor() {
      super()
      this.state = {
         // showLanding: true,
      }
   }

   closeLanding = () => {
      this.setState({
         showLanding: false
      })
   }

   render() {
      return (
         <div className="App">
{/* ======================= LANDING PAGE =========================== */}
            <div className={`${this.state.showLanding ? "" : "hide"} landing`}>
               <div className="album-container">
                  <img src={pistils} />
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
                        enter site >>
                     </h3>
                   </div>
               </div>
            </div>
{/* ======================= LANDING PAGE  end ======================== */}
            
            <div className={`${this.state.showLanding ? "" : "view"} layout`}>
               <Header />
               
               <Switch>
                  <Route exact path='/'>
                        <Home />
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
                     />
                  </Route>
                  <Route path='/discography'>
                     <Discography
                        albumsData={albumsData}
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
