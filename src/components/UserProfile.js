import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, editPost} from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  render (){
    if (!!this.props.users[0]){

      const postItems = this.props.posts.filter((post) => {
        return post.user_id === parseInt(localStorage.user_id)
      })

      const filtered = postItems.map(post => (
        <div className='profile-post' key={post.id}>
          <h4>{post.league}</h4>
          <h2>{post.title}</h2>
          <hr />
          <p className="post-body">{post.body}</p>
          <Link to={`/edit-post/${post.id}`}><button> edit </button></Link>
        </div>
      ));

      return (
        <div className="user-profile">
          <h1> The {localStorage.username} NBL Zone </h1>
          <hr />

        <div className="profile-info">
          <figure className="profile-card">
            <img id="b" src={this.props.user.bgurl} alt="bg-pic" />
              <figcaption>
                <img src={this.props.user.profurl} alt="prof-pic" className="profile" />
                <h2>{this.props.user.username}</h2>
                <hr />
                <br />
                <br />
                <span>Motto: {this.props.user.motto}</span>
                <br />
                <hr />
                <span>Name: {this.props.user.name}</span>
                <br />
                <hr />
                <span>Email: {this.props.user.email}</span>
                <br />
                <hr />
                <span>Favorite Sport: {this.props.user.favsport}</span>
              </figcaption>
            </figure>

        </div>
        <div className="profile-posts">
          <h1>Posts</h1>
          <div className="profileposts-container">{filtered}</div>
        </div>

        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

UserProfile.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => ({
    users: state.users.items,
    posts: state.posts.items,
    user: state.users.item
});

export default connect(mapStateToProps, { fetchUsers, fetchPosts})(UserProfile);
