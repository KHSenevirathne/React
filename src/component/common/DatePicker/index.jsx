/*
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';



export default function BasicDatePicker(props) {
    const [value, setValue] = React.useState(null);

    return (
        <Grid style={{width: '13vw', backgroundColor: 'white', borderRadius: '5px', margin: '2px'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label={props.label}
                    value={value}
                    onChange={(newValue) => {
                        //(props.label ==="Pick-Up-Date")?localStorage.setItem("pickUpDate",newValue):localStorage.setItem("returnDate",newValue)
                        setValue(newValue);
                    }}

                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Grid>

    );
}*/
