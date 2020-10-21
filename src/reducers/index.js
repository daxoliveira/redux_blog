// The combineReducers is a method that literally combine all the reducers into one, the root reducer
import { combineReducers } from 'redux';

// This reducer brings the posts from the fake API
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer
});