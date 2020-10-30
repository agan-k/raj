import React from 'react'

export default class Shows extends React.Component {
   constructor(props) {
      super()
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }

   render() {
      return (
         <div className="shows container">
            <div className='covid'>
               <p style={{ textTransform: 'uppercase', color: '#A21E3D' }}>
                  <i className="fa fa-angle-right fa-1x" aria-hidden="true"></i>
                  <i className="fa fa-angle-right fa-1x" aria-hidden="true"></i>
                  &nbsp;Due to the current situation, unfortunately most live shows have been cancelled/postponed  
                  but please stay tuned for further updates.&nbsp;
                  <i className="fa fa-angle-left fa-1x" aria-hidden="true"></i>
                  <i className="fa fa-angle-left fa-1x" aria-hidden="true"></i>
               </p>
            </div>

            <h2>Shows</h2>
   
            <h3>Just announced!</h3>
               <ul>
                  <li>
                  12 November 2020<br/> <strong>Chris Tanner Trio</strong> Daniel Torres Quinet @ The Hall,
                  Malaga, SPAIN 
                  </li>
                  <li>
                  1 November 2020<br/> <strong>Chris Tanner Trio</strong> Rajiv Jayaweera / Björn Ingelstam @ Charlie Scott’s 8 - 10pm,
                  Copenhagen, DENMARK  
                  </li>
                  <li>
                  30 October 2020<br/> <strong>Chris Tanner Trio</strong> (w/ Mads Søndergaard + Rajiv Jayaweera) @ Charlie Scott’s, 8 - 9:30pm,
                  Copenhagen, DENMARK  
                  </li>
                  <li>
                  4th Oct, 2020<br/>	Rajiv Jayaweera Online Concert - Earshift Music Festival, 6:30pm AEST&nbsp;
                        <a href='https://www.earshift.com/news/2020/9/4/earshift-fest-2020'>link</a>&nbsp;
                        <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
                  </li>
                  <li>
                     <strong>Trio Kleine Ahnung’s</strong> Australian November 2020 Tour is postponed until further notice.
                  </li>
               </ul>
            <br/>
   
            <h3>Recent Past shows:</h3>
   
            <h3>2020</h3>
            <ul>
               <li>August 2020<br/> Live Broadcast - Rajiv Jayaweera Album Release @ Soapbox Gallery, Brooklyn, NY<br />
                Mark Turner (sax), Can Olgun (piano), Rick Rosato (bass)
               </li>
               <li>
                  3rd May<br/>	Rajiv Jayaweera Quintet Pistils Album Release @ Birdland, NY with Chris Cheek (sax), 
                  Adam Birnbaum (piano), Rick Rosato (bass) & Hugh Stuckey (guitar) – POSTPONED
               </li>
               <li>
                  28/29 May<br/> Bruce Barth Quartet @ Clement’s, Newark, NJ with Steve Wilson (sax) & Luke Sellick (piano) 
                  - CANCELLED
               </li>
               <li>
                  27th Jun<br/> Cyrille Aimée, Huntington, NY – CANCELLED
               </li>
               <li>
                  1st Feb<br/> Rajiv Jayaweera Quintet @ Thailand International Jazz Conference, Bangkok with Chris Cheek (sax),
                  Adam Birnbaum (piano), Lara Bello (voice), Carl Morgan (guitar), Sam Anning (bass)
               </li>
               <li>
                  13th Jan	Rajiv<br/> Jayaweera Quintet @ Jazz Lab, Melbourne with Andrea Keller (piano), Eugene Ball (trumpet),
                  Craig Fermanis (guitar), Sam Anning (bass)
               </li>
               <li>
                  14-20 Jan<br/> Trio Kleine Ahnung Australian Album Release Tour (Canberra, Sydney, Brisbane, Hobart, 
                  Adelaide, Melbourne) with Carl Morgan (guitar) & Sam Anning (bass)
               </li>
            </ul>
         </div>
      )
   }
}
