import React from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'


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
    this.props.history.push("/chat");
  }

  render() {
    return (
      <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Login into NBL!</h1>
        <p className="ls-info">For Exclusive Access to NBL Content</p>
        <div>

          <form onSubmit={this.handleSubmit}>
          <div className="inputs">

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
      </div>
    );
  }
}


LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}


export default connect(null,{login})(LoginForm)
