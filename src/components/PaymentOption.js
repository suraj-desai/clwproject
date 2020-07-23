import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function PaymentOption() {
  const [value, setValue] = React.useState('all');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Payment Option</FormLabel>
      <RadioGroup aria-label="paymentOption" name="paymentOption" value={value} onChange={handleChange}>
        <FormControlLabel value="all" control={<Radio color="primary" />} label="All Upfront" />
        <FormControlLabel value="partial" control={<Radio color="primary" />} label="Partial Upfront" />
        <FormControlLabel value="no" control={<Radio color="primary"/>} label="No Upfront" />
      </RadioGroup>
    </FormControl>
  );
}


