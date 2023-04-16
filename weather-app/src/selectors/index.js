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