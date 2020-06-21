import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Landing from './components/Landing'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Discography from './components/Discography'
import Videos from './components/Videos'
import Photos from './components/Photos'
import Calendar from './components/Calendar'
import Store from './components/Store'
import Header from './Header'
import Footer from './Footer'

import './SharedStyle.css'


function App() {
  return (
    <div className="App">
        <Switch>
           <Route exact path='/'>
              <Landing />
           </Route>
           <Route path='/welcome'>
              <Layout />
           </Route>
           <Route path='/home'>
              <Home />
           </Route>
           <Route path='/about'>
              <About />
           </Route>
           <Route path='/discography'>
              <Discography />
           </Route>
           <Route path='/videos'>
              <Videos />
           </Route>
           <Route path='/photos'>
              <Photos />
           </Route>
           <Route path='/calendar'>
              <Calendar />
           </Route>
           <Route path='/store'>
              <Store />
           </Route>
        </Switch>
    </div>
  )
}

export default App
