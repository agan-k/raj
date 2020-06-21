import React from 'react'

export default function Header() {
   return (
      <div className="header-container">

      <header>
            <nav>
               <ul className="menu">
                  <li>Home</li>
                  <li>Bio</li>
                  <ul id="dropdown-media">
                     <li id="media">Media</li>
                     <li>photos</li>
                     <li>videos</li>
                  </ul>
                  <li>Shows</li>
                  <li>Discography</li>
                  <li>Press</li>
                  <li>Store</li>
                  
               </ul>
            </nav> 
      </header>
      </div>
   )
}
