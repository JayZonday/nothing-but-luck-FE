import React, { Component } from 'react';
import './App.css';
import {Route, Link, NavLink, Switch} from 'react-router-dom'

import Posts from './components/Posts';
import Postform from './components/Postform';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Nav from './components/Nav';
import NflForum from './components/NflForum'
import NbaForum from './components/NbaForum'
import MlbForum from './components/MlbForum'

class App extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"><img src='https://upload.wikimedia.org/wikipedia/commons/1/15/Shamrock_svg.svg' id="clover" className="App-logo" alt="logo" />   Nothing But Luck   <img src='https://upload.wikimedia.org/wikipedia/commons/1/15/Shamrock_svg.svg' id="clover" className="App-logo" alt="logo" /></h1><img src='https://cdn-images-1.medium.com/max/532/0*EbTpf1h92YKCdNNv.png' id="fanasty-logo" className='animated infinite pulse' alt="flogo" /><h3 id="intro">A One-Spot, Non-Stop Fantasy Sport's Center</h3>
          </header>
          <p className="App-intro"></p>
          <Nav/>
          <Route path="/login"  component={ LoginForm }/>
          <Route path="/signup" component={ RegisterForm } />
          <Route path='/posterizer' component={ Postform } />
          <hr />
          <Route path='/nba' component={NbaForum}/>
          <Route path='/nfl' component={NflForum}/>
          <Route path='/mlb' component={MlbForum}/>
        </div>
    );
  }
}

export default App;
