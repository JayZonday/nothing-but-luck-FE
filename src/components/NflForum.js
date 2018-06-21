import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

//Component//
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
        <div className="nfl-title-bg"><h1 className="forum-title">NFL Forum<img className="title-img"src="https://cdn.dribbble.com/users/99875/screenshots/2374213/thanksgiving-2.gif"/></h1></div>
        <br />
        <hr />
        <h2 className="forum-title2">The End Zone</h2>
        <div className="post-container">{filtered}</div>
        <br />
        <hr />
        <Postform league='NFL'/>
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
