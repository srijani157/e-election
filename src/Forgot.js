import React,{Component} from 'react';
import Particles from 'react-particles-js';
import { Link } from "react-router-dom";
import './forgot.css';
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
class Forgot extends Component{
  render(){
    return (
      <div class="container for-container">
      <Particles className="particles"
              params={particlesopt}
            />
      <h1>E-Election Voting System </h1>
    <div class="row">
        <div class="col-md-12">
            <div class="card for-card">
                <form class="for-box">
                    <h2>Forgot Password</h2>
                    <p class="text-muted"> Please enter the required details!</p>
                    <input  class="for-inp" type="tel" name="" placeholder="Mobile Number" pattern="[0-9]{10}" required/> 
                    <button class="otp-button">Send OTP</button>
                    <input class="for-inp" type="text" name="" placeholder="OTP" required/> 
                    <input class="for-inp" type="password" name="" placeholder="New Password" required/>
                    <input class="for-inp" type="password" name="" placeholder="Re-Enter New Password" required/>
                    <div class="other_option">
                     <Link to="/login"><a class="forgot text-muted" href="#">Login</a></Link>
                     <input class="for-sub" type="submit" name="" value="Submit" href="#"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default Forgot;
