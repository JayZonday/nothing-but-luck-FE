import React from 'react';
import {Route, Link, NavLink, Switch} from 'react-router-dom'
const Nav = (props) => {
  return (
    <div className="navBar">
      <button id='members' ><Link to='/members-list'>The NBL Squad</Link></button>
      <button id='nflButton' ><Link to='/nfl'>NFL</Link></button>
      <button id='mlbButton' ><Link to='/mlb'>MLB</Link></button>
      <button id='nbaButton' ><Link to='/nba'>NBA</Link></button>
      <button id='contact' ><Link to='/about'>About NBL</Link></button>
    </div>
  )
}

export default Nav
