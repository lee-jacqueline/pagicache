import React, { Component } from 'react';
import './App.css';
import CardGrid from './components/CardGrid.js';
import LoadingWheel from './components/LoadingWheel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardGrid />
          <LoadingWheel />
        </header>
      </div>
    );
  }
}

export default App;
