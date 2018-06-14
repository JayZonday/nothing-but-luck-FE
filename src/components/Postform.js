import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions'

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
        <h2>Posterizer</h2>
        <form onSubmit={this.onSubmit}>
        <div>
          <textarea name="title" cols="40" rows="1" placeholder="Headline" onChange={this.onChange} value={this.state.title}></textarea>
          <br />
          <br />
          <textarea name="body" cols="45" rows="5" placeholder="Body" onChange={this.onChange} value={this.state.body}></textarea>
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
};


export default connect(null,{createPost})(Postform)
