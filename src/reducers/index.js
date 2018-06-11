import {combineReducers} from 'redux';
import postReducer from './postReducer';
import auth from './auth';
import userReducer from './userReducer';


export default combineReducers({
  posts: postReducer,
  auth: auth,
  users: userReducer
});
