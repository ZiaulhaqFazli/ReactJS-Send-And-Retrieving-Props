import { Component } from "react";
import React from "react";
import User from './User';

class App extends Component{
    render() {
    return (
      <div className="App">
        <p> This is app component</p>
        <h1> My React App </h1><br></br>
        {/* Emded User Component in App Component */}

        <p> This is user component with properties</p>
        <User name="Ziaulhaq" age="30" />
        <User name="Javed" age="20" />
      </div>
    );
  }
}

export default App;
