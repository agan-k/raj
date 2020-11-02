import React from 'react'
import { Link } from "react-router-dom"

import VideoDetail from './VideoDetail'

import banner_bcg from '../assets/backgrounds/1b.jpg'
import ltdLP from '../assets/content/ltdLP1.jpg'
import pistils from '../assets/albums/pistils.jpg'

export default class Home extends React.Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      window.scrollTo(0, 0);
  }

   render() {
      const banner_quote = Math.floor(Math.random() * this.props.press_quotes.length);
      const home_cards = this.props.home_cardsData.map(item =>
         !item.video_link ?
         <div className='card'>
            <div
               style={{
                  maxHeight: '100%', overflow: 'hidden', textAlign: 'center'
               }}>
               <img src={item.img}/>
            </div>
            <h4>{item.date}</h4>
            <h2>{item.card_subject}</h2>

            <p>{item.card_blurb}&nbsp;
               {item.link ?
                  <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
                  : ''
                }
            </p>

            {item.album_link ?
               this.props.albums_link[item.album_link] : ''
            }
            
            {item.press_link ?
               this.props.press_link[item.press_link] : ''
            }
            
         </div> :
         
         <div className='video card'>
            <img src={item.video_thumbnail}/>
            <h4>{item.date}</h4>
            <h2>{item.card_subject}</h2>

            <p>{item.card_blurb}&nbsp;
               {item.link ?
                  <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
                  : ''
                }
               {item.video_link ?
                  this.props.video_link[item.video_link] : ''
               }
               {this.props.modalShowing && (
               <VideoDetail
                  videoDetail={this.props.videoThumbSelect}
                  closeModal={this.props.closeModal} />
               )}
            </p>
         </div>
         
      )
      return (
         <div className='home container'>
            <div className="banner">

               <img className='bcg-img' src={banner_bcg} />

               <div className='content'>
                  <div className='press-quote'>
                     {this.props.press_quotes[banner_quote]}
                  </div>
                  <div className='cta-container'>
                     <span id='cta-desc'>
                        new album
                     </span>
                     <img src={pistils} />
                     <br/>
                     <span id='cta'>
                        listen/buy
                        {this.props.albums_link[0]}&nbsp;
                        <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
                     </span>
                  </div>
               </div>

            </div>

            <div className="home-cards-container">
               {home_cards}
            </div>

         </div>
      )
   }
}
