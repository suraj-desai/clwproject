import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function PlanTerm() {
  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Savings Plan Term</FormLabel>
      <RadioGroup aria-label="planTerm" name="planTerm" value={value} onChange={handleChange}>
        <FormControlLabel value="1" control={<Radio />} label="1-Year" />
        <FormControlLabel value="3" control={<Radio />} label="3-Year" />
      </RadioGroup>
    </FormControl>
  );
}
