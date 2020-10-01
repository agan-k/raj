import React from 'react'
import linksData from './linksData'

export default class Links extends React.Component {


   componentDidMount = () => {
      window.scrollTo(0, 0);
   }
   render() {

      const links = linksData.map(item =>
         
            <li><a href={item.url}>{item.link}</a>&nbsp;<em>{item.description}</em></li>
         
      )
      return (
         <div className='links container'>
            <div className='links-list'>
               {links}
            </div>
         </div>
      )
   }
}
