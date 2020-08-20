import React from 'react'


class Press extends React.Component {
   constructor() {
      super()
      this.state = {
         pressSelect: null
      }
   }

   handleSelect = (item, index) => {
      this.setState({
         pressSelect: item
      })
   }
   
   render() {

      return (
         <div className="press">
            
            <h1>Press here...</h1>
            
         </div>
      )
   }
}
export default Press
