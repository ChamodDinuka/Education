import React from 'react'
import './navbar.css'
import logo from '../../images/logonew.PNG'


const Navbar=()=>{
  function log(){
    console.log("button");
  }
    
    return(
      
        <div className="main-nav">
          <img id="logo"src={logo}  width="150px" height="30px"/>
          
          
          
          <input id="searh"type="text" placeholder="search"></input>
          <ul id="nav">
          <li ><a>search</a></li>
          </ul>
          <ul id="nav1">
          <li ><a id="login" href="/login">Login</a></li>
          <li ><a id="login">Logout</a></li>
          </ul>
        </div>
    
    );
}
export default Navbar;