import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"


class Header extends React.Component {
   constructor() {
      super()
      this.state = {
         show: false
      }
      this.showDropdown = this.showDropdown.bind(this)
      this.hideDropdown = this.hideDropdown.bind(this)
   }

   showDropdown() {
      this.setState({
         show: true
      })
   }
   hideDropdown() {
      this.setState({
         show: false
      })
   }
   render() {
      return (
         <div className="header-container">
   
         <header>
               <nav>
                  <ul className="menu">
                     <li><Link to='/'>Home</Link></li>
                     <li><Link to='/bio'>Bio</Link></li>
                     <ul
                        className={`${this.state.show ?
                        "show" : ""} dropdown-media`}
                        onMouseEnter={this.showDropdown}
                        onMouseLeave={this.hideDropdown}
                     >
                        <li id="media">Media</li>
                        <li><Link to='/photos'>Photos</Link></li>
                        <li><Link to='/videos'>Videos</Link></li>
                     </ul>
                     <li><Link to='/shows'>Shows</Link></li>
                     <li><Link to='/discography'>Discography</Link></li>
                     <li><Link to='/press'>Press</Link></li>
                     <li><Link to='/store'>Store</Link></li>
                     
                  </ul>
               </nav> 
         </header>
         </div>
      )

   }
}
export default Header