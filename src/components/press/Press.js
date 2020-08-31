import React from 'react'
import PressDetail from './PressDetail'


class Press extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div className='press-container'>
            <div className='press-detail-container'>
               <PressDetail
                  pressSelect={this.props.pressSelect}
                  pressData={this.props.pressData}
               />
            </div>
            <div className='press-list-container'>
               <h2>Press Releases</h2>
               <ul>{this.props.press_releases}</ul>
               <h2>Reviews</h2>
               <ul>{this.props.press_reviews}</ul>
             </div>
         </div>
      )
   }
}
export default Press
