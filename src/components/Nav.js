import React from 'react';
import {Route, Link, NavLink, Switch} from 'react-router-dom'
class Nav extends React.Component{
  render(){

    return (
    <div className="navBar">
      <Link to='/login'><button id='Login' >Login into NBL</button></Link>
      <Link to='/profile'><button>Your NBL-Zone</button></Link>
      <Link to='/members'><button id='members' >NBL Members</button></Link>
      <Link to='/nfl'><button id='nflButton' >NFL</button></Link>
      <Link to='/mlb'><button id='mlbButton' >MLB</button></Link>
      <Link to='/nba'><button id='nbaButton' >NBA</button></Link>
    </div>
    )
  }
}

export default Nav
