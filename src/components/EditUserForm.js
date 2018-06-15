import React from 'react';
import { connect } from 'react-redux'
import { edit } from '../actions/userActions'
import PropTypes from 'prop-types'

class EditUserForm extends React.Component{

  state = {
    username: localStorage.username,
    password: "",
    motto: "",
    email: "",
    name: "",
    favsport: "",
    profurl: "",
    bgurl: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.edit(
      this.state.username,
      this.state.motto,
      this.state.email,
      this.state.name,
      this.state.favsport,
      this.state.profurl,
      this.state.bgurl
    );
  }


  render() {

    return (

      <div className="edit-user-form">
        <h1>Update Profile!</h1>

        <div>

          <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" onChange={this.onChange} value={this.state.name}></input>
            <br />
            <br />

            <label htmlFor="motto">Motto: </label>
            <input type="text" name="motto" onChange={this.onChange} value={this.state.motto}></input>
            <br />
            <br />

            <label htmlFor="email">Email: </label>
            <input type="text" name="email" onChange={this.onChange} value={this.state.email}></input>
            <br />
            <br />

            <label htmlFor="favsport">Favorite Sport: </label>
            <input type="text" name="favsport" onChange={this.onChange} value={this.state.favsport}></input>
            <br />
            <br />

            <label htmlFor="profurl">Profile Pic(url): </label>
            <input type="text" name="profurl" onChange={this.onChange} value={this.state.profurl}></input>
            <br />
            <br />

            <label htmlFor="bgurl">Background Img(url): </label>
            <input type="text" name="bgurl" onChange={this.onChange} value={this.state.bgurl}></input>
            <br />
            <br />
            <button type='submit'>Update Profile!</button>
          </div>
          </form>

        </div>
      </div>
    );
  }
}

EditUserForm.propTypes = {
  edit: PropTypes.func.isRequired
}



export default connect(null,{edit})(EditUserForm)
