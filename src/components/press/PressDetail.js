import React, { Component } from 'react'

export default class PressDetail extends Component {
   constructor(props) {
      super(props)
      this.state = {
         
      }
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   
   render() {
      return (
         <div className='press-detail'>
            <i class="material-icons close-press-detail" onClick={this.props.closeMobilePressDetail}>&#xe14c;</i>
            <br />
            <br />
            {this.props.pressSelect ?
            <>
               <img src={this.props.pressSelect.img} />
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

               <img className='feature-img' src={this.props.pressSelect.body_img}/>   
               <p>{this.props.pressSelect.comment}</p>
               <p>{this.props.pressSelect.writer}</p>
               <a href={this.props.pressSelect.url}>
               <p>{this.props.pressSelect.url_description}&nbsp;
                  <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
               </p> 
               </a>
            </>
               :
            <div className='press-quotes'>
               {this.props.press_quotes}
            </div>
         }
         </div>
      )
   }
}
