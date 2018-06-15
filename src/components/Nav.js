import React from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component{
  render(){

    return (
    <div className="navBar">
      <NavLink to='/login'><button id='Login' >Login into NBL</button></NavLink>
      <NavLink to='/profile'><button>Your NBL-Zone</button></NavLink>
      <NavLink to='/'><button id='members' >NBL Members</button></NavLink>
      <NavLink to='/nfl'><button id='nflButton' >NFL</button></NavLink>
      <NavLink to='/mlb'><button id='mlbButton' >MLB</button></NavLink>
      <NavLink to='/nba'><button id='nbaButton' >NBA</button></NavLink>
    </div>
    )
  }
}

export default Nav
