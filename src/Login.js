import React,{Component} from 'react';
import Particles from 'react-particles-js';
import { Link } from "react-router-dom";
import './login.css';
const particlesopt = {
                particles: {
                  number:{
                    value:55,
                    density:{
                      enable: true,
                      value_area : 600
                    }
                  }
                  
                }
              }
class Login extends Component{
  render(){
    return (
      <div class="container log-container">
      <Particles className="particles"
              params={particlesopt}
            />
      <div class="log-instructions" >
          <a href="#" class="inst-manual"><button class="btn btn2"><h6>Instruction Manual</h6></button></a>
      </div>
      <h1 class="log-heading">E-Election Voting System Login</h1>
    <div class="row">
        <div class="col-md-12">
            <div class="card log-card">
                <form class="log-box">
                    <h2>Login</h2>
                    <p class="text-muted"> Please enter your Voter ID Number and password!</p> 
                    <input type="text" class="log-inp" name="" placeholder="Voter ID Number" required/> 
                    <input type="password" class="log-inp" name="" placeholder="Password" required/>
                    <div class="other_option">
                     <Link to="/forgot"><a class="forgot text-muted" href="#">Forgot password?</a></Link>
                     <Link to="/register"><a class="forgot text-muted reg" href="#">Register</a></Link>
                     <input type="submit" class="log-sub"name="" value="Login" href="#"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default Login;
