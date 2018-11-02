import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import CardDrawer from './CardDrawer.js';

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

/*
  Card component to display coreData information.
  @param {object} dataObject
  @param {object} classes
*/
function SimpleCard(props) {
  const { classes, dataObject } = props;
  const coreData = dataObject.coreData;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {coreData.state}
        </Typography>
        <Typography variant="h5" component="h2">
          {coreData.number}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Application: {coreData.application}<br/>
          Assignee: {coreData.assignee}
        </Typography>
        <Typography component="p">
          {coreData.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <CardDrawer dataObject={dataObject}/>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  dataObject: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
