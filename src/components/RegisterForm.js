import React from 'react';
import {connect} from 'react-redux'
import { register } from '../actions/userActions'
import PropTypes from 'prop-types'

class RegisterForm extends React.Component{

  state = {
    username: "",
    password: "",
    imgurl: "",
    bgurl: "",
    motto: "",
    hobbies: "",
    name: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state.username, this.state.password, this.state.motto, this.state.name, this.state.imgurl, this.state.bgurl, this.state.hobbies);
    if (localStorage.username !== "undefined"){
      alert("successful login")
    }else{
      alert("failed login - [if initial attempt failed retry same combo (bug)]")
    }
  }


  render() {

    return (
      <div className="login-form">
        <h1>Join The NBL Squad!</h1>
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
            <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={this.onChange} value={this.state.name}></input>
            <br />
            <br />
            <label htmlFor="motto">Motto: </label>
          <input type="text" name="motto" onChange={this.onChange} value={this.state.motto}></input>
            <br />
            <br />
            <label htmlFor="imgurl">imgurl: </label>
          <input type="text" name="imgurl" onChange={this.onChange} value={this.state.imgurl}></input>
            <br />
            <br />
            <label htmlFor="bgurl">bgurl: </label>
          <input type="text" name="bgurl" onChange={this.onChange} value={this.state.bgurl}></input>
            <br />
            <br />
            <label htmlFor="hobbies">Hobbies: </label>
          <input type="text" name="hobbies" onChange={this.onChange} value={this.state.hobbies}></input>
            <br />
            <br />
            <button type='submit'>Sign-Up!</button>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired
};


export default connect(null,{register})(RegisterForm)
