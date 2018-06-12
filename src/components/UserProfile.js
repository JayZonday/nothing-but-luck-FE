import React from 'react';
import {Route, Link, NavLink, Switch} from 'react-router-dom'



class UserProfile extends React.Component {


  render (){
    return (

      <div className="user-profile">
          <h1> The {localStorage.username} NBL Zone </h1>
          <div className="profile-info"><p>General Info: Email/Motto/RealName/Picture </p></div>
          <div className="profile-posts"><p>Personal Post List Scroll</p></div>
      </div>
    )
  }
}

export default UserProfile
