import React, { Component } from 'react';
//import logo from './logo.svg';
//import {BrowserRouter as Router, Link} from 'react-router-dom';
//import { withRouter } from "react-router-dom";
//import Route from 'react-router-dom/Route'
import './css/faq.css';
//import arrow from './images/arrow.png';
//import downarrow from './images/down.png';

const imagesPath = {
  down: require('./images/down.png'),
  normal: require('./images/arrow.png')
}
const imagesPath1 = {
  down1: require('./images/down1.png'),
  normal1: require('./images/arrow1.png')
}
const imagesPath2 = {
  down2: require('./images/down2.png'),
  normal2: require('./images/arrow2.png')
}
const imagesPath3 = {
  down3: require('./images/down3.png'),
  normal3: require('./images/arrow3.png')
}
const imagesPath4 = {
  down4: require('./images/down4.png'),
  normal4: require('./images/arrow4.png')
}

class FAQ extends Component {
  state = {open:true}
  state = {open1:true}
  state = {open2:true}
  state = {open3:true}
  state = {open4:true}

  toggleImage = () => {
    this.setState(state => ({open:!state.open}))
  }
  toggleImage1 = () => {
    this.setState(state => ({open1:!state.open1}))
  }
  toggleImage2 = () => {
    this.setState(state => ({open2:!state.open2}))
  }
  toggleImage3 = () => {
    this.setState(state => ({open3:!state.open3}))
  }
  toggleImage4 = () => {
    this.setState(state => ({open4:!state.open4}))
  }

  toggleSpace = () => {
    const {space} = this.state;
    this.setState({space:!space})
  }
  toggleSpace1 = () => {
    const {space1} = this.state;
    this.setState({space1:!space1})
  }
  toggleSpace2 = () => {
    const {space2} = this.state;
    this.setState({space2:!space2})
  }
  toggleSpace3 = () => {
    const {space3} = this.state;
    this.setState({space3:!space3})
  }
  toggleSpace4 = () => {
    const {space4} = this.state;
    this.setState({space4:!space4})
  }

  getImageName = () => this.state.open ? 'down':'normal'
  getImageName1 = () => this.state.open1 ? 'down1':'normal1'
  getImageName2 = () => this.state.open2 ? 'down2':'normal2'
  getImageName3 = () => this.state.open3 ? 'down3':'normal3'
  getImageName4 = () => this.state.open4 ? 'down4':'normal4'

  constructor (props) {
    super(props)
    this.state = {show:true};
    this.state = {show1:true};
    this.state = {show2:true};
    this.state = {show3:true};
    this.state = {show4:true};

    this.state = {space:false};
    this.state = {space1:false};
    this.state = {space2:false};
    this.state = {space3:false};
    this.state = {space4:false};

    this.toggleDiv = this.toggleDiv.bind(this)
    this.toggleDiv1 = this.toggleDiv1.bind(this)
    this.toggleDiv2 = this.toggleDiv2.bind(this)
    this.toggleDiv3 = this.toggleDiv3.bind(this)
    this.toggleDiv4 = this.toggleDiv4.bind(this)

    this.toggleSpace = this.toggleSpace.bind(this)
    this.toggleSpace1 = this.toggleSpace1.bind(this)
    this.toggleSpace2 = this.toggleSpace2.bind(this)
    this.toggleSpace3 = this.toggleSpace3.bind(this)
    this.toggleSpace4 = this.toggleSpace4.bind(this)
  }

  toggleDiv = () => {
    const {show} = this.state;
    this.setState({show:!show})
  }
  toggleDiv1 = () => {
    const {show1} = this.state;
    this.setState({show1:!show1})
  }
  toggleDiv2 = () => {
    const {show2} = this.state;
    this.setState({show2:!show2})
  }
  toggleDiv3 = () => {
    const {show3} = this.state;
    this.setState({show3:!show3})
  }
  toggleDiv4 = () => {
    const {show4} = this.state;
    this.setState({show4:!show4})
  }

  render() {
    const imageName = this.getImageName();
    const imageName1 = this.getImageName1();
    const imageName2 = this.getImageName2();
    const imageName3 = this.getImageName3();
    const imageName4 = this.getImageName4();

    return (
      <div id = "faqbackback">
        <div id = "faqback">
        <div id = "faq">Frequently Asked Questions</div>

          <div class = "faqinput">
            <div>
              <img onClick={event => {
                  this.toggleDiv();
                  this.toggleImage();
                  this.toggleSpace();
                }} class="arrow" src={imagesPath[imageName]}/>
            </div>
            <div class = "qanda">
              <div class = "question">What is opSeek?</div>
              <div>{this.state.show && <Box/> }</div>
            </div>
          </div>
          <div>{this.state.space && <Spacer/>}</div>

          <div class = "faqinput">
            <img onClick={event => {
                this.toggleDiv1();
                this.toggleImage1();
                this.toggleSpace1();
              }} class="arrow" src={imagesPath1[imageName1]}/>
              <div class = "qanda">
                <div class = "question">How is opSeek different?</div>
                <div>{this.state.show1 && <Box1/> }</div>
              </div>
          </div>
          <div>{this.state.space1 && <Spacer1/>}</div>

          <div class = "faqinput">
            <img onClick={event => {
                this.toggleDiv2();
                this.toggleImage2();
                this.toggleSpace2();
              }} class="arrow" src={imagesPath2[imageName2]}/>
              <div class = "qanda">
                <div class = "question">Can anyone sign up?</div>
                <div>{this.state.show2 && <Box2/> }</div>
              </div>
          </div>
          <div>{this.state.space2 && <Spacer2/>}</div>

          <div class = "faqinput">
            <img onClick={event => {
                this.toggleDiv3();
                this.toggleImage3();
                this.toggleSpace3();
              }} class="arrow" src={imagesPath3[imageName3]}/>
              <div class = "qanda">
                <div class = "question">Who is the opSeek team?</div>
                <div>{this.state.show3 && <Box3/> }</div>
              </div>
          </div>
          <div>{this.state.space3 && <Spacer3/>}</div>

          <div class = "faqinput">
            <img onClick={event => {
                this.toggleDiv4();
                this.toggleImage4();
                this.toggleSpace4();
              }} class="arrow" src={imagesPath4[imageName4]}/>
              <div class = "qanda">
                <div class = "question">Contact Us</div>
                <div>{this.state.show4 && <Box4/> }</div>
              </div>
          </div>
          <div>{this.state.space4 && <Spacer4/>}</div>
        </div>


      </div>
    );
  }
}
class Box extends Component{
  render(){
    return(
      <div class = "answer">opSeek is a website created by Duke Computer Science students to aid others in their search for jobs in Computer Science Fields. opSeek gathers job postings from various tech-companies and caters the results to each user. It also allows users the ability to create preferences for things such as position-type, role, duration, and location.</div>
    )
  }
}
class Box1 extends Component{
  render(){
    return(
      <div class = "answer">opSeek puts all the necessary resources for full-time and internship job searches in one convenient place. Not only do we have a global searchbar that gives you all the latest jobs, we also have a personalized progress report for each user, making it easier for you to keep track of your applications.</div>
    )
  }
}
class Box2 extends Component{
  render(){
    return(
      <div class = "answer">Although opSeek is specifically designed for Duke students, we do not limit the availibility of our resources to just that demographic. Anyone looking for opportunities in technology can make an account with us.</div>
    )
  }
}
class Box3 extends Component{
  render(){
    return(
      <div class = "answer">Our team is made up of 5 Duke Computer Science Students: Tim Jung, Jeff Kim, Judith Sanchez, Lizzet Clifton, and Eric Morgenstern. We have all been, and still are, in your shoes. We understand the difficulties that come with finding and organizing job applications, and we do not want that to limit anyone in their search for opportunities.</div>
    )
  }
}
class Box4 extends Component{
  render(){
    return(
      <div class = "answer">Feel free to email us at opseeek.admin@opseek.com, call our phone number at (919)123-4567, or come visit us at Duke University in Durham, NC</div>
    )
  }
}

class Spacer extends Component{
  render(){
    return(
      <div class = "spacer"></div>
    )
  }
}
class Spacer1 extends Component{
  render(){
    return(
      <div class = "spacer"></div>
    )
  }
}
class Spacer2 extends Component{
  render(){
    return(
      <div class = "spacer"></div>
    )
  }
}
class Spacer3 extends Component{
  render(){
    return(
      <div class = "spacer"></div>
    )
  }
}
class Spacer4 extends Component{
  render(){
    return(
      <div class = "spacer"></div>
    )
  }
}

export default FAQ;
