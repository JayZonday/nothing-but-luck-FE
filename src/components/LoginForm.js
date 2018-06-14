import React from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import PropTypes from 'prop-types'
import { Link, Route, Redirect } from 'react-router-dom'


class LoginForm extends React.Component{



  state = {
    username: "",
    password: ""

  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
    if (localStorage.username !== "undefined"){
      alert("successful login")
    }else{
      alert("failed login - [if initial attempt failed - retry same combo (bug)]")
    }
  }

  render() {
    return (
      <div className="login-form">
        <h1>Login into NBL!</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" onChange={this.onChange} value={this.state.username}></input>
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" onChange={this.onChange} value={this.state.password}></input>
            <br />
            <br />
            <button type='submit'>Feelin' Lucky</button>
            <Link to='/signup'><button>Don't Have an Account?</button></Link>
          </div>
          </form>
        </div>
      </div>
    );
  }
}


LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}


export default connect(null,{login})(LoginForm)
