import React,{Component} from 'react';
import Particles from 'react-particles-js';
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
      <div class="container">
      <Particles className="particles"
              params={particlesopt}
            />
      <h1>E-Election Voting System </h1>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <form class="box">
                    <h1>Forgot Password</h1>
                    <p class="text-muted"> Please enter the required details!</p> 
                    <input type="text" name="" placeholder="OTP" required/> 
                    <input type="password" name="" placeholder="New Password" required/>
                    <input type="password" name="" placeholder="Re-Enter New Password" required/>
                    <div class="other_option">
                     <a class="forgot text-muted" href="#">Login</a> 
                     <a class="forgot text-muted reg" href="#">Register</a><input type="submit" name="" value="Submit" href="#"/>
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
