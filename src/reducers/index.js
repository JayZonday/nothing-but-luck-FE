import {combineReducers} from 'redux';
import postReducer from './postReducer';
import auth from './auth';


export default combineReducers({
  posts: postReducer,
  auth: auth
});
