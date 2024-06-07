import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function ControlledRadioButtonsGroup() {
    const [value, setValue] = React.useState('Wallet');

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
                    value="Wallet"
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
                    label="Wallet"
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: '500',
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#121114',
                    }}
                />
                <FormControlLabel
                    value="Wallet"
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
                    label="Wallet"
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: '500',
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#121114',
                    }}
                />
            </RadioGroup>
        </FormControl>
    );
}
