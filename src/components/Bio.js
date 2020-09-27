import React, { Component } from 'react'
import bio_pic from '../assets/gig_shots/8.jpg'
import bio_pic2 from '../assets/gig_shots/6.jpg'
import bioquote_bcg from '../assets/backgrounds/6.jpg'

export default class Bio extends React.Component {
   constructor(props) {
      super()
   }

   
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   render(){
      return (
         <div className="bio container">
            {/* <div className='bio_banner'>
               <div className='feature-quote'>
                  {this.props.press_quotes[2]}
               </div>
            </div> */}
            <h2>Biography</h2>
            <img id='ride' src={bio_pic} />
            <p>Rajiv Jayaweera is truly a global citizen, a fact that permeates and weaves its way into his 
            playing and composing. He was born in London, grew up in Melbourne, is of Sri Lankan heritage and is 
            currently based in New York City. He completed his Bachelor of Music at the Victorian College of the 
            Arts in 2000, and Masters in Jazz Studies at SUNY Purchase, New York in 2013
            <br/>
            <br/>
            In Australia he was a highly sought after drummer, touring and recording with the country’s finest 
            musicians and ensembles including The Joe Chindamo Trio, The Bennett’s Lane Big Band, The Sam Anning 
            Quintet, Bopstretch and The Australian Art Orchestra’s Crossing Roper Bar Project.
            <br/>
            <br />
               <img id='birdland' src={bio_pic2}
               style={{
                  // height: '14em',
                  // float: 'right',
                  // margin: '0 0 .7em 1em',
                  // opacity: '.8',
                  // borderRadius: '10px'
               }}
            />
            Since moving to New York City, Jayaweera has performed at the legendary jazz 
            clubs, <strong>Smalls</strong>, <strong>Blue Note</strong>, <strong>Bar Next Door</strong>, <strong>Dizzy’s (J@LC)</strong>, <strong>Birdland</strong>, 
            and others. 
            He has been awarded grants from <strong>The Australia Council for the Arts</strong>, 
            <strong>The Ian Potter Cultural Trust</strong>, <strong>The American-Australian
            Foundation</strong>, and was a finalist 
            for the prestigious <strong>Freedman Jazz Fellowship</strong>, performing at
            the <strong>Sydney Opera House</strong> in 2013.
            <br/>
            <br/>
            Jayaweera has toured extensively around the world, performing at <strong>Jazz at Lincoln Centre</strong>, 
            Doha, The Cotton Club, Tokyo, The London Jazz Festival, The Montreux Jazz Festival, The Copenhagen Jazz 
            Festival, among many others. 
            His quintet were featured as ‘artists in residence’ and a headline act at the <strong>Thailand International
            Jazz Conference 2020</strong>.
            <br/>
               <br />
               {/* <img
               src={bio_pic}
               style={{
                  height: '10em',
                  float: 'left',
                  margin: '0 1em .7em 0',
                  opacity: '.8',
                  borderRadius: '10px'
               }}
            /> */}
            This year he released his debut album made up of his original compositions entitled <strong>Pistils</strong>.
            The album features <strong>Chris Cheek</strong>, <strong>Aaron Parks
            </strong>, <strong>Lara Bello</strong>, <strong>Hugh Stuckey</strong> and <strong>Sam Anniing</strong>, and
            was released on <strong>Outside In Music</strong> (USA) and <strong>Earshift Music</strong> (Australia/Asia).</p>
         </div>
      )
   }
}
