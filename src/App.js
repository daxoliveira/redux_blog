// In order to start using Redux in this application we're going to install three dependencies
// yarn add redux react-redux redux-thunk

import React from 'react';
import reactLogo from './reactLogo.svg';
import reduxLogo from './reduxLogo.svg';
import './App.css';
// The provider is a react component that is the bridge between react and redux
// As a first step to implementing redux we should import provider from react-redux
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';

function App() {
  return (
    // After importing the provider we need to wrap the app div with the provider tag
    // and use the store attribute in it.
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-react-logo" alt="react logo" />
          <img src={reduxLogo} className="App-redux-logo" alt="redux logo" />
          <p>Welcome to React</p>
        </header>
        <PostForm />
        <br/>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
