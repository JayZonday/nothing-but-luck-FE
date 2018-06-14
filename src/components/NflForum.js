import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Postform from './Postform';

class NflForum extends React.Component{

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
      return post.league === "NFL"
    })

    const filtered = postItems.map(post => (
      <div className='post' key={post.id}>
        <h2>{post.title}</h2>
        <h5>contributed by: {post.user.username}</h5>
        <hr></hr>
        <p className="post-body">{post.body}</p>
      </div>
    ));
    console.log(this.props.posts.league)
    return (
      <div className="forum-container">
        <div className="nfl-title-bg"><h1 className="forum-title">NFL Forum</h1></div>
        <br />
        <hr />
        <Postform league="NFL" />
        <hr />
        <h2>NFL Articles</h2>
        <div className="post-container">{filtered}</div>
      </div>
    )
  }
  }

NflForum.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});


export default connect(mapStateToProps, { fetchPosts })(NflForum);
