import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
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
        <hr></hr>
        <p className="post-body">{post.body}</p>
      </div>
    ));
    console.log(this.props.posts.league)
    return (
      <div className="forum-container">
        <div className="nba-title-bg"><h1 className="forum-title">NBA Forum</h1></div>
        <br />
        <hr />
        <Postform league='NBA'/>
        <hr />
      <h2>NBA Posts</h2>
        <div className="post-container">{filtered}</div>
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
