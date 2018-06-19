import { FETCH_POSTS, NEW_POSTS, UPDATE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type){
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POSTS:
      return {
        ...state,
        item: action.payload,
      };
    case UPDATE_POST:
      // debugger
      return {
        ...state,
        item: action.payload,
      };
    default:
      console.log('postReducer')
      return state;
  }
}
