import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import pistils from '../assets/albums/pistils.jpg'

export default function Landing() {
   return (
      <div className="landing">
         <div className="album-container">
            <img src={pistils} />
            <div className="out-now">
               <p>PISTILS</p>
               <br></br>
            <p>
               featuring <br></br>
               Chris Cheek,<br></br>
               Aaron Goldberg,<br></br> 
               Lara Bello and<br></br>
               Sam Aning
            </p>
               <button>listen/buy</button><br></br>
               <Link id="enter" to="/home">enter site >></Link>
            </div>
         </div>
      </div>
   )
}
