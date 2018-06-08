import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import LoginForm from './components/LoginForm';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LoginForm />
        <Postform />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
