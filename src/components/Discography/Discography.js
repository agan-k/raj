import React from 'react'

import AlbumDetail from './AlbumDetail'

class Discography extends React.Component {
   constructor() {
      super()
   }
   componentDidMount() {
      window.scrollTo(0, 0);
  }

   render() {
      return (
         <div className="discography container">

            <div className='albums-container'>
               {this.props.albums}
            </div>

            <div className='album-select'>
                  <AlbumDetail
                     albumSelect={this.props.albumSelect}
                     albumsData={this.props.albumsData}
                  />
            </div>

            

         </div>
      )
   }
}
export default Discography
