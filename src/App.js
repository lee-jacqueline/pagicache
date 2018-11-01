import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import CardGrid from './components/CardGrid.js';
import { connect } from 'react-redux';

const App = ({ data }) => {
  return (
    <div className="App">
      <header className="App-header">
        <CardGrid data={data}/>
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.updateData.data,
  };
}

App.propTypes = {
  data: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(App);
