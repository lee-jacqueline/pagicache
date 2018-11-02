import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from './Card.js';
import Pagination from './Pagination.js';
import LoadingWheel from './LoadingWheel.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '4em',
  },
  pagination: {
    textAlign: 'center',
  },
});

/*
  Function to iterate through dataObject array and map out onto the grid.
  @param {array} data
*/
function FormRow(props) {
  const { data } = props;
  return (
    <React.Fragment>
      {data.map((object, index) => (
        <Grid item xs={3} key={index}>
          <Card dataObject={object}/>
        </Grid>
      ))}
    </React.Fragment>
  );
}

/*
  Outer grid of FormRow
  @param {object} classes
  @param {array} data
  @param {number} totalCount
  @param {number} currentPage
  @param {function} pageup
  @param {function} pagedown
  @param {bool} loading
*/
function NestedGrid(props) {
  const { classes, data, totalCount, currentPage, pageup, pagedown, loading } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid container item xs={12} spacing={24}>
          <FormRow data={data}/>
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <Grid item xs={12} className={classes.pagination}>
            <Pagination totalCount={totalCount}
              currentPage={currentPage}
              pageup={pageup}
              pagedown={pagedown}/>
            {loading ? <LoadingWheel /> : ''}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

FormRow.propTypes = {
  data: PropTypes.array.isRequired,
};
NestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default withStyles(styles)(NestedGrid);
