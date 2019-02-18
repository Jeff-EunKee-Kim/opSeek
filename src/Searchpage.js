import React, { Component } from 'react';

//import logo from './logo.svg';
//import {BrowserRouter as Router, Link} from 'react-router-dom';
//import { withRouter } from "react-router-dom";
//import Route from 'react-router-dom/Route'
import './css/Searchpage.css';




class Searchpage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            company: '',
            position: '',
            location: '',
            duration: 'Full-Time',
            durationOptions: [],
            jobs: []
        }
        this.handleChangeCompany = this.handleChangeCompany.bind(this);
        this.handleChangePosition = this.handleChangePosition.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeDuration = this.handleChangeDuration.bind(this);
    }

    componentDidMount(){
        let self = this;
        fetch('http://localhost:4001/getdurationOptions/', {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            self.setState({durationOptions: data});
        }).catch(err => {
            console.log('catching error', err);
        })
    }


    componentDidUpdate(prevProps, prevState ){
        console.log('updated');
        if(prevState.company!= this.state.company || prevState.position != this.state.position
            || prevState.location!= this.state.location || prevState.duration != this.state.duration) {
            let self = this;
            fetch('http://localhost:4001/getjobfilter/' + this.state.company + '/' + this.state.position + '/'
                +  this.state.location + '/' + this.state.duration, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                self.setState({jobs: data});
            }).catch(err => {
                console.log('catching error', err);
            })
        }
    }

    handleChangeCompany(event) {
        this.setState({company: event.target.value});
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

    renderJob = ({cid, jid, position, name, duration, location}) =>
      <div class = "searchesIndividual" key={[cid, jid]}>
        <div class = "position">{position}</div>
        <div class = "other-results">
          <div class="company-name">{name},&nbsp;</div> {duration},&nbsp;
          <div class = "location" >{location}</div>
        </div>
      </div>

    renderDurationOptions = ({key, duration}) => <option key={duration} value={duration}> {duration}  </option>

    render() {
        const {jobs, durationOptions} = this.state;
        return (
            <div class="Searchpage">
              <div id = "mainTitle" >opSeek</div>
                <form class = "fullpage">

                    <div id = "searchsection">
                      <p class="searchLabel">Company:</p>
                      <input class = "searches" id= "companyS" type="text" value= {this.state.company} onChange = {this.handleChangeCompany}/>
                      <p class="searchLabel">Position:</p>
                      <input class = "searches" id = "positionS" type="text" value= {this.state.position} onChange = {this.handleChangePosition}/>
                      <p class="searchLabel">Location:</p>
                      <input class = "searches" id = "locationS" type="text" name={this.state.location} onChange = {this.handleChangeLocation}/>
                      <p class="searchLabel">Duration:</p>
                      <select class = "searches" name={this.state.duration}  onChange = {this.handleChangeDuration}>
                          {durationOptions.map(this.renderDurationOptions)}
                      </select>
                    </div>


                  <div id = "jobSection">
                    <div id = "searchResult">
                      {jobs.map(this.renderJob)}
                    </div>
                  </div>
                </form>
            </div>
        )
    }


}




export default Searchpage;
