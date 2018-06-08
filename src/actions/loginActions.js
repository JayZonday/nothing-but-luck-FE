import {USER_LOGIN} from './types'

export const login = (username, password) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users?username=${username}&password=${password}`)
    .then(res => res.json())
    .then(user => {
      dispatch({
        type: USER_LOGIN,
        payload: user
      })
    })
  }
}
