import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

/*
  Loading wheel component that indicates if the data is still getting fetched.
  @param {object} classes
*/
function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <CircularProgress className={classes.progress} size={50} color="black" />
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
