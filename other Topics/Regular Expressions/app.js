
/*
    \d   Any Number
    \w   Any number or letter
    \s   any white space (space, tab or line break)
    \D   character that's not a digit
    \W   not alphanumeric character
    \S   any character but a whitespace
    .   any character but a line break
*/


//  You can create a regular expression with 2 different methods

const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

// Check if it includes 1992...
console.log(/[0123456789]/.test('1992'));

// Same as above
console.log(/[0-9]/.test('1992'));

// a date following the pattern... 20-10-2018
const dateRegExp = /\d\d-\d\d-\d\d\d\d/ ;
const date = '20-10-2018';
console.log( dateRegExp.test(date) );

//Check the time: 12:00
const TimeRegExp = /\d\d:\d\d/;
const time = '18:03';
console.log( TimeRegExp.test(time) );

// Check time: 08:30 PM
const TimeRegExpComplete = /\d\d:\d\d \D\D/;
const completeTime = '08:30 PM';
const completeTime = '08:30 10';
console.log(TimeRegExpComplete.test(completeTime));

// Check for multiple numbers
const repeteadedNumber = /\d+/;
const digits = 1234;
console.log(repeteadedNumber.test(digits));

// Deny the expression ^
const denyRegExp = /[^0-9]/;
const numbers = 12345;
console.log(denyRegExp.test(numbers));

// The Syntax {1,2} represents that a character can appear between 1 & 2 times
let expReg = /\d{1,2}-\d{1,2}-\d{4}/
const date = '10-20-2018';
const date2 = '10-2-2018';
const date3 = '1-20-2018';
console.log(expReg.test(date));
console.log(expReg.test(date2));
console.log(expReg.test(date3));


// Check for letters or numbers
const messageRegExp = /\w+/;
let message ;
message = 'Test Message';
message = ' ';
message = 1234;
console.log(messageRegExp.test(message));

// Check for numbers
const checkNumbers = /\d+/;
const numbers = 1234;
console.log(checkNumbers.test(numbers));

// Check for only numbers
const checkForNumbers = /([0-9])\w+/;
const numbers = 1234;
console.log(checkForNumbers.test(numbers));


// Check for Uppercase letters only
const uppercaseRegExp = /([A-Z])\w+/;
let message;
message = 'UPPERCASE';
message = 1234;
message = 'message';
console.log(uppercaseRegExp.test(message));

// Check for lowercase only
const lowercaseRegExp = /([a-z])\w+/;
let message;
message = 'lowercase';
message = 1234;
message = 'MESSAGE';
console.log(lowercaseRegExp.test(message));

// A REALLY COMPLEX REGULAR EXPRESSION
const expRegMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = 'email@email.com';
console.log(expRegMail.test(email));
   