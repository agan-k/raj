import React from 'react'
import photosData from './photosData'
import PhotoDetail from './PhotoDetail'

export default class Photos extends React.Component {
   constructor() {
      super()
      this.state = {
         isShowing: false
      }
   }

   handleSelect = (item, index) => {
      this.setState({
         isShowing: true,
         index: index
      })
   }

   colsePhotoDetail = () => {
      this.setState({
         isShowing: false
      })

   }

   render() {
      let photos = photosData.map((item, index) => 
         <div
            style={{
               height: '5em',
               width: '5em',
               padding: '.3em',
               overflow: 'hidden'
            }}
            onClick={() => this.handleSelect(item, index)}
         >
            <img
               style={{ height: '5em' }}
               src={item.image} />
         </div>
         )
      return (
         <div className="photos">
            <div className='image-gallery'>
               {photos}
               {photos}
               {photos}
               {photos}
               {photos}
               {photos}
               {photos}
               {photos}
               {photos}
               {photos}
            </div>
            {this.state.isShowing && (
               <PhotoDetail
                  index={this.state.index}
                  photosData={photosData}
                  colsePhotoDetail={this.colsePhotoDetail}
               />
            )}
         </div>
         
         
      )
   }

}
