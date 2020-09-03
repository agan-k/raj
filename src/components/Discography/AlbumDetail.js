import React from 'react'

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
                 <img src={this.props.albumSelect.cover} />


               <div className="album-info">
                 <p className="album-description">{this.props.albumSelect.description}</p>
                 <p className="album-title">{this.props.albumSelect.title}</p>

                 {this.props.albumSelect.tracks.map(item =>
                     <>
                        <p>{item}</p>
                     </>
                     )}
                 {this.props.albumSelect.personnel.map(item =>
                     <>
                        <p>{item}</p>
                     </>
                     )}
                  {this.props.albumSelect.credits.map(item =>
                     <>
                        <p>{item}</p>
                     </>
                     )}
               </div>
             </> :
        //===================== ON LOAD (display first album)===================================
            <div className="album-detail">
               <img src={this.props.albumsData[0].cover} />
               <div className="album-info">
                  <p className="album-description">{this.props.albumsData[0].description}</p>
                  <p className="album-title">{this.props.albumsData[0].title}</p>

                  {this.props.albumsData[0].tracks.map(item =>
                     <>
                        <p>{item}</p>
                     </>
                     )}
                  {this.props.albumsData[0].personnel.map(item =>
                     <>
                        <p>{item}</p>
                     </>
                     )}
                  {this.props.albumsData[0].credits.map(item =>
                     <>
                        <p>{item}</p>
                     </>
                     )}
               </div>
            </div>
         }
         </div>
      )
   }

}
export default AlbumDetail
