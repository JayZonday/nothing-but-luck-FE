import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import LoginForm from './components/LoginForm';


class App extends Component {


  register = () => {
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"><img src='https://upload.wikimedia.org/wikipedia/commons/1/15/Shamrock_svg.svg' id="clover" className="App-logo" alt="logo" />   Nothing But Luck   <img src='https://upload.wikimedia.org/wikipedia/commons/1/15/Shamrock_svg.svg' id="clover" className="App-logo" alt="logo" /></h1><img src='https://cdn-images-1.medium.com/max/532/0*EbTpf1h92YKCdNNv.png' id="fanasty-logo" className='animated infinite pulse' alt="flogo" /><h3 id="intro">A One-Spot, Non-Stop Fantasy Sport's Center</h3>
          </header>
          <p className="App-intro"></p>
          <LoginForm onSubmit={this.login} />
          <Postform />
          <hr />
          <Posts />
        </div>
    );
  }
}

export default App;
