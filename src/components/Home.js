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
      const home_cards = this.props.home_cardsData.map(item =>
         <div>
            <div
               style={{
                  maxHeight: '12em', overflow: 'hidden', textAlign: 'center'
               }}>
               <img src={item.img}/>
               <img src={item.thumbnail}/>
            </div>
            <h4>{item.date}</h4>
            <h2>{item.card_subject}</h2>
            <p>{item.card_blurb}</p>
            <p>{item.link}</p>
         </div>
      )
      return (
         <div className='home container'>
            <div className="banner">
               <img src={banner_bcg}
                  style={{
                     width: '100%',
                     opacity: '.9',
                     position: 'absolute',
                     top: '0px',
                     left: '30',
                     zIndex: '-1'
                  }} />
               <div className='content'>
                  <div className='press-quote'>
                     {this.props.press_quotes[0]}
                  </div>
                  <div className='cta'>
                     <img src={pistils}/>
                     <p>
                        new album<br/> out now &nbsp;
                        <i className="fa fa-angle-right fa-1x" aria-hidden="true"></i>
                        <i className="fa fa-angle-right fa-1x" aria-hidden="true"></i>
                        {this.props.albums_link[0]}
                     </p>
                  </div>
               </div>

            </div>

            <div className="home-cards-container">

                     <div className="card">
                        {home_cards[0]}
                        {this.props.press_link[0]}
                     </div>

                     <div className="card">
                        {home_cards[1]}
                        {this.props.press_link[1]}
                     </div>

                     <div className="card">
                        {home_cards[2]}
                        {this.props.albums_link[0]}
                        
                     </div>

                     <div className="card video">
                           {home_cards[3]}
                           {this.props.video_link[7]}
                           {this.props.modalShowing && (
                           <VideoDetail
                              videoDetail={this.props.videoThumbSelect}
                              closeModal={this.props.closeModal} />
                           )}
                     </div>

                     <div className="card video">
                           {home_cards[4]}
                           {this.props.video_link[0]}
                           {this.props.modalShowing && (
                           <VideoDetail
                              videoDetail={this.props.videoThumbSelect}
                              closeModal={this.props.closeModal} />
                           )}
                     </div>

                     <div className="card">
                        {home_cards[5]}
                        {this.props.albums_link[1]}
                     </div>

                  </div>
         </div>
      )
   }
}
