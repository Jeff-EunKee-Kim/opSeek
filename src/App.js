import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
//import { withRouter } from "react-router-dom";
import Route from 'react-router-dom/Route';
import Login from './Login.js';
import Main from './Main.js';
import Main2 from './Main2.js';
import SignUp from './SignUp.js';

class App extends Component {
s

  state = {
    companies: []
  }

  componentDidMount(){
    this.getCompany();
  }

  getCompany = _ => {
    fetch('company.cbmlwtaaldfn.us-east-2.rds.amazonaws.com')
      .then(response => response.json())
      .then(response => this.setState({ companies: response.data }))
      .catch(err => console.error(err))
  }

  renderCompany = ({ c_id, name}) => <div key={c_id}>{name}</div>

  render() {
    const { companies } = this.state;
    return (
      <Router>
        <div className="App">
          <div id = "hello">{companies.map(this.renderCompany)}</div>


          <Route path="/" exact component={Login}/>
          <Route path="/main2" exact component={Main2}/>
          <Route path="/main" exact component={Main}/>
          <Route path="/main/myprofile" exact component={Main}/>
          <Route path="/main/preferences" exact component={Main}/>
          <Route path="/main/progress" exact component={Main}/>
          <Route path="/main/faq" exact component={Main}/>
          <Route path="/main/contactus" exact component={Main}/>
          <Route path="/sign-up" exact component = {SignUp}/>
        </div>
      </Router>
    );
  }
}
export default App;
