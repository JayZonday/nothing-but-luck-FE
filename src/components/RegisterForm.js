import React from 'react';
import { connect } from 'react-redux'
import { register } from '../actions/userActions'



class RegisterForm extends React.Component{

  state = {
    username: "",
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
    this.props.register(
      this.state.username,
      this.state.password,
      this.state.motto,
      this.state.email,
      this.state.name,
      this.state.favsport,
      this.state.profurl,
      this.state.bgurl
    );

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
            <button type='submit'>Sign-Up!</button>
          </div>
          </form>
        </div>
      </div>
    );
  }
}




export default connect(null,{register})(RegisterForm)
