import React from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component{
  render(){

    return (
    <div className="navBar">
      <NavLink to='/login'><button id='Login' >Login into NBL</button></NavLink>
      <NavLink to='/profile'><button>Your NBL-Zone</button></NavLink>
      <NavLink to='/'><button id='members' >NBL Members</button></NavLink>
      <NavLink to='/NFL'><button id='nflButton' >NFL</button></NavLink>
      <NavLink to='/MLB'><button id='mlbButton' >MLB</button></NavLink>
      <NavLink to='/NBA'><button id='nbaButton' >NBA</button></NavLink>
      <NavLink to='/chat'><button id='chatButton' >The NBL Potluck Chat</button></NavLink>
    </div>
    )
  }
}

export default Nav
