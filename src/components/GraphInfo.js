import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(0),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '30.74',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
      <div>
        <div>
           Hourly Commitment:
        </div>
        <div className={classes.root}>
            <div>
                <FormControl  className={classes.margin}>
                <Input
                    id="standard-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                <FormHelperText id="my-helper-text">Default value is highest savings from graph.</FormHelperText>
                </FormControl>
            </div>
        </div>
        <div className="recommend">
            AWS Recommendation: ${37.50}
            <div className="recommend helper">
                7 Day analysis by AWS
            </div>
        </div>
        <div className="expected">
            Expected Target Coverage<br/> 
            {0.99}%
            <div className="temp">
                <div><AssessmentIcon/></div>
                <div class="expectedView">View Your Current Coverage</div>
            </div>
        </div>
        <div className="estimated">
            Estimated Net Additional Monthly Savings<br/>
            ${5028.64}
            <div className="estimated helper">
                Estimated savings produced by savings plan purchase
            </div>
        </div>
      </div>
  );
}




