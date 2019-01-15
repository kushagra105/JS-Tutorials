const today = new Date();
let output;

console.log(today);

// Date MM-DAY-YEAR
let birthday = new Date('1-5-1987');

// Another way
birthday = new Date('January 5 1987');

output = today.getMonth();
output = today.getDate();
output = today.getDay();
output = today.getFullYear();
output = today.getMinutes();
output = today.getHours();
output = today.getTime();
output = today.getFullYear();
output = today.setFullYear(2018);

console.log(output);