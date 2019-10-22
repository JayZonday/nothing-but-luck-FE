import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';

//Component//
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
    const rPostItems = postItems.reverse()
    const filtered = rPostItems.map(post => (
      <div className="post-bg">
      <div className='post' key={post.id}>
        <h2 id="post-title">{post.title}</h2>
        <h5>Contributed by: {post.user.username}</h5>
        <hr></hr>
        <p className="post-body">{post.body}</p>
      </div>
      </div>
    ));

    return (
      <div className="forum-container">
        <div className='forum-title-container'>
          <h1 className="forum-title">MLB Forum</h1>
            <img className="title-img"src="https://cdn.dribbble.com/users/31664/screenshots/2666221/second-base.gif"/>
        </div>
        <br />
        
      <h2 className="forum-title2">The Homer Zone</h2>
        <div className="post-container">{filtered}</div>
        <br />
        <hr />
        <Postform league='MLB'/>
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
