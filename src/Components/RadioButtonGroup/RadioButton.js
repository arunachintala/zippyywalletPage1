
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function ControlledRadioButtonsGroup() {
    const [value, setValue] = React.useState('Bank transfers ( Takes 3-5 days for ACH transfer, Free)');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel
                    value="Bank transfers ( Takes 3-5 days for ACH transfer, Free)"
                    control={
                        <Radio
                            sx={{
                                color: '#D54029',
                                '&.Mui-checked': {
                                    color: '#D54029',
                                },
                            }}
                        />
                    }
                    label={
                        <span
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '21.01px',
                                color: '#121114',
                            }}
                        >
                            Bank transfers ( Takes 3-5 days for ACH transfer, Free)
                        </span>
                    }
                />
                <FormControlLabel
                    value="Card transfer( Instant, processing fee of 2.9% + 0.3$ applied)"
                    control={
                        <Radio
                            sx={{
                                color: '#D54029',
                                '&.Mui-checked': {
                                    color: '#D54029',
                                },
                            }}
                        />
                    }
                    label={
                        <span
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '21.01px',
                                color: '#121114',
                            }}
                        >
                            Card transfer( Instant, processing fee of 2.9% + 0.3$ applied)
                        </span>
                    }
                />
            </RadioGroup>
        </FormControl>
    );
}