import { FETCH_USERS } from './types';

export const fetchUsers = () => dispatch => {
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(users => dispatch({
      type: FETCH_USERS,
      payload: users
    }));
}
