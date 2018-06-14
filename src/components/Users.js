import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class Users extends React.Component{

  componentDidMount(){
    this.props.fetchUsers();
  }


  render(){
    const userItems = this.props.users.map(user => (
      <div className="members" key={user.id}>
        <h4>{user.username}</h4>
        <p>{user.motto}</p>
      </div>
    ));
    return (
      <div className="members-page">
        <h1>The NBL Squad</h1>
        <div className="members-container">{userItems}</div>
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
