import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/SignUp.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
//import { withRouter } from "react-router-dom";
//import Route from 'react-router-dom/Route'


class SignUp extends Component {
  state = {
    accounts: [],
    account: {
      userid: '',
      password: '',
      first_name: '',
      last_Name: ''
    }
  }
  getAccounts = _ => {
    fetch(`http://localhost:4001/accounts`)
    .then(response => response.json())
    .then(response => this.setState({
      accounts: response.data }))
      .catch(err => console.error(err))
  }

  createAccount = _ => {
    const { account } = this.state;
    fetch(`http://localhost:4001/accounts/?userid=${account.userid}&password=${account.password}&
      first_name=${account.first_name}&last_name=${account.last_name}`)
      .then(response => response.json())
      .then(this.getAccounts)
      .catch(err => console.error(err))
  }
  render() {
const { accounts, account } = this.state;
    return (
    <div id="back2">
      <div id="Signup-square">
        <div id= "left-side-signup">
          <p id="name">opSeek</p>
          <p id="caption">New Connections in Tech</p>
          <div id="descriptions2">
            <p class="adjectives">Adjective</p>
            <p class="adjectives">Adjective</p>
            <p class="adjectives">Adjective</p>
          </div>
          <img id="logo" src={require('./images/logo1.png')}/>
        </div>
        <div id="right-side-signup">
          <p id="hello">Welcome to opSeek!</p>
          <p id="enter2">Enter your registration information below:</p>
          <form>
              <p class="uandp">Username (Email):</p>
              <input type="text" name="userid" class="input-bar" onChange={e => this.setState({ account: { ...account, userid: e.target.value}})}/>
              <br/>
              <p class="uandp">Password:</p>
              <input type="text" name="password" class="input-bar" onChange={e => this.setState({ account: { ...account, password: e.target.value}})}/>
              <p class="uandp">First Name:</p>
              <input type="text" name="first_name" class="input-bar" onChange={e => this.setState({ account: { ...account, first_name: e.target.value}})}/>
              <br/>
              <p class="uandp">Last Name:</p>
              <input type="text" name="last_name" class="input-bar" onChange={e => this.setState({ account: { ...account, last_name: e.target.value}})}/>
              <br/>


              <br/>
              <br/>
            <button onClick={this.createAccount}>Create Account</button>
          </form>
		<p class="uandp">Already have an account?
          <a href="/" class="linkk" id = "login"> Log in.</a></p>
        </div>
      </div>
    </div>

    );
  }
}

export default SignUp;
