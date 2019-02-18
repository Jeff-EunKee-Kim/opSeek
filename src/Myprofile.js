import React, { Component } from 'react';
//import logo from './logo.svg';
//import {BrowserRouter as Router, Link} from 'react-router-dom';
//import { withRouter } from "react-router-dom";
//import Route from 'react-router-dom/Route'
import queryString from 'query-string';

import './css/Myprofile.css';

class Myprofile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comps: [],
            values: [],
            userid : this.props.userid,
            comps2: [],
            position: '',
            location: '',
            duration: '',
            finallocation: ''
        }

        this.handleChangePosition = this.handleChangePosition.bind(this);
        this.handleChangeDuration = this.handleChangeDuration.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    handleChangePosition(event) {
        this.setState({position: event.target.value});
    }

    handleChangeLocation(event) {
        this.setState({location: event.target.value});

    }

    handleChangeDuration(event) {
        this.setState({duration: event.target.value});

    }

    handleSubmit(event) {
        this.setState({finallocation: this.state.location});
        console.log(this.state.location);

    }

    componentDidMount() {
        let self = this;

        fetch('http://localhost:4001/getprofile/' + this.state.userid , {

            method: 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            self.setState({comps: data});
        }).catch(err => {
            console.log('catching error',err);
        })

        fetch('http://localhost:4001/getpreferences/' + this.state.userid, {
            method: 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            self.setState({comps2: data});
        }).catch(err => {
            console.log('catching error',err);
        })

        fetch('http://localhost:4001/getid/' + this.state.userid, {
            method: 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            self.setState({uid: data[0]});
        }).catch(err => {
            console.log('catching error',err);
        })



    }

    componentDidUpdate(prevProps, prevState){

        if(prevState.position != this.state.position) {
            let self = this;

            fetch('http://localhost:4001/postposition/' + this.state.userid + '/' + this.state.position, {
                method: 'PUT'
            }).then(function (response) {
                return response.json();
            }).catch(err => {
                console.log('catching error', err);
            })

            fetch('http://localhost:4001/getprofile/' + this.state.userid, {

                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                self.setState({comps: data});
            }).catch(err => {
                console.log('catching error', err);
            })

            fetch('http://localhost:4001/getpreferences/' + this.state.userid, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                self.setState({comps2: data});
            }).catch(err => {
                console.log('catching error', err);
            })




        }

        if(prevState.location != this.state.location) {
            let self = this;

            fetch('http://localhost:4001/postlocation/' + this.state.userid + '/' + this.state.location, {
                method: 'PUT'
            }).then(function (response) {
                return response.json();
            }).catch(err => {
                console.log('catching error', err);
            })

            fetch('http://localhost:4001/getprofile/' + this.state.userid, {

                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                self.setState({comps: data});
            }).catch(err => {
                console.log('catching error', err);
            })

            fetch('http://localhost:4001/getpreferences/' + this.state.userid, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                self.setState({comps2: data});
            }).catch(err => {
                console.log('catching error', err);
            })

            fetch('http://localhost:4001/getid/' + this.state.userid, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                self.setState({uid: data[0]});
            }).catch(err => {
                console.log('catching error', err);
            })



        }

        if(prevState.duration != this.state.duration) {
            let self = this;

            fetch('http://localhost:4001/postduration/' + this.state.userid + '/' + this.state.duration, {
                method: 'PUT'
            }).then(function (response) {
                return response.json();
            }).catch(err => {
                console.log('catching error', err);
            })

            fetch('http://localhost:4001/getprofile/' + this.state.userid, {

                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                self.setState({comps: data});
            }).catch(err => {
                console.log('catching error', err);
            })

            fetch('http://localhost:4001/getpreferences/' + this.state.userid, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                self.setState({comps2: data});
            }).catch(err => {
                console.log('catching error', err);
            })

            fetch('http://localhost:4001/getid/' + this.state.userid, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                self.setState({uid: data[0]});
            }).catch(err => {
                console.log('catching error', err);
            })


        }



    };

    renderComp = ({uid, first_name, last_name, userid}) => <div key={uid}>
            <p>name: {first_name} {last_name}</p>
            <p>email: {userid}@duke.edu </p>
        </div>

    renderComp1 = ({uid, location, position, duration}) =>
    <div key={uid}>
      <p>Location: {location}</p>
      <p>Position: {position}</p>
      <p>Duration: {duration}</p>
    </div>

    renderComp2 = ({uid, first_name, last_name}) => <div key={uid}>{first_name} {last_name}</div>

    render() {
        const {comps} = this.state;
        const {userid} = this.state;
    const {comps2} = this.state;

    return (
      <div id ="profpage">
        <div id = "fullname">{comps.map(this.renderComp2)}</div>
        <div id = "restofprofile">
          <div id = "titleandinfo">
            <div id = "title">Student at Duke University</div>
            <div id = "info">{comps.map(this.renderComp)}</div>
          </div>
          <div id = "preferencesandpref">
            <img align="right" id="pencil" src={require('./images/pencil.png')}/>
            <div id = "pref" >Preferences</div>
            <div id = "prefpref">{comps2.map(this.renderComp1)}</div>
          </div>

            <form onSubmit = {this.handleSubmit}>

                <div id="position">
                    <p > Position </p>
                    <input type="text" value={this.state.position} onChange = {this.handleChangePosition}
                    />
                </div>

                <div id="location">
                    <p > Location </p>
                    <input type="text" value={this.state.location} onChange={ this.handleChangeLocation}
                    />
                </div>

                <div id="duration">
                    <p > Duration </p>
                    <input type="text" value={this.state.duration} onChange = {this.handleChangeDuration}
                    />
                </div>



                <input type="submit" value="Submit" />

            </form>

        </div>

      </div>

    );
  }
}

export default Myprofile;
