import React from 'react';
import home from '../../images/04.jpg'
import home_middle from '../../images/05.jpg'
import './home.css'
const Home=()=>{
    return(

        
    <div className="main-home"  >
        <><button type="submit" id="course" onClick={(e) => {e.preventDefault();window.location.href='http://localhost:3000/courses';}}>Find Courses</button></>
    
    <img id="home-top"src={home}/>
    <h2>OUR SERVICES</h2>
    <div className="card-set">
        
        <card>
            <card-head>
                <h4>STUDY</h4>
            </card-head>
            <card-body>
                <p>We wish you best for your future</p>
            </card-body>
        </card>
        <card>
            <card-head>
                <h4>ADVICE</h4>
            </card-head>
            <card-body>
                <p>We advice you the best account to your profile</p>
            </card-body>
        </card>
        <card>
            <card-head>
                <h4>INTRODUCE</h4>
            </card-head>
            <card-body>
                <p>We introduce you to the universities in the sri lanka which provide the course you desire</p>
            </card-body>
        </card>
    </div>
    <h2>FIRST CONTACT WITH THE DREAM EDUCATION WEBSITE</h2>
    <div className="card-set2">
        
        <card id="second">
            <card-head>
                <h4>YOU</h4>
            </card-head>
            <card-body>
                <ul>
                    <li id="second">Tell what course you are interested in</li>
                    <li id="second">Get profound consultancy</li>
                </ul>
            </card-body>
        </card >
        <card id="second">
            <card-head>
                <h4>OUR TEAM</h4>
            </card-head>
            <card-body>
            <ul>
                    <li id="second">Give details about chosen universities</li>
                    <li id="second">Give consultancy on courses accessible,charge structure,college,and so on</li>
                </ul>
            </card-body>
        </card>
        </div>
    <img id="home-middle"src={home_middle}/>
        
        
    </div>
    );
}
export default Home