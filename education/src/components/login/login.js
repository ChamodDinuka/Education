import React,{Component} from 'react'
import './login.css'

class Login extends Component{
  state={
    email:'',
    password:''
  }
  changeEmail=(e)=>{
    this.setState({
      email:e.target.value

    });
  }
  changePassword=(e)=>{
    this.setState({
      password:e.target.value

    });
  }
  submit=(e)=>{
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    var key=(this.state.email=='admin@gmail.com')?"True":"False"
    console.log(key)

  }
    render(){
        return(
            <div className="login-form" >
              <form onSubmit={this.submit}>
              <h1>Login</h1>
              <label id="email">Email</label><input type="email" id="email" name="email" onChange={this.changeEmail}/><br/>
              <label>Password </label><input type="password"id="password" name="password" onChange={this.changePassword}/> <br/><br/>
              <button type="submit" id="sumbmit" name="submit">Login</button>
              </form>
            </div>
        );
        }
}
export default Login