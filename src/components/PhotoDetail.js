import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.css'

export default class PhotoDetail extends Component {
   constructor(props) {
      super(props)
      this.state = {
         count: 0
      }
      console.log(props)
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
      // <div className='arrow back' onClick={props.previousImage}>
       <i className="fa fa-angle-left fa-1x" aria-hidden="true" onClick={props.previousImage}></i>
      // </div>
    )
    // ===========================
    const NextArrow = (props) => (
      // <div className='arrow next' onClick={props.nextImage}>
        <i className="fa fa-angle-right fa-1x" aria-hidden="true" onClick={props.nextImage}></i>
      // </div>
    )

      return (
         <div className='photo-detail-container'>
            <div className='close' onClick={this.props.closePhotoDetail}>
          &times; 
        </div>
            <div className='photo-detail'>

               <div className='arrow back'>
               {this.state.count !== 0 ?
                  <BackArrow previousImage={this.previousImage} /> :
                  ''}
               </div>

               {this.props.photosData.map((item, key) => {
                  if (this.props.photosData.indexOf(item) === this.state.count) {
                     return (
                        <div
                           className='photo-detail-img-container'
                           key={item.id}   
                        >
                           <img src={item.image} />
                           
                       </div>
                     )}
                  return ''
               })}

               <div className='arrow next'>
                  {this.state.count !== (this.props.photosData.length - 1) ?
                     <NextArrow nextImage={this.nextImage} /> :
                     ''}
                  
               </div>
            </div>
         </div>
      )
   }
}
