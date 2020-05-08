import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers, persistData } from '../actions/userActions';

// Components //
import ChatBox from './ChatBox'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Nav from './Nav';
import NflForum from './Forums/NflForum'
import NbaForum from './Forums/NbaForum'
import MlbForum from './Forums/MlbForum'
import Users from './Users'
import UserProfile from './UserProfile'
import EditUserForm from './EditUserForm'
import EditPostform from './EditPostform'
import NotFound from './NotFound'
import Logout from './Logout'

//Round-about component that is a copy of above component//
import NotFoundHelp from './NotFoundHelp'



class App extends Component {

  state = {
    loggedOut: false
  }

  onClickHandler = (event) => {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/Logout");
  }

  componentDidMount(){
    this.props.fetchUsers();

    this.props.persistData();
  }


  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Nothing But Luck</h1><img src='https://cdn-images-1.medium.com/max/532/0*EbTpf1h92YKCdNNv.png' id="fanasty-logo"  alt="flogo" /><h3 id="intro">A One-Spot, Non-Stop Fantasy Sports's Center</h3>
      </header>
      <div className="App-intro">Current User:  <span id="cuser">{(localStorage.username === this.props.user.username)? this.props.user.username:null}</span><button className="logout" onClick={this.onClickHandler}>Logout</button> </div>
      <Nav/>
      <Switch>
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ RegisterForm } />
      <Route path='/' exact component={ Users }/>
      <Route path='/notfoundhelp' component= { NotFoundHelp } />
      <Route path='/logout' component = { Logout } />
      <Route path='/chat' component = { ChatBox } />


      {!(localStorage.getItem("token") === 'undefined')?
        <Route path='/notfound' component={ NotFound } />
        :
        <Redirect to='/notfoundhelp' />
      }
      {(localStorage.getItem("token"))?
        <Route path='/mlb' component={ MlbForum }/>
        :
        <Redirect to="/" />
      }

      {(localStorage.getItem("token"))?
        <Route path='/nfl' component={ NflForum }/>
        :
        <Redirect to="/" />
      }
      {(localStorage.getItem("token"))?
        <Route path='/nba' component={ NbaForum }/>
        :
        <Redirect to="/" />
      }
      {(localStorage.getItem("token"))?
        <Route path='/profile' component={ UserProfile }/>
        :
        <Redirect to="/" />
      }
      {(localStorage.getItem("token"))?
        <Route path='/edit-profile' component={ EditUserForm }/>
        :
        <Redirect to="/" />
      }
      {(localStorage.getItem("token"))?
        <Route path='/edit-post/:id' component={ EditPostform }/>
        :
        <Redirect to="/" />
      }
        </Switch>
    </div>
    );
  }
}



App.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    user: PropTypes.object
  }
  const mapStateToProps = state => ({
    users: state.users.items,
    user: state.users.item
  });


export default withRouter(connect(mapStateToProps, { fetchUsers, persistData })(App))
