import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions'
import {Route, Link, NavLink, Switch} from 'react-router-dom'

class Postform extends React.Component{

    state = {
      title: "",
      body: "",
      league: "",
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
      <div>
        <h3>Add Posts</h3>
        <form onSubmit={this.onSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
          <br />
          <br />
          <label>League: </label>
          <br />
          <br />
          <label>NBA: </label>
          <input type="checkbox" id="league" name="league" onChange={this.onChange} value="NBA"></input>
          <br />
          <label>NFL: </label>
          <input type="checkbox" id="league" name="league" onChange={this.onChange} value="NFL"></input>
          <br />
          <label>MLB: </label>
          <input type="checkbox" id="league" name="league" onChange={this.onChange} value="MLB"></input>
          <br />
          <br />
          <label>Body: </label>
          <textarea name="body" cols="10" rows="1" onChange={this.onChange} value={this.state.body}></textarea>
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
