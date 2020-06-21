import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import Home from './components/Home'
import Bio from './components/Bio'
import Photos from './components/Photos'
import Videos from './components/Videos'
import Discography from './components/Discography'
import Shows from './components/Shows'
import Press from './components/Press'
import Store from './components/Store'
import Header from './Header'
import Footer from './Footer'


import './SharedStyle.css'
import pistils from './assets/albums/pistils.jpg'


class App extends React.Component {
   constructor() {
      super()
      this.state = {
         showLanding: true
      }
      this.closeLanding = this.closeLanding.bind(this)
   }

   closeLanding() {
      this.setState({
         showLanding: false
      })
   }

   render() {

      return (
         <div className="App">
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
                   <button>listen/buy</button><br></br>
                     <h3 id="enter"
                        onClick={this.closeLanding}>enter site >></h3>
                   {/* <a  id="enter" href="/index.js">enter site >></a> */}
                </div>
             </div>
            </div>
            
            <div className={`${this.state.showLanding ? "" : "view"} layout`}>
            <Header />
            <Switch>
               {/* <Route exact path='/'>
                  <Landing />
               </Route>
               <Route path='/welcome'>
                  <Layout />
               </Route> */}
               <Route exact path='/'>
                  <Home />
               </Route>
               <Route path='/bio'>
                  <Bio />
               </Route>
               <Route path='/photos'>
                  <Photos />
               </Route>
               <Route path='/videos'>
                  <Videos />
                  </Route>
                  <Route path='/discography'>
                  <Discography />
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
            </Switch>
            <Footer/>
            </div>
        </div>
      )
   }
}

export default App
