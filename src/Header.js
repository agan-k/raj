import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"



class Header extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
      }
   }
   
   render() {
      return (
         <div className="header">
            <h1 id="logo">Rajiv Jayaweera</h1>
                     <nav>
                        <ul className="menu">
                           {this.props.navigation_link}
                        </ul>
                     </nav>
            
         </div>
      )
   }
}
export default Header