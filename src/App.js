import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Posts from './components/Posts';
import Postform from './components/Postform';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Nav from './components/Nav';
import NflForum from './components/NflForum'
import NbaForum from './components/NbaForum'
import MlbForum from './components/MlbForum'

class App extends Component {

state = {
  mlbClicked: false,
  nflClicked: false,
  nbaClicked: false,
  contactClicked: false,
  membersClicked: false
}

handleMembersClick = () => {
  if(!this.state.membersClicked){
    console.log("Members was Clicked")
    this.setState({
    membersClicked: true
    })
  }else{
    console.log("Members was Clicked off")
    this.setState({
    membersClicked: false
    })
  }
}


handleMlbClick = () => {
  if(!this.state.mlbClicked){
    console.log("Mlb was Clicked")
    this.setState({
    mlbClicked: true
    })
  }else{
    console.log("Mlb was Clicked off")
    this.setState({
    mlbClicked: false
    })
  }
}
handleNflClick = () => {
  if(!this.state.nflClicked){
    console.log("Nfl was Clicked")
    this.setState({
    nflClicked: true
    })
  }else{
    console.log("Nfl was Clicked off")
    this.setState({
    nflClicked: false
    })
  }
}
handleNbaClick = () => {

  if(!this.state.nbaClicked){
    console.log("Nba was Clicked")
    this.setState({
    nbaClicked: true
    })
  }else{
    console.log("Nba was Clicked off")
    this.setState({
    nbaClicked: false
    })
  }
}
handleContactClick = () => {
  if(!this.state.contactClicked){
    console.log("Contact was Clicked")
    this.setState({
    contactClicked: true
    })
  }else{
    console.log("Contact was Clicked off")
    this.setState({
    contactClicked: false
    })
  }
}

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"><img src='https://upload.wikimedia.org/wikipedia/commons/1/15/Shamrock_svg.svg' id="clover" className="App-logo" alt="logo" />   Nothing But Luck   <img src='https://upload.wikimedia.org/wikipedia/commons/1/15/Shamrock_svg.svg' id="clover" className="App-logo" alt="logo" /></h1><img src='https://cdn-images-1.medium.com/max/532/0*EbTpf1h92YKCdNNv.png' id="fanasty-logo" className='animated infinite pulse' alt="flogo" /><h3 id="intro">A One-Spot, Non-Stop Fantasy Sport's Center</h3>
          </header>
          <p className="App-intro"></p>
          <Nav handleMlbClick={this.handleMlbClick} handleNbaClick={this.handleNbaClick} handleNflClick={this.handleNflClick} handleContactClick={this.handleContactClick} handleMembersClick={this.handleMembersClick} />
          <LoginForm onSubmit={this.login} />
          <RegisterForm/>
          <Route path='/posterizer' component={ Postform } />
          <hr />
          <Posts />
          <Route path='/nba' component={NbaForum}/>
          <Route path='/nfl' component={NflForum}/>
          <Route path='/mlb' component={MlbForum}/>
        </div>
    );
  }
}

export default App;
