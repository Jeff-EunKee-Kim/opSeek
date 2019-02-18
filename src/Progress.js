import React, { Component } from 'react';
//import logo from './logo.svg';
//import {BrowserRouter as Router, Link} from 'react-router-dom';
//import { withRouter } from "react-router-dom";
//import Route from 'react-router-dom/Route'
import './css/Progress.css';

class Progress extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comps: [],
            userid : this.props.userid
        }
    }

    componentDidMount() {
        let self = this;
        fetch('http://localhost:4001/getprogress/' +  this.state.userid, {
            method: 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            self.setState({comps: data});
        }).catch(err => {
            console.log('catching error',err);
        })
    }

    renderComp = ({uid, jid, company, saved, start, submit, interview, offer}) =>
    <div id ="progressresults" class="grid-container" key={uid}>
      <div class = "presult">{company}</div>
      <div class = "presult">Saved: {saved}</div>
      <div class = "presult">Started: {start}</div>
      <div class = "presult">Submitted: {submit}</div>
      <div class = "presult">Interview: {interview}</div>
      <div class = "presult">Offer: {offer}</div>
    </div>

  render() {
      const {comps} = this.state;
    return (
      <div id = "progress">
        <div id="progresstitle">Progress</div>
          <div id = "progress2">{comps.map(this.renderComp)}</div>
      </div>
    );
  }
}

export default Progress;
