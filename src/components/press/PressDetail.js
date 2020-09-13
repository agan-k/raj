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
               <h2>{this.props.pressSelect.publication}</h2>
               <h3>{this.props.pressSelect.artist}</h3>
               <h3>{this.props.pressSelect.album}</h3>
               <p>{this.props.pressSelect.label}</p>

               {this.props.pressSelect.body.map(item =>
                  <>
                     <p>
                        {item}
                     </p>
                  </>
                  )}

               <p>{this.props.pressSelect.quote}</p>
               <p>{this.props.pressSelect.writer}</p>
               <a href={this.props.pressSelect.url}>{this.props.pressSelect.link}</a>
            </>
               :
            <>
               {this.props.press_quotes}
            </>
            //    <div className="quotes-container">
            //       <p><em>{this.props.press_reviews.quote}</em></p>
            //       <p>
            //          <em><strong>
            //             {this.props.press_reviews.writer}
            //          </strong></em>
            //       </p>
            //       <p>
            //          {this.props.press_reviews.publication}
            //       </p>
            // </div>
         }
         </div>
      )
   }
}
