import React from 'react'
import {ReactComponent as Instagram} from './assets/icons/instagram.svg'
import {ReactComponent as Facebook} from './assets/icons/facebook.svg'
import {ReactComponent as YouTube} from './assets/icons/youtube.svg'


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
                  <div
                     style={{
                        width: 'min-content',
                        height: 'min-content',
                        display: 'flex',
                        paddingLeft: '.2em',
                     }}>
                     <a href="https://www.instagram.com/euroraj/"><Instagram style={{height: '1.2em'}}/></a>
                     <a href="https://www.facebook.com/rajivjayaweera/"><Facebook style={{height: '1.2em'}}/></a>
                     <a href="https://www.youtube.com/user/euroraj/videos"><YouTube style={{height: '1.2em'}}/></a>
                  </div>
               </ul>
            </nav>
            
         </div>
      )
   }
}
export default Header