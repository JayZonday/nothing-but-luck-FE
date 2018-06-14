import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';
import Postform from './Postform';

class MlbForum extends React.Component{

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render(){
    const postItems = this.props.posts.filter((post) => {
      return post.league === "MLB"
    })

    const filtered = postItems.map(post => (
      <div className='post' key={post.id}>
        <h2>{post.title}</h2>
        <h5>Contributed by: {post.user.username}</h5>
        <hr></hr>
        <p className="post-body">{post.body}</p>
      </div>
    ));
    return (
      <div className="forum-container">
        <div className="mlb-title-bg"><h1 className="forum-title">MLB Forum</h1></div>
        <br />
        <hr />
        <Postform league="MLB"/>
        <hr />
      <h2>MLB Posts</h2>
        <div className="post-container">{filtered}</div>
      </div>
    )
  }
}

MlbForum.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
  fetchUsers: PropTypes.func.isRequired,
  user: PropTypes.object,
  users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
  users: state.users.items,
  user: state.users.item
});


export default connect(mapStateToProps, { fetchPosts, fetchUsers })(MlbForum);
