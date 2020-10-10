import React from 'react'
import PressDetail from './PressDetail'
import { Link, NavLink } from 'react-router-dom'
import navigation_link from '../../headerNavData';


class Press extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         // showMobilePressQuotes: false,
         // mobilePressDetail: this.props.showMobilePressDetail
      }
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   // handleSelectShowMobilePressQuotes = () => {
   //    this.setState({
   //       showMobilePressQuotes: true
   //    })
   // }
   // closeMobilePressQuotes = () => {
   //    this.setState({
   //       showMobilePressQuotes: false,
   //       mobilePressDetail: false
   //    })
   // }

   render() {
      return (
         <div className='press container'>

            <div className={`${this.props.showMobilePressDetail ||
               this.state.showMobilePressQuotes ?
               'show-mobile' : ''} press-detail-container`}>
               <PressDetail
                  pressSelect={this.props.pressSelect}
                  press_quotes={this.props.press_quotes}
                  closeMobilePressDetail={this.props.closeMobilePressDetail}
                  // closeMobilePressQuotes={this.closeMobilePressQuotes}
               />
            </div>

            <div className='press-list-container'>

               <div className='quotes'> 
                  <h2 onClick={this.props.resetState}>
                     <Link to='./press'>press quotes</Link>
                  </h2>
               </div>
               
               <h2>Press Releases</h2>
               <ul>{this.props.press_releases}</ul>
               <h2>Reviews</h2>
               <ul>{this.props.press_reviews}</ul>
               <h2>Features</h2>
               <ul>{this.props.press_feature}</ul>
               <div className='press-quotes-mobile'>
               <h2>Quotes</h2>
               {this.props.press_quotes}
            </div>
            </div>
            
         </div>
      )
   }
}
export default Press
