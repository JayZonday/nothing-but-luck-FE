import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { editPost } from '../actions/postActions'
import { persistData } from '../actions/userActions'

class EditPostform extends React.Component{

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
      user_id: localStorage.user_id,
      post_id: this.props.match.params.id

    }
    this.props.editPost(post);
  }




  render(){
    console.log()

    return (
      <div className="edit-post">
        <h2>Posterizer Editor</h2>

        <form onSubmit={this.onSubmit}>
        <div>

          <textarea name="title" cols="40" rows="1" placeholder="Edit Title" onChange={this.onChange} value={this.state.title}></textarea>
          <br />
          <br />

          <textarea name="body" cols="45" rows="5" placeholder="Edit Body" onChange={this.onChange} value={this.state.body}></textarea>
          <br />
          <button type='submit'>Spread The Luck</button>

        </div>
        </form>

      </div>
    )
  }
}

EditPostform.propTypes = {
  editPost: PropTypes.func.isRequired
}


export default connect(null,{ editPost, persistData})(EditPostform)
