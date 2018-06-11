import React from 'react';

const Nav = (props) => {
  return (
    <div className="navBar">
      <button id='members' onClick={()=> props.handleMembersClick()}>The NBL Squad</button>
      <button id='nflButton' onClick={()=> props.handleNflClick()}>NFL</button>
      <button id='mlbButton' onClick={()=> props.handleMlbClick()}>MLB</button>
      <button id='nbaButton' onClick={()=> props.handleNbaClick()}>NBA</button>
      <button id='contact' onClick={()=> props.handleContactClick()}>About NBL</button>
    </div>
  )
}

export default Nav
