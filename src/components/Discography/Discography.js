import React from 'react'

import AlbumDetail from './AlbumDetail'

class Discography extends React.Component {
   constructor() {
      super()
      this.state = {
      }
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   

   render() {
      return (
         <div className="discography container">

            
            <div className={`${this.props.showMobileDiscographySelect ?
               'open' : ''} dropdown-albums-container`}>
               
               <div className='mobile-albums-container'>
                  {this.props.albums}
               </div>
               <div className='expand-mobile-albums-container' onClick={this.props.handleMobileDiscograpySelect}>
                  <i class="material-icons" >&#xe5c3;</i>
                  {this.props.showMobileDiscographySelect ?
                     <i class="material-icons">&#xe5ce;</i> :
                     <i class="material-icons">&#xe5cf;</i>
                  }
               </div>
               
            </div>
            
      
            <div className='album-select'>
                  <AlbumDetail
                     albumSelect={this.props.albumSelect}
                     albumsData={this.props.albumsData}
                  />
            </div>

            <div className='albums-container'>
               {this.props.albums}
            </div>
            

         </div>
      )
   }
}
export default Discography
