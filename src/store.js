import { createStore, applyMiddleware } from 'redux';

// The store holds the whole state tree of your application. 
// The only way to change the state inside it is to dispatch an action on it.
// To create the store object pass your root reducing function to createStore.
const store = createStore(() => [], {}, applyMiddleware());
