import React from 'react';
import reactLogo from './reactLogo.svg';
import reduxLogo from './reduxLogo.svg';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
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
  );
}

export default App;
