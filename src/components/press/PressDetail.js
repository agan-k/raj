import React, { Component } from 'react'

export default class PressDetail extends Component {
   constructor(props) {
      super(props)
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

               <p>{this.props.pressSelect.writer}</p>
               <a href={this.props.pressSelect.url}>link</a>
            </>
               :
            <>
               <h2>{this.props.pressData[0].publication}</h2>
               <h3>{this.props.pressData[0].artist}</h3>
               <h3>{this.props.pressData[0].album}</h3>
               <p>{this.props.pressData[0].label}</p>

                  {this.props.pressData[0].body.map(item =>
                     <>
                        <p>{item}</p>
                     </>
                  )}
               <p>{this.props.pressData[0].writer}</p>
               <a href={this.props.pressData[0].url}>link</a>
            </>
         }
         </div>
      )
   }
}
