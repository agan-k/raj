import React from 'react'
import PressDetail from './PressDetail'


class Press extends React.Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      window.scrollTo(0, 0);
  }

   render() {
      return (
         <div className='press container'>
            <div className='press-detail-container'>
               <PressDetail
                  pressSelect={this.props.pressSelect}
                  press_quotes={this.props.press_quotes}
               />
            </div>
            <div className='press-list-container'>
               <h2>Press Releases</h2>
               <ul>{this.props.press_releases}</ul>
               <h2>Reviews</h2>
               <ul>{this.props.press_reviews}</ul>
               <h2>Features</h2>
               <ul>{this.props.press_feature}</ul>
            </div>
            
         </div>
      )
   }
}
export default Press
