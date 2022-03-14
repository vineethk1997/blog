import React from 'react';
import "../Header/Top.css";
import {Link} from "react-router-dom";

export default function Top() {
  return (
    <>
    <h1 className='heading'>The Siren</h1>
    <div className='top'>
    <nav>
      
    <ul className="nav-links">
    <Link to='/home'>Home</Link>
    <Link to='/tourism'>Tourism</Link>
    <Link to='/fitness'>Fitness</Link>
    <Link to='/technology'>Technology</Link>
    <Link to='/food'>Food</Link>
    </ul>

    </nav>
       
    </div>
    </>
  )
}
