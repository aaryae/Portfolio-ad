import React, { useState } from 'react'

import "./home.css"

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  }; 

  return (
    <>
   <div className="nyav">
    <div className="hero"><span>A</span>ARYAE</div>
   <div className="bar">
    <ul className='displaylainone'>
      <li><a  className="link1"href="/">About</a></li>
      <li><a className='link2' href="/projects">Projects</a></li>
    </ul>
   
    <i onClick={toggleMenu} className="fa-sharp fa-solid fa-bars-staggered icons " ></i>
    {isMenuOpen && (
      <div className='res'>
                    <ul className="menu">
              
              <li><a href="/">About</a></li>
              <li><a  href="#pro">Projects</a></li>
            </ul>
            </div>
          )}
   </div>
    
   </div>
    </>
  )
}

export default Home;