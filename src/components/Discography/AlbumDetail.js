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
                  <div className='info-box album-cover'>
                     <img src={this.props.albumSelect.cover}/>
                  </div>
                  <div className='info-box credits'>
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
                  <div className="info-box tracks">
                    {this.props.albumSelect.bandcamp ?
                     <>
                        <BandcampPlayer className='audio-player'
                           album={this.props.albumSelect.bandcamp}
                           width='100%'
                           height='100%'
                          artwork='none'
                       />
                     </> :
                     <>
                        <h4>Tracks:</h4>
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

                    <div className="info-box album-cover">
                       <img src={this.props.albumsData[0].cover} />
                    </div>

                    <div className="info-box credits">
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
                  
                    <div className="info-box tracks">
                     <BandcampPlayer className='audio-player'
                           album={this.props.albumsData[0].bandcamp}
                           width='100%'
                           height='100%'
                          artwork='none'
                       />
                    </div>
               </div>
            </div>
         }
         </div>
      )
   }

}
export default AlbumDetail
