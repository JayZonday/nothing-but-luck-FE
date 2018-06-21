import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, editPost} from '../actions/postActions';
import { fetchUsers, persistData } from '../actions/userActions';
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchUsers();
    this.props.persistData();
  }

  render (){
    if (!!this.props.users[0]){

      const postItems = this.props.posts.filter((post) => {
        return post.user_id === parseInt(localStorage.user_id)
      })
      const rPostItems = postItems.reverse()

      const filtered = rPostItems.map(post => (
        <div className="profile-postbg">
        <div className='profile-post' key={post.id}>
          <h2 id="prof-title">{post.title}</h2>
          <h5 id="prof-league">Forum: {post.league}</h5>
          <hr />
          <p id="prof-body">{post.body}</p>
          <hr />
          <Link to={`/edit-post/${post.id}`}><button> Update </button></Link>
        </div>
        </div>
      ));

      return (
        <div className="user-profile">
          <h1 id="username-title"> The {localStorage.username} NBL Zone </h1>
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
                <span className="profile-attr">Motto: </span> <span>{this.props.user.motto}</span>
                <br />
                <hr />
                <span className="profile-attr">Name: </span> <span>{this.props.user.name}</span>
                <br />
                <hr />
                <span className="profile-attr">Email: </span> <span>{this.props.user.email}</span>
                <br />
                <hr />
                <span className="profile-attr">Favorite Sport: </span> <span>{this.props.user.favsport}</span>
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
    users: PropTypes.array.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => ({
    users: state.users.items,
    posts: state.posts.items,
    user: state.users.item
});

export default connect(mapStateToProps, { fetchUsers, fetchPosts, persistData})(UserProfile);
