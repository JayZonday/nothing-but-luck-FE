import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Postform from './Postform';
import {Route, Link, NavLink, Switch} from 'react-router-dom'
import UserProfile from './UserProfile'

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
        <h3>{post.title}</h3>
        <hr></hr>
        <p>{post.body}</p>
      </div>
    ));
    console.log(this.props.posts.league)
    return (
      <div className="forum-container">
        <h1>NFL Forum</h1>
        <br />
        <hr />
        <Postform league="NFL" />
        <hr />
        <h2>NFL Articles</h2>
        {filtered}
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
