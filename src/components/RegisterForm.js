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
    this.props.history.push("/chat");
  }


  render() {
    return (
      <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Sign-Up Now!</h1>
        <p className="ls-info">Become an exclusive member of NBL</p>
        <div>

          <form onSubmit={this.handleSubmit}>
          <div>
          <div className="signup-inputs">
            <input id="su-input" type="text" name="username" placeholder="Username" onChange={this.onChange} value={this.state.username}></input>
            <br />
            <br />


            <input  id="su-input" type="password" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password}></input>
            <br />
            <br />


            <input id="su-input" type="text" name="name" placeholder="Name" onChange={this.onChange} value={this.state.name}></input>
            <br />
            <br />


            <input id="su-input" type="text" name="motto" placeholder="Motto" onChange={this.onChange} value={this.state.motto}></input>
            <br />
            <br />


            <input id="su-input" type="text" name="email" placeholder="Email" onChange={this.onChange} value={this.state.email}></input>
            <br />
            <br />


            <input id="su-input" type="text" name="favsport" placeholder="Favorite Sport" onChange={this.onChange} value={this.state.favsport}></input>
            <br />
            <br />


            <input id="su-input" type="text" name="profurl" placeholder="Profile Picture(url)" onChange={this.onChange} value={this.state.profurl}></input>
            <br />
            <br />


            <input id="su-input" type="text" name="bgurl" placeholder="Background Image(url)" onChange={this.onChange} value={this.state.bgurl}></input>
            <br />
            <br />

            <button type='submit'>Welcome to NBL!</button>

          </div>
          </div>
          </form>

        </div>
        </div>
      </div>
    );
  }
}




export default connect(null,{ register })(RegisterForm)
