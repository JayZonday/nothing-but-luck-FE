import { FETCH_USERS, NEW_USER, USER_LOGIN, UPDATE_USER} from './types';

export const fetchUsers = () => dispatch => {
    fetch(`http://localhost:3000/api/v1/users/`)
    .then(res => res.json())
    .then(users => dispatch({
      type: FETCH_USERS,
      payload: users
    }));
}

//
export const persistData = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/sessions/${localStorage.getItem('user_id')}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(user => { (console.log(user))
      // localStorage.setItem('token', user.token)
      // localStorage.setItem('user_id', user.user_id)
      // localStorage.setItem('username', user.username)
      dispatch({
        type: USER_LOGIN,
        token: localStorage.getItem('token'),
        user_id: localStorage.getItem('user_id'),
        username: localStorage.getItem('username'),
        payload: user
      })
    })
  }
}
//

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
    .then(user => { (console.log(user))
      localStorage.setItem('token', user.token)
      localStorage.setItem('user_id', user.user_id)
      localStorage.setItem('username', user.username)
      dispatch({
        type: USER_LOGIN,
        token: localStorage.getItem('token'),
        user_id: localStorage.getItem('user_id'),
        username: localStorage.getItem('username'),
        payload: user
      })
    })
  }
}

export const register = (username, password, motto, email, name, favsport, profurl, bgurl) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({username, password, motto, email, name, favsport, profurl, bgurl})
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem('token', user.token)
      localStorage.setItem('user_id', user.user_id)
      localStorage.setItem('username', user.username)
      dispatch({
        type: NEW_USER,
        token: localStorage.getItem('token'),
        user_id: localStorage.getItem('user_id'),
        payload: user
      })
    })
  }
}

export const edit = (username, password, motto, email, name, favsport, profurl, bgurl) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem('user_id')}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({username, password, motto, email, name, favsport, profurl, bgurl})
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem('token', user.token)
      localStorage.setItem('user_id', user.user_id)
      localStorage.setItem('username', user.username)
      dispatch({
        type: UPDATE_USER,
        token: localStorage.getItem('token'),
        user_id: localStorage.getItem('user_id'),
        payload: user
      })
    })
  }
}
