import React from 'react'
import Iframe from 'react-iframe'
import BandcampPlayer from 'react-bandcamp'

export default function Store(props) {
   return (
      <div className="store container">
         <h1>Store here...</h1>
         {/* <Iframe
            // style={{ border: '0', width: '100px', height: '500px' }}
            width="250px"
            height="475px"
            frameBorder="0"
            url="https://bandcamp.com/EmbeddedPlayer/album=4057622917/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/" >
            <a href="https://pistils.bandcamp.com/album/pistils">Pistils by Rajiv Jayaweera</a>
         </Iframe> */}

<BandcampPlayer album={props.albumsData[0].bandcamp} height='44em' />
      </div>
   )
}
