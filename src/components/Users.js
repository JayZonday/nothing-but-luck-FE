import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { fetchPosts } from '../actions/postActions';
import ChatBox from './ChatBox'

class Users extends React.Component{

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchPosts();
  }

  filtered = (event) => { return this.props.posts.filter((post) => {
   return post.user_id === parseInt(event.target.id)
    }).map(post => (
      <div className='profile-post' key={post.id}>
        <h4>{post.league}</h4>
        <h2>{post.title}</h2>
        <hr />
        <p className="post-body">{post.body}</p>
      </div>
    ));
  }

  onClickHandler = (event) => {
    event.preventDefault()
    console.log('clicked', event.target.id)
    var modal = document.getElementById('myModal')
    var posts = document.getElementById('member-posts')
    var btn = document.getElementsByClassName('members')
    modal.style.display = 'block'
    const postItems = this.props.posts.filter((post) => {
      console.log(event.target.id)
          return post.user_id === (parseInt(event.target.id))
        })

    const filteredPosts = postItems.map((post) => {
          return (
          `<div className='profile-post' key=${post.id}>
            <h4 id="modal-league">${post.league}</h4>
            <h2 id="modal-title">${post.title}</h2>
            <hr />
            <p id="modal-body">${post.body}</p>
            <hr />
            <hr />
          </div>
          `
        )});
    console.log(filteredPosts)
    posts.innerHTML = filteredPosts
}



  closeModal = () => {
    var modal = document.getElementById('myModal')
    modal.style.display = "none"
  }


  render(){

    const userItems = this.props.users.map(user => (
      <div onClick={this.onClickHandler} className="members" id={user.id} key={user.id}>
        <h4 onClick={this.onClickHandler}  id={user.id} className="members-username">{user.username}</h4>
        <img onClick={this.onClickHandler} id={user.id} src={user.profurl} alt="prof-pic" className="member-img" />
        <p onClick={this.onClickHandler} id={user.id} className="members-motto">"{user.motto}"</p>
      </div>
    ));

    return (
      <div className="members-page">
        <h1 className="member-title">The NBL Squad</h1>
        <div className="members-container">{userItems}</div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <p id="close" className="close" onClick={this.closeModal}>X</p>
          <h2 id="member-posts"></h2>
        </div>
        </div>
      </div>
    )
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  users: state.users.items,
  posts: state.posts.items
});


export default connect(mapStateToProps, { fetchUsers, fetchPosts })(Users);
