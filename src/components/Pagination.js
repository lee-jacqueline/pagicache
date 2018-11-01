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

class TextButtons extends React.Component {

  constructor(props) {
    super(props);
    this.disabled = this.disabled.bind(this);
    this.state = {
      disabledBack: false,
      disabledNext: false,
    };
  }
  // const { classes, data, totalCount, currentPage, pageup, pagedown } = props;

  disabled = () => {
    if (this.props.currentPage === 0) {
      this.setState({ disabledBack: true, disabledNext: false });
    } else if (this.props.currentPage === this.props.totalCount-1) {
      this.setState({ disabledBack: false, disabledNext: true });
    } else {
      this.setState({ disabledBack: false, disabledNext: false });
    }
  }

  render() {
    return (
      <div>
        <Button className={this.props.classes.button} disabled={this.state.disabledBack} onClick={() => {this.props.pagedown(); this.disabled()}}>Back</Button>
        <span className={this.props.classes.text}>Page {this.props.currentPage} of {this.props.totalCount}</span>
        <Button className={this.props.classes.button} disabled={this.state.disabledNext} onClick={() => {this.props.pageup(); this.disabled()}}>Next</Button>
      </div>
    );
  }
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default withStyles(styles)(TextButtons);
