import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Login.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Route from 'react-router-dom/Route'


class Login extends Component {

  render() {
    return (
    <div id="back">
      <div id="Login-square">
        <div id= "left-side-login">
          <p id="name">opSeek</p>
          <p id="caption">New Connections in Tech</p>
          <div id="descriptions">
            <p class="adjectives">Adjective</p>
            <p class="adjectives">Adjective</p>
            <p class="adjectives">Adjective</p>
          </div>
          <img id="logo" src={require('./images/logo1.png')}/>
        </div>
        <div id="right-side-login">
          <p id="hello">Hello</p>
          <p id="enter">Enter your Login information.</p>
          <form action="http://localhost:3000/main">
            <p class="uandp">Username:</p>
              <input type="text" name="userid" class="input-bar"/>
              <br/>
            <p class="uandp">Password:</p>
              <input type="text" class="input-bar"/>
              <br/>
              <br/>
            <label class="container">Remember Me
              <input type="checkbox"/>
              <span class="checkmark"></span>
            </label>
            <p id = "forgot">Forgot Password?</p>
            <br/>
            <input type="submit"/>

          </form>
          <p id = "sign-up">Don't have an account? <Link to = "/sign-up" class="signup">Sign up</Link></p>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;
