import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

//Component//
import Postform from './Postform';

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
        <div className="nba-title-bg"><h1 className="forum-title">NBA Forum</h1></div>
        <br />
        <hr />
        <h2 className="forum-title2">NBA Posts</h2>
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
