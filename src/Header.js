import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"



class Header extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         // show: false
         navigationLinkSelect: null,
      }
   }
   handleSelectNavigationLink = (item, index) => {
      this.setState({
         navigationLinkSelect: item
      })
   }
   render() {
      const navigation_link = this.props.navigationData.map((item, index) =>

         <li onClick={() => this.handleSelectNavigationLink(item, index)}>
            <Link to={item.navigation_route}>{item.navigation_description}</Link>
         </li>
      )
      return (
         <div className="header">

            <h1 id="logo">Rajiv Jayaweera</h1>
            <nav>
               <ul className="menu">
                  
                     {navigation_link}
                  

                     {/* <li className={this.state.homeLinkSelect ? 'current' : ''}>
                     <Link
                        onClick={this.handleSelectHomeLink}
                        to='/'>home</Link></li>

                     <li className={this.state.bioLinkSelect ? 'current' : ''}>
                     <Link
                        onClick={this.handleSelectBioLink}
                        to='/bio'>bio</Link></li>

                     <li className={this.state.photosLinkSelect ? 'current' : ''}>
                     <Link
                        onClick={this.handleSelectPhotosLink}
                        to='/photos'>photos</Link></li>

                     <li className={this.state.videosLinkSelect ? 'current' : ''}>
                     <Link
                        onClick={this.handleSelectVideosLink}
                        to='/videos'>videos</Link></li>

                     <li className={this.state.showsLinkSelect ? 'current' : ''}>
                     <Link
                        onClick={this.handleSelectShowsLink}
                        to='/shows'>shows</Link></li>

                     <li className={this.state.discographyLinkSelect ? 'current' : ''}>
                     <Link
                        onClick={this.handleSelectDiscographyLink}
                        to='/discography'>discography</Link></li>

                     <li className={this.state.pressLinkSelect ? 'current' : ''}>
                     <Link
                        onClick={this.handleSelectPressLink}
                        to='/press'>press</Link></li>

                     <li className={this.state.storeLinkSelect ? 'current' : ''}>
                     <Link
                        onClick={this.handleSelectStoreLink}
                        to='/store'>store</Link></li>

                     <li className={this.state.contactLinkSelect ? 'current' : ''}>
                     <Link
                        onClick={this.handleSelectContactLink}
                        to='/contact'>contact</Link></li> */}
                  </ul>
               </nav>
         </div>
      )
   }
}
export default Header