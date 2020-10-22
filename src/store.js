import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// The second argument in the createStore function is the initial state
const initialState = {};

// The third argument in the createStore function is supposed to be an enhancer.
// The redux thunk middleware is just that, an enhancer that will help with async actions.
const middleware = [thunk];

// The store holds the whole state tree of your application. 
// The only way to change the state inside it is to dispatch an action on it.
// To create the store object pass your root reducing function to createStore.
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;