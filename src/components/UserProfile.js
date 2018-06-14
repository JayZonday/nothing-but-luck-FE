import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';

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
      <div className='profile-post' key={post.id}>
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
        <figure className="profile-card">
          <img src="http://symphonyguildofwinterhaven.com/wp-content/uploads/Shamrocks.jpg" alt="profile-background" />
            <figcaption>
              <img src="http://i66.tinypic.com/212fi8k.jpg" alt="profile-picture" className="profile" />
              <h2>{localStorage.username}</h2>
              <hr />
              <br />
              <br />
              <span>motto</span>
              <br />
              <hr />
              <span>email</span>
              <br />
              <hr />
              <span>real name</span>
              <br />
              <hr />
              <span>hobbies</span>
              <br />
              <hr />
              <span>Favorite Sport</span>
            </figcaption>
          </figure>
      </div>
      <div className="profile-posts">
          <h1>Posts</h1>
        <div className="profileposts-container">{filtered}</div>
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
