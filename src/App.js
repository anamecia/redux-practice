import React from 'react';
import Posts from './components/Posts';
import './App.css';
import Postform from './components/Postform';

function App() {
  return (
    <div className="App">
      <Postform/>
      <Posts/>
    </div>
  );
}

export default App;
