const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;

const currentDate = new Date();
currentDate.setHours(currentHours);
currentDate.setMinutes(currentMinutes);
currentDate.setSeconds(currentSeconds)

const date = new Date();
date.setHours(23);
date.setMinutes(59);
date.setSeconds(59);

console.log((date - currentDate) / 1000)