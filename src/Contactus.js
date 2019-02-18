import React, { Component } from 'react';
//import logo from './logo.svg';
//import {BrowserRouter as Router, Link} from 'react-router-dom';
//import { withRouter } from "react-router-dom";
//import Route from 'react-router-dom/Route'
import './css/Contactus.css';

class Contactus extends Component {
  render() {
    return (
      <div id = "contact">
        <h1>Contact Us</h1>
        <div class="left">
        <img id="contactimg" src={require('./images/contact us.png')}/>
        </div>
        <div class = "right">
        <div id = "contact2">
        <h2>opseeek.admin@opseek.com</h2>
        <h2>919-123-4567</h2>
        <h2>Duke University - Durham, NC</h2>
        </div>
        </div>
      </div>

    );
  }
}

export default Contactus;
