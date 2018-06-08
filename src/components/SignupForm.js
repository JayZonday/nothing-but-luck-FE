import React from 'react';

class SignupForm extends React.Component{

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
    console.log(this.state)
  }

  render() {

    return (
      <div>
        <h1>Join Our Community!</h1>
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
            <button type='submit'>Sign-Up!</button>
          </div>
          </form>
        </div>
        <hr />
      </div>
    );
  }

}

export default SignupForm;
