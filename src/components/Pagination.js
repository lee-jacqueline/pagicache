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
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>Back</Button>
      <span className={classes.text}>Page 1 of 414</span>
      <Button className={classes.button}>Next</Button>
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);
