// src/components/HolidayCalendar.jsx
import React, { useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css';
import './Holiday.css'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import getHolidays  from "../utils/api";

function HolidayCalendar() {
    const [value, setValue] = useState(new Date());
    const [holidayDates, setHolidayDates] = useState([]);

    useEffect(() => {
        const year = new Date().getFullYear();
        getHolidays(year, "ET").then((holidays) => {
            const holidayDateStrings = holidays.map((h) => {
                const [y, m, d] = h.date.iso.split("-");
                return{
                    date: new Date(y, m - 1, d),
                    name: h.name.length > 15 ? h.name.slice(0, 15) + '…' : h.name
                }
            });
            setHolidayDates(holidayDateStrings);
        });
    }, []);

    const isHoliday = (date) => {
        return holidayDates.some(h => h.date.toDateString() === date.toDateString());
    };

    const tileClassName = ({ date, view }) => {
        if (view === "month" && isHoliday(date)) {
        return "holiday-tile";
        }
        return null;
    };

    const tileContent=({ date, view }) => {
        if (view === 'month') {
            const holiday = holidayDates.find(h => h.date.toDateString() === date.toDateString());
            return holiday ? (
                <div className="holiday-label">{holiday.name}</div>
            ) : null;
        }
        return null;
    }

    return (
        <div className="calendar-container">
            <h1>📅 My Event Calendar</h1>
            <Calendar
                onChange={setValue}
                value={value}
                tileClassName={tileClassName}
                tileContent={tileContent}
            />
            <p>Selected: {value.toDateString()}</p>
        </div>
    );
}

export default HolidayCalendar;
