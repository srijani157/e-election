import React,{Component} from 'react';
import Particles from 'react-particles-js';
import { Link } from "react-router-dom";
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
      <div class="container reg-container">
      <Particles className="particles"
              params={particlesopt}
            />
      <div class="reg-instructions" >
          <a href="#" class="inst-manual"><button class="btn btn2"><h6>Instruction Manual</h6></button></a>
      </div>
      <h1 class="reg-heading">E-Election Voting System New User Registration</h1>
    <div class="row">
        <div class="col-md-12">
            <div class="card reg-card">
                <form class="reg-box">
                    <h2>Register</h2>
                    <p class="text-muted"> Please enter the following details!</p> 
                    <input type="text" class="reg-inp" name="" placeholder="Name" required/> 
                    <input type="tel" class="reg-inp" name="" placeholder="Mobile Number" pattern="[0-9]{10}" required/> 
                    <input type="text" class="reg-inp" name="" placeholder="Voter ID Number" required/> 
                    <input type="password" class="reg-inp" name="" placeholder="Password" required/>
                    <input type="password" class="reg-inp" name="" placeholder="Re-Enter Password" required/>
                    <div class="other_option">
                     <Link to="/forgot"><a class="forgot text-muted" href="#">Forgot password?</a> </Link>
                     <Link to="/login"><a class="forgot text-muted reg" href="#">Login</a></Link>
                     <input type="submit" class="reg-sub" name="" value="Register" href="#"/>
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
