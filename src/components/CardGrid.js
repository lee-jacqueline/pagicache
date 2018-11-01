import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from './Card.js';
import Pagination from './Pagination.js';
import CardDrawer from './CardDrawer.js';

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
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid>
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

function NestedGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid container item xs={12} spacing={24}>
          <FormRow classes={classes} />
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <FormRow classes={classes} />
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <FormRow classes={classes} />
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <Grid item xs={12} className={classes.pagination}>
            <Pagination />
            <CardDrawer />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

NestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedGrid);
