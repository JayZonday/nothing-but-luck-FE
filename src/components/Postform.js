import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions'
import {Route, Link, NavLink, Switch} from 'react-router-dom'

class Postform extends React.Component{

    state = {
      title: "",
      body: "",
      league: this.props.league,
    }

onChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit = (e) => {
  e.preventDefault();
  const post = {
    title: this.state.title,
    body: this.state.body,
    league: this.state.league,
    user_id: localStorage.user_id
  }
  this.props.createPost(post);
}




  render(){
    return (
      <div className="add-post">
        <h3>Add Posts</h3>
        <form onSubmit={this.onSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
          <br />
          <br />
          <label>Body: </label>
          <textarea name="body" cols="45" rows="5" onChange={this.onChange} value={this.state.body}></textarea>
          <br />
          <button type='submit'>Spread The Luck</button>
        </div>
        </form>
      </div>
    )
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
}


export default connect(null,{createPost})(Postform)
