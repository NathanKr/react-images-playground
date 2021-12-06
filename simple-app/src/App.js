import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BsFillAlarmFill } from "react-icons/bs";
import { FaGithub} from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>This is bootstrap icon using react-icons for better performnce</h2>
        <BsFillAlarmFill />
        <h2>This is font awesome icon using react-icons for better performnce</h2>
        <FaGithub />
        <h2>This image reside in another server</h2>
        <img
          src="https://media.istockphoto.com/photos/african-lion-headshot-looking-to-camera-picture-id689458958"
          alt="lions"
          style={{ height: "200px" }}
        />
        <h2>This image reside in public/images directory</h2>
        <img src="/images/lion.jpg" alt="lion" />
        <h2>This logo is imported from src directory</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
