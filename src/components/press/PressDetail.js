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
               <h3>{this.props.pressSelect.title}</h3>
               <h4><em>{this.props.pressSelect.subtitle}</em></h4>
               <h4><em>{this.props.pressSelect.subtitle1}</em></h4>
               <h3>{this.props.pressSelect.artist}</h3>
               <h3>{this.props.pressSelect.album}</h3>
               <h5>{this.props.pressSelect.label}</h5>

               {this.props.pressSelect.body.map(item =>
                  <>
                     <p>{item}</p>
                  </>
                  )}   

               <img src={this.props.pressSelect.body_img} style={{maxWidth: '40vw'}}/>   
               <p>{this.props.pressSelect.comment}</p>
               <p>{this.props.pressSelect.writer}</p>
               <a href={this.props.pressSelect.url}>
                  <p>{this.props.pressSelect.url_description}</p>
               </a>
            </>
               :
            <div className='press-quote'>
               {this.props.press_quotes}
            </div>
         }
         </div>
      )
   }
}
