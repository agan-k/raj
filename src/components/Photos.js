import React from 'react'
import photosData from './photosData'
import PhotoDetail from './PhotoDetail'

export default class Photos extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         isShowing: false,
         index: null
      }
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }

   handleSelect = (item, index) => {
      this.setState({
         isShowing: true,
         index: index
      })
   }
   closePhotoDetail = () => {
      this.setState({
         isShowing: false
      })
   }
   render() {
      let photos = photosData.map((item, index) => {
         if (item.vertical_shot === true) {
            return (
               <div className='image-container vertical'>
                  <img
                     src={item.image}
                     onClick={() => this.handleSelect(item, index)}
                  />
               </div>
            )
         } else {
            return (
               <div className='image-container horizontal'>
                  <img
                     src={item.image}
                     onClick={() => this.handleSelect(item, index)}
                  />
               </div>
            )
         }
         
      })
      return (
         <div className="photos container">

            {this.state.isShowing && (
               <PhotoDetail
                  closePhotoDetail={this.closePhotoDetail}
                  index={this.state.index}
                  photosData={photosData}
               />
            )}
            
            <div className='image-gallery'>
               {photos}
            </div>
         </div>
      )
   }

}
