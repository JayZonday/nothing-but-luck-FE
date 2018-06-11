import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import {Route, Link, NavLink, Switch} from 'react-router-dom'
import Postform from './Postform';

class Users extends React.Component{

  componentDidMount(){
    this.props.fetchUsers();
  }


  render(){
    const userItems = this.props.users.map(user => (
      <div key={user.id}>
        <h3>{user.username}</h3>
      </div>
    ));
    return (
      <div>
        <h1>All NBL Members</h1>
        {userItems}
      </div>
    )
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  users: state.users.items
});


export default connect(mapStateToProps, { fetchUsers })(Users);
