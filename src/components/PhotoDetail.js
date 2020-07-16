import React, { Component } from 'react'

export default class PhotoDetail extends Component {
   constructor(props) {
      super(props)
      this.state = {
         count: 0,
         slideRight: false,
         slideLeft: false
      }
   }

   componentDidMount() {
      this.setState({
         count: this.props.index
      })
   }




   render() {
      return (
         <div>
            
         </div>
      )
   }
}
