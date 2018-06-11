import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Postform from './Postform';
import {Route, Link, NavLink, Switch} from 'react-router-dom'

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
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    console.log(this.props.posts.league)
    return (
      <div>
        <h1>NFL Forum</h1>
        <hr />
        <Postform />
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