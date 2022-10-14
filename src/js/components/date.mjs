/**
 * 
 * @param {Number} days days in the past from the current date
 * @returns 
 */
function getdatePassed(days) {
    const date = new Date();
    const previousDate = new Date(date.getTime());
    previousDate.setDate(date.getDate() - days);

    return previousDate;
};


/**
 * Checking if date on post was created after an X amount of days that has past by
 * @param {Date} created date
 * @param {Number} daysAgo Days ago to check against
 * @returns true or false 
 */
export function isDatePassed({ created }, daysAgo) {
    const dateToCheck = new Date(created);
    const dateGone = getdatePassed(daysAgo);
    return dateToCheck >= dateGone;
}