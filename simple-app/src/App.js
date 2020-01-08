import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>This image reside in another server</h2>
        <img src='https://cdn.pixabay.com/photo/2014/12/22/10/04/lion-577104__340.jpg' alt='lions'/>
        <h2>This image reside in public/images directory</h2>
        <img src={'/images/lion.jpg'} alt='lion'/>
        <h2>This logo is imported from src directory</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
