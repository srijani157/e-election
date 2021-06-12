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
      <div class="instructions" >
          <a href="#" class="a-logout"><button class="btn btn2"><h6>Instruction Manual</h6></button></a>
      </div>
      <h1 class="heading">E-Election Voting System New User Registration</h1>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <form class="box">
                    <h2>Register</h2>
                    <p class="text-muted"> Please enter the following details!</p> 
                    <input type="text" name="" placeholder="Name" required/> 
                    <input type="tel" name="" placeholder="Mobile Number" pattern="[0-9]{10}" required/> 
                    <input type="text" name="" placeholder="Voter ID Number" required/> 
                    <input type="password" name="" placeholder="Password" required/>
                    <input type="password" name="" placeholder="Re-Enter Password" required/>
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
