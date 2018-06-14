import { FETCH_USERS, NEW_USER, USER_LOGIN } from '../actions/types';

const initialState = {
  id: null,
  token: null,
  items: [],
  item: {}
}
export default function(state = initialState, action) {
  switch(action.type){
    case USER_LOGIN:
      return {
      ...state,
      id: action.user_id,
      token: action.token,
      username: action.username,
      item: action.payload
    };
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_USER:
      return{
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}
