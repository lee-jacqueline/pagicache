import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  text: {
    margin: theme.spacing.unit,
  },
});

function TextButtons(props) {
  const { classes, totalCount, currentPage, pageup, pagedown } = props;
  return (
    <div>
      <Button className={classes.button} onClick={pagedown}>Back</Button>
      <span className={classes.text}>Page {currentPage} of {totalCount}</span>
      <Button className={classes.button} onClick={pageup}>Next</Button>
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default withStyles(styles)(TextButtons);
