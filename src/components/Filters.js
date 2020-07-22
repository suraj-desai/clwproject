import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

export default function Filters() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary">
        3-Days
      </Button>
      <Button variant="outlined" color="primary">
        7-Days
      </Button>
      <Button variant="outlined" color="primary">
        1-Months
      </Button>
      
    </div>
  );
}
