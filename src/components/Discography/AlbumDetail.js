import React from 'react'
import Iframe from 'react-iframe'
import BandcampPlayer from 'react-bandcamp'



class AlbumDetail extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      window.scrollTo(0, 0);
  }

   render() {

     return (

         <div className="album-detail">
             {this.props.albumSelect ?
            <>
               <div className='album-info'>
                  <img src={this.props.albumSelect.cover} />
                  <div className='info-box'>
                     <h2>{this.props.albumSelect.description}</h2>
                     <h3>{this.props.albumSelect.title}</h3>
                     <ul>
                        {this.props.albumSelect.personnel.map(item =>
                           <li>{item}</li>
                        )}
                     </ul>
                     {this.props.albumSelect.credits.map(item =>
                     <>
                        <p>{item}</p>
                     </>
                     )}
                    </div>
                    <div className="info-box">
                  {this.props.albumSelect.bandcamp ?
                     <>
                        <BandcampPlayer
                           album={this.props.albumSelect.bandcamp}
                           height='21.1em' width='21.1em'
                           artwork='none'
                            />
                     </> :
                     <>
                        <p>Tracks:</p>
                        <ul>
                        {this.props.albumSelect.tracks.map(item =>
                           <li>{item}</li>
                        )}
                        </ul>
                    </>
                    }
                    
               </div>
               </div>

               
             </> : 
        //===================== ON LOAD (display first album)===================================
              <div className="album-detail">
               <div className="album-info">
                    <img src={this.props.albumsData[0].cover} />
                    <div className="info-box">
                     <h2>{this.props.albumsData[0].description}</h2>
                     <h3>{this.props.albumsData[0].title}</h3>
                     <ul>
                        {this.props.albumsData[0].personnel.map(item =>
                           <li>{item}</li>
                        )}
                     </ul>
                       {this.props.albumsData[0].credits.map(item =>
                           <>
                              <p>{item}</p>
                           </>
                        )}
                  </div>
                  
                    <div className="info-box">
                     <BandcampPlayer
                           album={this.props.albumsData[0].bandcamp}
                           height='21.1em'
                           width='21.1em'
                           artwork='none' />
                    </div>
               </div>
               
               <div className="album-info">
               
               </div>
            </div>
         }
         </div>
      )
   }

}
export default AlbumDetail
