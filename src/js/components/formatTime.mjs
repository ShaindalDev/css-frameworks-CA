/**
 * This wil change the time and date format that is received from the API 
 * @param {*} date 
 * @returns this returns the time and date format you choose inside the function
 */
export function formatTimeChange(date) {
    const formatApi = new Date(date);
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

    return formatApi.toLocaleDateString("en-us", option);
}