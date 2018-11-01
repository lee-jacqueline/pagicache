import React, { Component } from 'react';
import './App.css';
import CardDrawer from './components/CardDrawer.js';
import CardGrid from './components/CardGrid.js';
import Pagination from './components/Pagination.js';

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
