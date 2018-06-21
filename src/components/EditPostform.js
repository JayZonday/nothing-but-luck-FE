import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { editPost } from '../actions/postActions'
import { persistData } from '../actions/userActions'

class EditPostform extends React.Component{

  state = {
    title: "",
    body: "",
    league: this.props.league,
    fireRedirect: false
  }

  componentDidMount(){
    this.props.persistData();
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
    this.setState({
      title: "",
      body: "",
      fireRedirect: true
    })
    window.location.reload();
  }




  render(){
    console.log()
    const { fireRedirect } = this.state
    return (
      <div className="edit-post-container">
      <div className="edit-post">
        <h2 id="edit-posterizer-title">Posterizer Editor</h2>

        <form onSubmit={this.onSubmit}>
        <div>
        <div className="posterizer-inputs">
          <textarea id="t-input"name="title" cols="40" rows="1" placeholder="Edit Title" onChange={this.onChange} value={this.state.title}></textarea>
          <br />
          <br />

          <textarea id="b-input"name="body" cols="45" rows="5" placeholder="Edit Body" onChange={this.onChange} value={this.state.body}></textarea>
          <br />
          <button type='submit'>Spread The Luck</button>

        </div>
        </div>
        </form>
        {fireRedirect && (
        <Redirect to={'/profile'}/>
        )}

      </div>
      </div>
    )
  }
}

EditPostform.propTypes = {
  editPost: PropTypes.func.isRequired
}


export default connect(null,{ editPost, persistData})(EditPostform)
