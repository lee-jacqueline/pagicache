import React, { Component } from 'react';
import './App.css';
import CardGrid from './components/CardGrid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardGrid />
        </header>
      </div>
    );
  }
}

export default App;
