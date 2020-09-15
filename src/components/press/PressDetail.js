import React, { Component } from 'react'

export default class PressDetail extends Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      window.scrollTo(0, 0);
  }
   render() {
      
      return (
         <div className='press-detail'>

            {this.props.pressSelect ?
            <>
               <img src={this.props.pressSelect.img} style={{maxHeight: '3em', maxWidth: '24em'}}/>
               <h2>{this.props.pressSelect.publication}</h2>
               <h3>{this.props.pressSelect.artist}</h3>
               <h3>{this.props.pressSelect.album}</h3>
               <p>{this.props.pressSelect.label}</p>

               {this.props.pressSelect.body.map(item =>
                  <>
                     <p>{item}</p>
                  </>
                  )}   

                  <img src={this.props.pressSelect.body_img} style={{maxWidth: '40vw'}}/>   
               <p>{this.props.pressSelect.writer}</p>
                  <a href={this.props.pressSelect.url}>
                     <p>{this.props.pressSelect.url}</p>
                  </a>
            </>
               :
            <>
               {this.props.press_quotes}
            </>
         }
         </div>
      )
   }
}
