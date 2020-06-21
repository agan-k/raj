import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './components/Home'

export default class Layout extends Component {
   render() {
      return (
         <div className="layout">
            <Header />
            <Home />
            <Footer /> 
            
         </div>
      )
   }
}
