import React from 'react';
import {connect} from 'react-redux'
import { login } from '../actions/loginActions'


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

  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(login(this.state.username, this.state.password));
  }

  render() {

    return (
      <div>
        <h1>Spread The Luck!</h1>
        <div>
          <form onSubmit={this.onSubmit}>
          <div>
            <label>Username: </label>
            <input type="text" name="username" onChange={this.onChange} value={this.state.username}></input>
            <br />
            <br />
            <label>Password: </label>
            <input  type="password" name="password" onChange={this.onChange} value={this.state.password}></input>
            <br />
            <button type='submit'>Login</button>
          </div>
          </form>
        </div>
        <hr />
      </div>
    );
  }
}




export default connect()(LoginForm);
