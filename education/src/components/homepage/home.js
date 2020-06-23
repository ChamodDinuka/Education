import React from 'react';
import home from '../../images/homelogo.jpg'
import './home.css'

const Home=()=>{
    return(
    <div className="main-home"  >
        <img id="home" src={home}/>
        <div className="hame-card">
            <card-header><i><b>Welcome</b></i></card-header><br/><br/>
            <card-body>
                The best place to find institutes,courses
                <br/>and other things for<br/> your higher education
            </card-body>
        </div>
        
    </div>
    );
}
export default Home