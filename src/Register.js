import React,{Component} from 'react';
import Particles from 'react-particles-js';
import './reg.css';
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
class Register extends Component{
  render(){
    return (
      <div class="container">
      <Particles className="particles"
              params={particlesopt}
            />
      <h1>E-Election Voting System New User Registration</h1>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <form class="box">
                    <h1>Register</h1>
                    <p class="text-muted"> Please enter the following details!</p> <input type="text" name="" placeholder="Name"/> 
                    <input type="email" name="" placeholder="Email ID"/> 
                    <input type="text" name="" placeholder="Voter ID Number"/> 
                    <input type="password" name="" placeholder="Password"/>
                    <div class="other_option">
                     <a class="forgot text-muted" href="#">Forgot password?</a> 
                     <a class="forgot text-muted reg" href="#">Login</a><input type="submit" name="" value="Register" href="#"/>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default Register;
