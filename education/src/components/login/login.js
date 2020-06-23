import React,{Component} from 'react'
import './login.css'

class Login extends Component{
    render(){
        return(
            <div className="login-form">
              <h1>Login</h1>
              <label id="email">Email</label><input type="email" id="email" name="email"/><br/>
              <label>Password </label><input type="password"id="password" name="password"/> <br/><br/>
              <button type="submit" id="sumbmit" name="submit">Login</button>
            </div>
        );
        }
}
export default Login