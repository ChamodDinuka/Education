import React from 'react'
import './admin-side.css'
const Admin_side=()=>{
    return(
        <div className="admin_side">
            <li>
                <ul ><a href="/dashboard" >Dashboard</a></ul>
                <ul ><a href="./dashboard/new" >New Course</a></ul>
            </li>

        </div>

    );
} 
export default Admin_side;