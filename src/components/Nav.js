import React from 'react';
import {Route, Link, NavLink, Switch} from 'react-router-dom'
const Nav = (props) => {
  return (
    <div className="navBar">
      <button id='Login' ><Link to='/login'>Login into NBL</Link></button>
      <button id='nflButton' ><Link to='/nfl'>NFL</Link></button>
      <button id='mlbButton' ><Link to='/mlb'>MLB</Link></button>
      <button id='nbaButton' ><Link to='/nba'>NBA</Link></button>
      <button id='members' ><Link to='/members'>NBL Members</Link></button>
    </div>
  )
}

export default Nav
