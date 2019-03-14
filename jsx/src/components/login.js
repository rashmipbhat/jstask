import React, {Component} from "react";
import "./login.css";
class Login extends Component {
  constructor(props){
      super(props);
      this.state={
          username:"",
          password:""

      };
     

  }
  login=()=>{
      console.log(this.state.username);
      this.props.userStore.login(this.state.username,this.state.password);
  };
  handleUsername=event=>{
      this.setState({...this.state.username,username:event.target.value});
  }
  handlePassword=event=>{
      this.setState({...this.state,password:event.target.value});
  };



  render(){
      return(
          <div>
              <form>
              <div id="login">
              <input type="email" id="email" placeholder="Email" value="this.state.username" onChange={this.handleUsername}/>
              <input type="password" id="password" placeholder="PassWord" value="this.state.password"onChange={this.handlePassword}/>
              <button onclick={this.login}>LOGIN</button></div>

              </form>
              
          </div>
              )
          }

      }

  
  export default login;
