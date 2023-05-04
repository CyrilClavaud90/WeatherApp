import { DateTime } from "luxon";

export function currentDate() {
    return DateTime.now().setLocale('en-GB').toFormat("cccc dd LLLL yyyy");
};

export function currentTime() {
    return DateTime.now().toFormat("HH:mm");
};

export function formatTime(secs) {
   return DateTime.fromSeconds(secs).toFormat("HH:mm");
};

export function nextDay() {
    const todayIndex = new Date().getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'friday', 'Saturday'];
    return todayIndex < 6 ? days[todayIndex + 1] : days[0];
};

export function dayAfterTomorrow() {
    const todayIndex = new Date().getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'friday', 'Saturday'];

    if (todayIndex < 5) return days[todayIndex + 2];
    return todayIndex === 5 ? days[0] : days[1];
};

export function roundToOneDecimal(nbr) {
    const rounder = (Math.round(nbr * 10) / 10).toFixed(1);
    if (rounder[rounder.length - 1] === '0') return Math.round(nbr); 
    return rounder;
};
