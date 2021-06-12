import React,{Component} from 'react';
import Particles from 'react-particles-js';
import eci from "./eci.png";
import inc from "./inc.png";
import bjp from "./bjp.png";
import cpim from "./cpim.png";
import tmc from "./tmc.png";
import nota from "./nota.png";
import './voter.css';
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
class Voter extends Component{
  render(){
    return (
      <div class="container">
      <Particles className="particles"
              params={particlesopt}
            />

      <div class="log-out" >
          <a href="#" class="a-logout"><button class="btn btn2"><h5>Log Out</h5></button></a>
      </div>
      <img src={eci}  alt="eci" width="250" class="eci"/>
      <h1 class="heading">Welcome to the Voting Page!! </h1>
      <h2>Session : 2021</h2>
      <div class="row voter-row">
        <div class="col-md-4 col1">
          <div class="user-info">
            <h4>Voter ID : IJH2348951</h4>
            <h4>Name : Jane Doe</h4>
            <h4>Phone Number : 9874999956</h4>
            <h4>Constituency : Durgapur</h4>
            </div>
        </div>
        <div class="col-md-1">
        </div>
        <div class="col-md-7  col2">
        <h4>Click on the party symbol of your choice!!</h4>
            <div class="row">
                <div class="col-md-6 col-sm-12 col-lg-6">
                <button class="btn1"> <img src={bjp}  alt="bjp" width="325" class="party-logo bjp"/></button>
                </div>
                <div class="col-md-6 col-sm-12 col-lg-6">
                <button class="btn1"> <img src={inc}  alt="inc" width="325" class="party-logo inc"/></button>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-12 col-lg-6">
                <button class="btn1"> <img src={tmc}  alt="tmc" width="240" class="party-logo tmc"/></button>
                </div>
                <div class="col-md-6 col-sm-12 col-lg-6">
                <button class="btn1"> <img src={cpim}  alt="cpim" width="250" class="party-logo cpim"/></button>
                </div>
                
            </div>
            <div class="row row2">
                <div class="col-md-3 col-sm-12 col-lg-3">
                </div>
                <div class="col-md-6 col-sm-12 col-lg-6">
                <button class="btn1"> <img src={nota}  alt="nota" width="250" class="party-logo nota"/></button>
                </div>
                <div class="col-md-3 col-sm-12 col-lg-3">
                </div>
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default Voter;
