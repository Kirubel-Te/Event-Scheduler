import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';

export default function BasicDateCalendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                sx={{
                    backgroundColor: '#000000',
                    color: 'white',
                    padding: 2,
                    borderRadius: 2,
                    display: 'inline-block',
                }}
            >
                <DateCalendar
                    sx={{
                        backgroundColor: '#000000',
                        color: 'white',
                        '.MuiPickersCalendarHeader-root': {
                        color: 'white',
                        },
                        '.MuiDayCalendar-weekDayLabel, .MuiDayCalendar-day': {
                        color: 'white',
                        },
                        '.Mui-selected': {
                            backgroundColor: '#212121', // Example selection color
                        },
                        '.MuiPickersDay-root': {
                            color: 'white',             // 🟢 this sets the number (day) color
                        },
                        '.MuiPickersCalendarHeader-switchViewIcon': {
                            color: 'white',
                        },
    // Previous and next month arrows
                        '.MuiPickersArrowSwitcher-button': {
                            color: 'white',
                        },
                        '.MuiPickersDay-today': {
                            border: '1px solid rgb(213, 216, 221)',   // Change the border
                            color: 'white',
                        },
                    }}
                />
            </Box>
        </LocalizationProvider>
    );
}
