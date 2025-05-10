
export default function getHolidays(year = 2025, country = "ET") {
    const apiKey = import.meta.env.VITE_CALENDARIFIC_KEY;
    const url = `https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=${country}&year=${year}`;

    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.response.holidays || [];
        })
        .catch((error) => {
            console.error("Failed to fetch holidays:", error);
            return [];
        });
}
