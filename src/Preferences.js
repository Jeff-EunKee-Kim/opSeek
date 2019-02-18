import React, { Component } from 'react';
//import logo from './logo.svg';
//import {BrowserRouter as Router, Link} from 'react-router-dom';
//import { withRouter } from "react-router-dom";
//import Route from 'react-router-dom/Route'
import './css/Preferences.css';

class Preferences extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comps: []
        }
    }

    componentDidMount() {
        let self = this;
        fetch('http://localhost:4001/getpreferences/1', {
            method: 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            self.setState({comps: data});
        }).catch(err => {
            console.log('catching error',err);
        })
    }

    //renderComp = ({uid, location, position, duration}) => <div key={uid}>{uid} {location} {position} {duration} </div>

    renderComp = ({uid, location, position, duration}) => <div key={uid}>Location: {location}, Position: {position}, Duration: {duration} </div>
    renderComp1 = ({uid, location}) => <div key={uid}>Location: {location}</div>
    renderComp2 = ({uid, position}) => <div key={uid}>Position: {position}</div>
    renderComp3 = ({uid, duration}) => <div key={uid}>Duration: {duration}</div>

    render() {
        const {comps} = this.state;
        return (
        <div id = "Preferences">
            <h1>Preferences</h1>
            <div id = "Preferences2">
            <h2>{comps.map(this.renderComp1)}</h2>
            <h2>{comps.map(this.renderComp2)}</h2>
            <h2>{comps.map(this.renderComp3)}</h2>
            </div>
        </div>
        )
    }


}

export default Preferences;
