import {USER_LOGIN} from '../actions/types';

const initialAuthState = {
  id: null,
  token: null
};

const auth = (state = initialAuthState, action) => {
  switch(action.type) {
    case USER_LOGIN:
      return {
      ...state,
      id: action.payload,
      token: action.payload
    }
    default:
      return state;
  }
};

export default auth;
