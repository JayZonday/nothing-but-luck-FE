import {FETCH_USERS, USER_LOGIN, NEW_USER} from './types';

export const fetchUsers = () => dispatch => {
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(users => dispatch({
      type: FETCH_USERS,
      payload: users
    }));
}

export const login = (username, password) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/sessions/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem('token', user.token)
      localStorage.setItem('user_id', user.user_id)
      localStorage.setItem('username', user.username)
      dispatch({
        type: USER_LOGIN,
        token: localStorage.token,
        user_id: localStorage.user_id,
        username: localStorage.username
      })
    })
  }
}
export const register = (username, password) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem('token', user.token)
      localStorage.setItem('user_id', user.user_id)
      localStorage.setItem('username', user.username)
      dispatch({
        type: NEW_USER,
        token: localStorage.token,
        user_id: localStorage.user_id,
        username: localStorage.username
      })
    })
  }
}
