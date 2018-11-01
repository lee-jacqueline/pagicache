import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from './Card.js';
import Pagination from './Pagination.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '4em',
  },
  pagination: {
    textAlign: 'center',
  },
});

function FormRow(props) {
  const { data } = props;

  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Card dataObject={data[0]}/>
      </Grid>
      <Grid item xs={3}>
        <Card dataObject={data[0]}/>
      </Grid>
      <Grid item xs={3}>
        <Card dataObject={data[0]}/>
      </Grid>
      <Grid item xs={3}>
        <Card dataObject={data[0]}/>
      </Grid>
    </React.Fragment>
  );
}

function NestedGrid(props) {
  const { classes, data } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid container item xs={12} spacing={24}>
          <FormRow data={data}/>
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <FormRow data={data}/>
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <FormRow data={data}/>
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <Grid item xs={12} className={classes.pagination}>
            <Pagination />
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
};

export default withStyles(styles)(NestedGrid);
