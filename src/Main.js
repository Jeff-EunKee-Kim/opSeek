import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Main.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import { withRouter } from "react-router-dom";
import Searchpage from './Searchpage.js';
import Myprofile from './Myprofile.js';
import Progress from './Progress.js';

import FAQ from './faq.js';
import queryString from "query-string";




const routes = [
  {
    path: '/main',
    exact: true,
    main: Searchpage,
  },
  {
    path: '/main/myprofile',
    main: Myprofile,
  },

  {
    path: '/main/progress',
    main: Progress,
  },
  {
    path: '/main/faq',
    main: FAQ,
  },
]



class Main extends Component {

  constructor(props){
    super(props);
      this.state = {
          userid: ''
      }
  }

  componentDidMount(){
      let self = this;
      const values= queryString.parse(this.props.location.search);
      console.log(values.userid);
      self.setState({userid: values.userid});

  }

  render() {
      const {userid} = this.state;
    return (
      <Router>
        <div id = "mainsmain">
          <div id = "sidebar">
            <img id="mainlogo" src={require('./images/logo1.png')}/>
            <ul id = "sidebar-list">
              <Link to = '/main'><li class = "sidebar-item">Main</li></Link>
              <Link to = "/main/myprofile"><li class = "sidebar-item">My Profile</li></Link>

              <Link to = '/main/progress'><li class = "sidebar-item">Progress</li></Link>
              <Link to = "/main/faq"><li class = "sidebar-item">FAQ</li></Link>
            </ul>
          </div>

          <div id = "mainrendered">
            {routes.map((route) => (
              <Route
                key = {route.path}
                path = {route.path}
                exact = {route.exact}
                component = {() => <route.main userid={userid}/>}



              />
            ))}
          </div>
        </div>
      </Router>

    );
  }
}

export default Main;
