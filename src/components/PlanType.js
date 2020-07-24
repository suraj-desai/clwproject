import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';

export default function PlanType() {
  const [value, setValue] = React.useState('computeSp');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Savings Plan Type</FormLabel>
      <RadioGroup aria-label="planType" name="palnType" value={value} onChange={handleChange}>
        <div className="icon">
            <FormControlLabel value="computeSp" control={<Radio color="primary"/>} label="compute savings plan" />

            <div className="iconPic"><InfoRoundedIcon/></div>
        </div>
        <div className="icon">
            <FormControlLabel value="instanceSp" control={<Radio color="primary"/>} label="EC2 instance savings plans" />
            <div className="iconPic"><InfoRoundedIcon/></div>
        </div>
      </RadioGroup>
    </FormControl>
  );
}
