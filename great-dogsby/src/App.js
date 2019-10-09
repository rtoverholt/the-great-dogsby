import React, { Component } from 'react';
import Dog from './Dog.js';
import './App.css';

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
    }
  }
  render () {

  return (
    <div className="App">
      <header id="header">
      <h1>The Great Dogsby</h1>
      </header>
      <p>Created by Ryan Overholt for Magic-Wrighter</p>
      <Dog />


    </div>
  );
}
}

export default App;
