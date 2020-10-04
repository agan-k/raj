import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.css'

export default class PhotoDetail extends Component {
   constructor(props) {
      super(props)
      this.state = {
         
      }
      this.nextImage = this.nextImage.bind(this);
      this.previousImage = this.previousImage.bind(this);
   }

   componentDidMount() {
      this.setState({
         count: this.props.index
      })
   }
   nextImage() {
      this.setState({
         count: this.state.count + 1,

      })
   }
   previousImage() {
      this.setState({
         count: this.state.count - 1,

      })
   }
   render() {
    // ===========================
    const BackArrow = (props) => (
      <div onClick={props.previousImage}>
         <i className="fa fa-angle-left fa-1x" aria-hidden="true"></i>
      </div>
    )
    // ===========================
    const NextArrow = (props) => (
      <div onClick={props.nextImage}>
         <i className="fa fa-angle-right fa-1x" aria-hidden="true"></i>
      </div>
    )
      return (
         <div className='photo-detail-container'>

            <div className='close-photo' onClick={this.props.closePhotoDetail}>
               &times;
            </div>

            <div className='photo-detail'>

               <div className='arrow back'>
               {this.state.count !== 0 ?
                  <BackArrow previousImage={this.previousImage} />
                  : ''
               }
               </div>

            {this.props.photosData.map((item) => {
            if (this.props.photosData.indexOf(item) === this.state.count) {
               return (

               <div className='photo-detail-img-container'>
                     <img src={item.image} />
                     <p>{item.caption}</p>
               </div>
               )}
            })}
                 
               <div className='arrow next'>
               {this.state.count !== (this.props.photosData.length - 1) ?
                  <NextArrow nextImage={this.nextImage} />
                  : ''
               }
               </div>
            </div>
         </div>
      )
   }
}
