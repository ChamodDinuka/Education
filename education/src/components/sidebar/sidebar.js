import React from 'react'
import './sidebar.css'
const Sidebar=()=>{
    return(
    <div className="main-side">
        <ul>
            <li><a href="#">Institutes</a></li>
            <li><a href="#">Courses</a></li>
        </ul>
        <div className="add-bar" ></div>
    </div>
    );
}
export default Sidebar;