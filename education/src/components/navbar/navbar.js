import React from 'react'
import './navbar.css'
import logo2 from '../../images/logo2.jpg'
import logo from '../../images/logo1.jpg'

const Navbar=()=>{
  function log(){
    console.log("button");
  }
    return(
      
        <div className="main-nav">
          <img src={logo2}  width="15px" height="22px"/>
          <img src={logo}  height="22px"/>
          
          
          <input type="text" placeholder="search"></input>
          <ul id="nav">
          <li ><a>search</a></li>
          </ul>
          <ul id="nav1">
          <li ><a id="login" href="/login">Login</a></li>
          <li ><a >Logout</a></li>
          </ul>
        </div>
    
    );
}
export default Navbar;