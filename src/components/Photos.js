import React from 'react'
import photosData from './photosData'
import PhotoDetail from './PhotoDetail'

export default class Photos extends React.Component {
   constructor(props) {
      super(props)
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



   closePhotoDetail = () => {
      this.setState({
         isShowing: false
      })
   }


   render() {
      let photos = photosData.map((item, index) =>
         <div
            className='image-container'
            key={item.id}
            onClick={() => this.handleSelect(item, index)}
         >
            <img
               // style={{ height: '5em' }}
               src={item.image} />
         </div>
         )
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
