import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './App.css';
import CardGrid from './components/CardGrid.js';

import { fetchData } from './actions/FetchData.js';
import { updateCurrent } from './actions/PageNav.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchData(this.props.currentPage);
  }

  nextPage() {
    this.props.fetchData(this.props.currentPage);
    this.props.updateCurrent(this.props.currentPage+1);
  }
  prevPage() {
    this.props.fetchData(this.props.currentPage);
    this.props.updateCurrent(this.props.currentPage-1);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardGrid data={this.props.data}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            pageup={this.nextPage}
            pagedown={this.prevPage}
            loading={this.props.loading}/>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.updateData.data,
    loading: state.updateData.loading,
    totalCount: state.pages.totalCount,
    currentPage: state.pages.currentPage,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData, updateCurrent }, dispatch);
};

App.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
