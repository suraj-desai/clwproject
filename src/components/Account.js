import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const accounts = [
  {
    value: 'AxisBank',
    label: 'AxisBank',
  },
  {
    value: 'ICICIBank',
    label: 'ICICIBank',
  },
  {
    value: 'BOI',
    label: 'BOI',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
      width: '30ch',
    },
  },
}));

export default function Account() {
  const classes = useStyles();
  const [account, setAccount] = React.useState('SELECT ACCOUNT');

  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="selectAccount"
          select
          label="Purchase in Account"
          value={account}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {accounts.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
