import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions'

import Postform from './Postform';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Nav from './Nav';
import NflForum from './NflForum'
import NbaForum from './NbaForum'
import MlbForum from './MlbForum'
import Users from './Users'
import UserProfile from './UserProfile'


class App extends Component {


  onClickHandler = () => {
    localStorage.clear();
    alert('You Logged Out! - Have a Great Day!')
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"><img src='https://upload.wikimedia.org/wikipedia/commons/1/15/Shamrock_svg.svg' id="clover" className="App-logo" alt="logo" />   Nothing But Luck   <img src='https://upload.wikimedia.org/wikipedia/commons/1/15/Shamrock_svg.svg' id="clover" className="App-logo" alt="logo" /></h1><img src='https://cdn-images-1.medium.com/max/532/0*EbTpf1h92YKCdNNv.png' id="fanasty-logo" className='animated infinite pulse' alt="flogo" /><h3 id="intro">A One-Spot, Non-Stop Fantasy Sports's Center</h3>
          </header>
          <div className="App-intro">Current User:  {(localStorage.username === 'undefined')? null:localStorage.username}<button className="logout" onClick={this.onClickHandler}>Logout</button></div>
          <Nav/>
          <Route path="/login"  component={ LoginForm }/>
          <Route path="/signup" component={ RegisterForm } />
          <Route path='/posterizer' component={ Postform } />
          <Route path='/nba' component={NbaForum}/>
          <Route path='/nfl' component={NflForum}/>
          <Route path='/mlb' component={MlbForum}/>
          <Route path='/members' component={Users}/>
          <Route path='/profile' component={UserProfile}/>
        </div>
    );
  }
}



export default App;