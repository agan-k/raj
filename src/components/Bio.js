import React from 'react'
import bio_pic from '../assets/promo_shots/small/2.jpg'
import bio_pic2 from '../assets/gig_shots/1.jpg'

export default function Bio() {
   return (
      <div className="bio">
         <img
            src={bio_pic}
            style={{
               height: '15em',
               float: 'left',
               margin: '0 1em .7em 0',
               opacity: '.8',
               borderRadius: '15px'
            }}
         />
         <h1>Biography</h1>
         <p>Rajiv Jayaweera is truly a global citizen, a fact that permeates and weaves its way into his 
         playing and composing. He was born in London, grew up in Melbourne, is of Sri Lankan heritage and is 
         currently based in New York City. He completed his Bachelor of Music at the Victorian College of the 
         Arts in 2000, and Masters in Jazz Studies at SUNY Purchase, New York in 2013
         <br/>
         <br/>
         In Australia he was a highly sought after drummer, touring and recording with the country’s finest 
         musicians and ensembles including The Joe Chindamo, The Bennett’s Lane Big Band, Sam Anning’s Quintet, 
         Bopstretch and The Australian Art Orchestra’s Crossing Roper Bar Project.
         <br/>
         <br />
            <img
            src={bio_pic2}
            style={{
               height: '10em',
               float: 'right',
               margin: '0 0 .7em 1em',
               opacity: '.8',
               borderRadius: '15px'
            }}
         />
         Since moving to New York City, Jayaweera has performed at the legendary jazz clubs,
         <strong>Smalls</strong>, <strong>Blue Note</strong>, <strong>Bar Next Door</strong>,
         <strong>Dizzy’s (J@LC)</strong>, <strong>Birdland</strong>, and others. He has been
         awarded grants from <strong>The Australia Council for the Arts</strong>, 
         <strong>The Ian Potter Cultural Trust</strong>, <strong>The American-Australian
         Foundation</strong>, and was a finalist 
         for the prestigious <strong>Freedman Jazz Fellowship</strong>, performing at the
         <strong>Sydney Opera House</strong> 
         in 2013.
         <br/>
         <br/>
         He has toured extensively around the world, performing at <strong>Jazz at Lincoln Centre</strong>, 
         Doha, The Cotton Club, Tokyo, The London Jazz Festival and around Europe. His own quintet were 
         featured as ‘artists in residence’ at the <strong>Thailand International Jazz Conference 2020</strong>, 
         and also performed as a headline act in the festival.
         <br/>
         <br/>
         In June this year, he will release his debut album made up of his original compositions entitled 
         <strong>Pistils</strong>. The album features <strong>Chris Cheek</strong>, <strong>Aaron Parks</strong>,
         <strong>Lara Bello</strong>, <strong>Hugh Stuckey</strong> and <strong>Sam Anniing</strong>, and
         will be released on <strong>Outside In Music</strong> (USA) and <strong>Earshift Music</strong> (Australia/Asia).</p>
      </div>
   )
}
