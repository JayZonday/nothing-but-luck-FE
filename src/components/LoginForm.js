import React from 'react';
import {connect} from 'react-redux'
import { login } from '../actions/loginActions'
import PropTypes from 'prop-types'
import {Route, Link, NavLink, Switch} from 'react-router-dom'

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
  }


  render() {

    return (
      <div>
        <h1>Spread The Luck!</h1>
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
            <button type='submit'>Login</button>
            <Link to='/signup'>Don't Have an Account?</Link>
          </div>
          </form>
        </div>
        <hr />
      </div>
    );
  }
}


LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}


export default connect(null,{login})(LoginForm)
