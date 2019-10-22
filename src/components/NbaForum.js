import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { Link } from 'react-router-dom'

//Component//
import Postform from './Postform';
import EditPostform from './EditPostform';

class NbaForum extends React.Component{

  componentDidMount(){
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render(){

    const postItems = this.props.posts.filter((post) => {
      return post.league === "NBA"
    })
    const rPostItems = postItems.reverse()
    const filtered = rPostItems.map(post => (
      <div className="post-bg">
      <div className='post' key={post.id}>
        <h2 id="post-title">{post.title}</h2>
        <h5>Contributed by- {post.user.username}</h5>
        <hr></hr>
        <p className="post-body">{post.body}</p>
      </div>
      </div>
    ));

    return (
      <div className="forum-container">
        <div className='forum-title-container'>
          <h1 className="forum-title">NBA Forum</h1>
          <img className="title-img"src="https://cdn.dribbble.com/users/99875/screenshots/1785649/russell-westbrook-dribbble-blue.gif"/>
        </div>
        <br />
        
        <h2 className="forum-title2">The Hoop Zone</h2>
        <div className="post-container">{filtered}</div>
        <br />
        <hr />

        <Postform league='NBA'/>
      </div>
    )
  }
}

NbaForum.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});


export default connect(mapStateToProps, { fetchPosts })(NbaForum);
