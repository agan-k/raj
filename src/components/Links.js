import React from 'react'
import linksData from './linksData'

export default class Links extends React.Component {


   componentDidMount = () => {
      window.scrollTo(0, 0);
   }
   render() {

      const links = linksData.map(item =>
         
         <li><a href={item.url}>{item.link}</a>&nbsp;
            <em>{item.description}</em>&nbsp;
            <i className="fa fa-angle-right fa-1x link-arrow" aria-hidden="true"></i>
            </li>
         
      )
      return (
         <div className='links container'>
            <h2>Links</h2>
            <div className='links-list'>
               {links}
            </div>
         </div>
      )
   }
}
