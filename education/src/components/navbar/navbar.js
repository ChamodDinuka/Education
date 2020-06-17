import React from 'react'
import './navbar.css'
import logo2 from '../../images/logo2.jpg'
import logo from '../../images/logo1.jpg'

const Navbar=()=>{
    
    return(
        <div className="main-nav">
          <img src={logo2}  width="15px" height="22px"/>
          <img src={logo}  height="22px"/>
          <>Dream Education</>
          
          <input type="text" placeholder="search"></input>
          <button type="submit">search</button>
          <button type="submit">Login</button>
          <button type="submit">Logout</button>
        </div>
    
    );
}
export default Navbar;