
import React, { useEffect, useState } from "react";
import getHolidays from "../utils/api";

const Holiday = () => {
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        getHolidays(2025, "ET").then((holidayData) => {
            setHolidays(holidayData);
        });
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mb-2">🇺🇸 US Holidays in 2025</h2>
            <ul className="list-disc pl-5">
                {holidays.map((holiday) => (
                    <li key={holiday.name + holiday.date.iso}>
                        <strong>{holiday.name}</strong> – {holiday.date.iso}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Holiday;
