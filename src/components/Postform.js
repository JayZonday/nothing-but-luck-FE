import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions'

class Postform extends React.Component{

    state = {
      title: "",
      body: ""
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
    body: this.state.body
  }
  this.props.createPost(post);
}




  render(){
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
          <br />
          <br />
          <label>Body: </label>
          <textarea name="body" cols="10" rows="1" onChange={this.onChange} value={this.state.body}></textarea>
          <br />
          <button type='submit'>Submit Post</button>
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
