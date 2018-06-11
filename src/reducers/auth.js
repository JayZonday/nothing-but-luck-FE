import {USER_LOGIN} from '../actions/types';

const initialAuthState = {
  id: null,
  token: null
};

const auth = (state = initialAuthState, action) => {
  console.log(action)
  switch(action.type) {
    case USER_LOGIN:
      return {
      ...state,
      id: action.user_id,
      token: action.token,
      username: action.username
    }
    default:
      return state;
  }
};

export default auth;
