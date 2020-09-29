import React from 'react'
import linksData from './linksData'

export default class Links extends React.Component {


   componentDidMount = () => {
      window.scrollTo(0, 0);
   }
   render() {

      const links = linksData.map(item =>
         <ul>
            <li><a href={item.url}>{item.link}</a>&nbsp;<em>{item.description}</em></li>
         </ul>
      )
      return (
         <div className='links container'>
            {links}
         </div>
      )
   }
}
