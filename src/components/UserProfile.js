import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';
import {Route, Link, NavLink, Switch} from 'react-router-dom'

class UserProfile extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  render (){
    const postItems = this.props.posts.filter((post) => {
      return post.user_id === parseInt(localStorage.user_id)
    })
    const filtered = postItems.map(post => (
    <div className="profile-posts">
      <div className='post' key={post.id}>
        <h4>{post.league}</h4>
        <h2>{post.title}</h2>
        <hr />
        <p className="post-body">{post.body}</p>
      </div>
    </div>
    ));
    return (
      <div className="user-profile">
        <h1> The {localStorage.username} NBL Zone </h1>
        <hr />
        <div className="profile-info">
            <h1>General Info</h1>
          <p>Email/Motto/RealName/Picture </p>
        </div>
        <div className="profile-posts">
          <h1>Articles</h1>
          <p>{filtered}</p>
        </div>
      </div>
    )
  }
}

UserProfile.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  }
  const mapStateToProps = state => ({
    users: state.users.items,
    posts: state.posts.items
  });

export default connect(mapStateToProps, { fetchUsers, fetchPosts })(UserProfile);
