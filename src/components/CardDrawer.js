import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  list: {
    width: 550,
  },
  fullList: {
    width: 'auto',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class TemporaryDrawer extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      right: open,
    });
  };

  render() {
    const { classes, dataObject } = this.props;
    const coreData = dataObject.coreData;
    const serviceData = dataObject.serviceData;

    var fieldsCore = {};
    fieldsCore['Assigned to'] = coreData.assignee;
    fieldsCore['Short Description'] = coreData.shortDescription;
    fieldsCore['Application'] = coreData.application;

    var fieldsService = {};
    fieldsService['made_sla'] = serviceData.made_sla;
    fieldsService['upon_reject'] = serviceData.upon_reject;
    fieldsService['opened_by'] = serviceData.opened_by;
    fieldsService['priority'] = serviceData.priority;
    fieldsService['activity_due'] = serviceData.activity_due;
    fieldsService['approval'] = serviceData.approval;

    const sideList = (
      <div className={classes.list}>
        <Grid container className={classes.control} spacing={16}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              {coreData.number}
            </Typography>
          </Grid>
          {Object.keys(fieldsCore).map((key, index) => (
              <Grid container item xs={12} key={key}>
                <Grid item xs={4}>
                  {key}
                </Grid>
                <Grid item xs={8}>
                  {fieldsCore[key]}
                </Grid>
              </Grid>
            ))
          }
          {Object.keys(fieldsService).map((key, index) => (
              <Grid container item xs={12} key={key}>
                <Grid item xs={4}>
                  {key}
                </Grid>
                <Grid item xs={8}>
                  {fieldsService[key]}
                </Grid>
              </Grid>
            ))
          }
        </Grid>
      </div>
    );

    return (
      <div>
        <Button size="small" onClick={this.toggleDrawer(true)}>Learn More</Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  dataObject: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
