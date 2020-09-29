import React from 'react'

export default function Links() {
   const links = linksData.map(item =>
      <ul>
         <li><a href={item.url}></a>{item.link}&nbsp;{item.description}</li>
      </ul>
   )
   return (
      <div>
         {links}
      </div>
   )
}
